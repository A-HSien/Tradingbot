import { Logging } from '@google-cloud/logging';
import { project } from './GoogleConst';


export const attach = () => {
    const {
        error
    } = console;

    const logging = new Logging({ projectId: project });
    const logger = logging.log('tradingbot_web');
    const resource = { type: 'global' };
    const metadata = new Map([
        ['log', { severity: 'DEBUG', resource }],
        ['info', { severity: 'INFO', resource }],
        ['warn', { severity: 'WARNING', resource }],
        ['error', { severity: 'ERROR', resource }],
    ]);

    const write = (
        type: keyof typeof console,
        message: string,
        data: any
    ) => {
        const payload = {
            message,
            ...data,
        };
        const entry = logger.entry(metadata.get(type), payload);
        logger.write(entry).catch(err => {
            const data = { payload, error: err?.details || err }
            error('google logger error', data);
        });
    };


    console.log = (message: string, data: any) => {
        write('log', message, data);
    };

    console.info = (message: string, data: any) => {
        write('info', message, data);
    };

    console.warn = (message: string, data: any) => {
        write('warn', message, data);
    };

    console.error = (message: string, data: any) => {
        write('error', message, data);
    };
}
