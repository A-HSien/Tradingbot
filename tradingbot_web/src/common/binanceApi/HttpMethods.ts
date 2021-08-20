import axios from "axios";
import { createHmac } from "crypto";
import { getIP } from "../../domains/utilities";
import { decrypt } from "../GoogleKms";


export const BinanceAPI = axios.create();

let apiQuotaRecords: { time: Date, ip: string, key: string, value: string }[] = [];
export const getApiQuotaRecords = () => apiQuotaRecords;
const expire = 1000 * 60 * 60 * 24 * 3; // 3 days



BinanceAPI.interceptors.response.use(resp => {
    const quotaEntries = Object.entries(resp.headers)
        .filter(([key]) => key.includes('x-mbx'));
    const quota = Object.fromEntries(quotaEntries);

    console.log('BinanceAPI log:', { url: resp.config.url, quota, });
    const time = new Date();
    if (
        apiQuotaRecords.length > 1500 &&
        (time.getTime() - apiQuotaRecords[1000].time.getTime()) > expire
    ) apiQuotaRecords.length = 1000;

    quotaEntries.map(e => ({
        time,
        ip: getIP(),
        key: e[0],
        value: e[1] as string
    })).forEach(e => apiQuotaRecords.unshift(e));
    return resp;

}, error => {
    console.error('BinanceAPI error:', error);
    return Promise.reject(error);
});


const createSignature = (secret: string, content = '') => {
    const hmac = createHmac('sha256', secret);
    hmac.update(content);
    return hmac.digest('hex');
};

const addSecretAndTimestamp = async (params: URLSearchParams, apiSecret: string) => {
    if (!apiSecret) {
        const msg = 'apiSecret is required';
        console.error(msg, params);
        throw new Error(msg)
    }
    params.append('timestamp', Date.now().toString());
    const signature = createSignature(
        await decrypt(apiSecret),
        params.toString()
    );
    params.append('signature', signature);
    return params;
};

export const signedPost = async <T>(api: string, params: URLSearchParams, apiKey: string, apiSecret: string) => {
    params = await addSecretAndTimestamp(params, apiSecret);
    return BinanceAPI.post<T>(
        api,
        params.toString(),
        {
            headers: {
                'X-MBX-APIKEY': apiKey,
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }
    )
};

export const signedGet = async <T>(api: string, params: URLSearchParams, apiKey: string, apiSecret: string) => {
    params = await addSecretAndTimestamp(params, apiSecret);
    return BinanceAPI.get<T>(
        api,
        {
            headers: { 'X-MBX-APIKEY': apiKey },
            params
        }
    );
};
