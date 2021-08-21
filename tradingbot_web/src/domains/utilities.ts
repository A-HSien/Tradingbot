import _ from "lodash";
import { networkInterfaces } from "os";


export function omit<T extends object>(obj: T, ...keys: (keyof T)[]) {
    return _.omit.apply(null, [obj, ...keys]) as T;
};


export const cacheable = <T extends (...args: any) => any>(func: T) => {
    let result: any;
    return ((...args: any) => {
        if (!result) result = func.apply(func, args);
        return result;
    }) as T;
};

const getIpOnce = () => {
    const nets = Object.values(networkInterfaces());
    const external = _.flatten(nets).find(e => !e.internal && e.family === 'IPv4');
    console.log('nets:', external);
    return external?.address || '';
};
export const getIP = cacheable(getIpOnce);


export const clone = <T>(obj: T) => JSON.parse(JSON.stringify(obj)) as T;