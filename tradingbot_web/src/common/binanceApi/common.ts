import { createHmac } from "crypto";



export const baseUrl = 'https://api.binance.com';


export const createSignature = (secret: string, content = '') => {
   const hmac = createHmac('sha256', secret);
   hmac.update(content);
   return hmac.digest('hex');
}
