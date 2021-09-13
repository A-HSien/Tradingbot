import { get, RestBindings, Request } from "@loopback/rest";
import ApiQuotaRecordRepo from "../repositories/ApiQuotaRecordRepo";
import { connection } from 'mongoose';
import _ from "lodash";


import compute from '@google-cloud/compute';
import { project } from "../common/GoogleConst";
import { inject } from "@loopback/core";
const instancesClient = new compute.InstancesClient();
const addressesClient = new compute.AddressesClient();
const region = 'asia-east1';
const zone = 'asia-east1-b';



export class SystemStatusController {


    @get('systemStatus/getApiQuotaRecords')
    getApiQuotaRecords() {
        return ApiQuotaRecordRepo.where();
    };


    @get('systemStatus/requestInfo')
    requestInfo(@inject(RestBindings.Http.REQUEST) request: Request) {
        const { ip, ips, headers } = request;
        console.info('requestInfo', { ip, ips, headers });
        const forwarded = headers['x-forwarded-for'];
        return;
    };


    @get('systemStatus/livenessProbe')
    async livenessProbe() {
        const dbIsOk = connection.readyState !== 0 && connection.readyState !== 3;

        if (!dbIsOk) {
            const msg = 'livenessProbe check not pass - db connection failed';
            console.error(msg);
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

        const prodIps = new Set(['34.81.132.186', '35.201.191.95']);
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
            const throwError = () => {
                const err = 'no free addresses';
                console.error(err);
                throw new Error(err);
            };
            if (freeAddresses.length === 0) throwError();

            needUpdate.forEach(async vm => {
                const address = freeAddresses.pop();
                if (!address)
                    throwError();
                else {
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
                }
            });
        }
        return true;
    };
};