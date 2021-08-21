import { get } from "@loopback/rest";
import ApiQuotaRecordRepo from "../repositories/ApiQuotaRecordRepo";



export class SystemStatusController {


    @get('systemStatus/getApiQuotaRecords')
    getApiQuotaRecords() {
        return ApiQuotaRecordRepo.where();
    };

};