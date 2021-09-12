import { Interceptor } from "@loopback/core";
import { performance } from "perf_hooks";


export const PerformanceLog: Interceptor = async (invocationCtx, next) => {
    const start = performance.now();
    const result = await next();
    const end = performance.now();
    const spent = (end - start) / 1000;
    console.log(`PerformanceLog: ${invocationCtx.methodName} ${spent} secs`, {
        methodName: invocationCtx.methodName,
        spent: (end - start) / 1000
    });
    return result;
};