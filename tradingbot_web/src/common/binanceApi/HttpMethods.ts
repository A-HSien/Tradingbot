import axios from "axios";
import { createSignature } from "./common";


export const BinanceAPI = axios.create();

BinanceAPI.interceptors.response.use(resp => {
    const quotaEntries = Object.entries(resp.headers)
        .filter(([key]) => key.includes('x-mbx'));
    console.log('BinanceAPI log:', {
        url: resp.config.url,
        quota: Object.fromEntries(quotaEntries),
    });
    return resp;
}, error => {
    console.error('BinanceAPI error:', error);
    return Promise.reject(error);
});

const addSecretAndTimestamp = (params: URLSearchParams, apiSecret: string) => {

    params.append('timestamp', Date.now().toString());

    const signature = createSignature(
        apiSecret,
        params.toString()
    );
    params.append('signature', signature);
    return params;
};

export const signedPost = <T>(api: string, params: URLSearchParams, apiKey: string, apiSecret: string) => {

    params = addSecretAndTimestamp(params, apiSecret);
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

export const signedGet = <T>(api: string, params: URLSearchParams, apiKey: string, apiSecret: string) => {

    params = addSecretAndTimestamp(params, apiSecret);

    return BinanceAPI.get<T>(api, {
        headers: { 'X-MBX-APIKEY': apiKey },
        params
    });
}