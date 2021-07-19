

const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const config = {
    logFolder: './/logs//',
    logFile: 'Web-%DATE%.log',
    logLevel: 'debug'
};


const logFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(
        (info: any) => `${info.timestamp} ${info.level}: ${info.message}`
    )
);


const transport = new DailyRotateFile({
    filename: config.logFolder + config.logFile,
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    prepend: true,
    level: config.logLevel
});



export const logger = winston.createLogger({
    format: logFormat,
    transports: [
        transport,
        new winston.transports.Console({
            level: config.logLevel,
        }),
    ]
});
