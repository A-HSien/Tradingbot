import axios from "axios";
import { createSignature } from "./common";


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
    return axios.post<T>(
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

    return axios.get<T>(api, {
        headers: { 'X-MBX-APIKEY': apiKey },
        params
    });
}