import { get, RestBindings, Request } from "@loopback/rest";
import ApiQuotaRecordRepo from "../repositories/ApiQuotaRecordRepo";
import { connection } from 'mongoose';
import _ from "lodash";


import compute from '@google-cloud/compute';
import { project } from "../common/GoogleConst";
import { inject } from "@loopback/core";
import axios from "axios";
import { SERVER_ROOT_URI } from "../config";
import { getApiQuotaRecords } from "../common/binanceApi/HttpMethods";
const instancesClient = new compute.InstancesClient();
const addressesClient = new compute.AddressesClient();
const region = 'asia-east1';
const zone = 'asia-east1-b';
const prodIps = new Set(['34.81.132.186', '35.201.191.95']);



export class SystemStatusController {


    @get('systemStatus/getApiQuotaRecords')
    getApiQuotaRecords() {
        return ApiQuotaRecordRepo.where();
    };


    @get('systemStatus/getIp')
    getIp(@inject(RestBindings.Http.REQUEST) request: Request) {
        const xForwarded = request.headers['x-forwarded-for'];
        const ip = Array.isArray(xForwarded) ? xForwarded.find(e => true) : xForwarded;
        return ip?.split(',')[0]?.trim() || '';
    };


    @get('systemStatus/livenessProbe')
    async livenessProbe() {
        const dbIsOk = connection.readyState !== 0 && connection.readyState !== 3;

        if (!dbIsOk) {
            const msg = 'livenessProbe check not pass - db connection failed';
            console.error(msg, { msg });
            throw new Error(msg);
        }


        const ip = await axios.get<string>(SERVER_ROOT_URI + '/systemStatus/getIp')
            .then(r => r.data)
            .catch(err => console.info('livenessProbe network not ready'))
        if (ip && !prodIps.has(ip)) {
            const msg = 'livenessProbe check not pass - ip not match';
            console.error(msg, { msg, ip });
            throw new Error(msg);
        }

        const quota = getApiQuotaRecords().find(_ => true)?.value;
        if (quota && Number(quota) > 1000) {
            const msg = 'livenessProbe check not pass - BinanceAPI quota exceeded';
            console.error(msg, { msg, quota });
            throw new Error(msg);
        }



        return true;
    };


    @get('systemStatus/startupProbe')
    async startupProbe() {
        console.log('startupProbe activated');
        const [instanceList] = await instancesClient.list({ project, zone });
        const vms = _.chain(instanceList)
            .orderBy(vm => vm.creationTimestamp, 'desc');

        const isProdIp = (vm: typeof instanceList[0]) => {
            const allConfig = _.chain(vm.networkInterfaces)
                .flatMap(net => net.accessConfigs)
                .value();
            return allConfig.some(conf => prodIps.has(conf?.natIP || ''));
        };
        const needUpdate = vms.take(2).filter(vm => !isProdIp(vm)).value();
        if (needUpdate.length > 0) {
            console.log(
                `vm ip need update - ${needUpdate.map(vm => vm.name).join(' / ')}`,
                needUpdate
            );

            const [addresses] = await addressesClient.list({ project, region });
            const freeAddresses = addresses.filter(ad =>
                prodIps.has(ad.address || '') && ad.status !== 'IN_USE'
            );

            needUpdate.forEach(async vm => {
                const address = freeAddresses.pop();
                if (!address) {
                    const err = 'no free addresses';
                    console.error(err);
                    throw new Error(err);
                }
                console.log(`apply address - ${address.address}`, address);
                const vmName = vm.name;
                const network = vm.networkInterfaces?.find(x => true);
                const toDelete = network?.accessConfigs?.find(x => true);
                if (toDelete) {
                    await instancesClient.deleteAccessConfig({
                        project, zone,
                        instance: vmName,
                        networkInterface: network?.name,
                        accessConfig: toDelete.name
                    });
                }
                await instancesClient.addAccessConfig({
                    project, zone,
                    instance: vmName,
                    networkInterface: network?.name,
                    accessConfigResource: {
                        natIP: address.address,
                        networkTier: "PREMIUM",
                    }
                });
            });
        }
        return true;
    };
};