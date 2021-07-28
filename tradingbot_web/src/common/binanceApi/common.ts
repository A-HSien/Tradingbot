import { createHmac } from "crypto";



export const SpotApiBase = 'https://api.binance.com';
export const FutureApiBase = 'https://fapi.binance.com';


export const createSignature = (secret: string, content = '') => {
   const hmac = createHmac('sha256', secret);
   hmac.update(content);
   return hmac.digest('hex');
};
