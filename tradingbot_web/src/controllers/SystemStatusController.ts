import { get } from "@loopback/rest";
import ApiQuotaRecordRepo from "../repositories/ApiQuotaRecordRepo";
import { connection } from 'mongoose';
import _ from "lodash";


import compute from '@google-cloud/compute';
import { project } from "../common/GoogleConst";
const instancesClient = new compute.InstancesClient();
const addressesClient = new compute.AddressesClient();
const region = 'asia-east1';
const zone = 'asia-east1-b';




export class SystemStatusController {


    @get('systemStatus/getApiQuotaRecords')
    getApiQuotaRecords() {
        return ApiQuotaRecordRepo.where();
    };


    @get('systemStatus/healthy')
    async healthy() {
        const status: Record<string, any> = {};
        status.db = connection.readyState !== 0 && connection.readyState !== 3;

        const [instanceList] = await instancesClient.list({ project, zone });
        const vms = _.chain(instanceList)
            .orderBy(vm => vm.creationTimestamp, 'desc');

        const prodIps = new Set(['34.81.132.186', '35.201.191.95']);
        const checkIp = (vm: typeof instanceList[0]) => {
            const allConfig = _.chain(vm.networkInterfaces)
                .flatMap(net => net.accessConfigs)
                .value();
            return allConfig.some(conf => prodIps.has(conf?.natIP || ''));
        };
        const needUpdate = vms.take(2).filter(vm => checkIp(vm)).value();
        if (needUpdate.length > 0) {
            console.log('vm ip need update', needUpdate);

            const [addresses] = await addressesClient.list({ project, region });
            const freeAddresses = addresses.filter(ad =>
                prodIps.has(ad.address || '') && ad.status !== 'IN_USE'
            );
            if (freeAddresses.length === 0)
                console.log('no free addresses');

            needUpdate.forEach(async vm => {
                const address = freeAddresses.pop();
                if (address) {
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
        /*         
        if (Object.values(status).some(e => !e)) {
            const msg = 'healthy check not pass';
            console.error(msg, status);
            throw new Error(msg);
        } 
        */
        return status;
    };

};