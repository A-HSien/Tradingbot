import { createHmac } from "crypto";



export const baseUrl = 'https://api.binance.com';


export const createSignature = (secret: string, content = '') => {
   const hmac = createHmac('sha256', secret);
   hmac.update(content);
   return hmac.digest('hex');
}

/** 發送端可能為訊號源 => 不回拋錯誤訊息 */
export const errorHandler = (err: Error) => {
   console.error('Binance api error', err);
};
