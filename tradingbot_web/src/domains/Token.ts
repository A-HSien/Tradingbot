import { promisify } from 'util';


export const TOKEN_SECRET_VALUE = 'tradingbot_s3cr3t';
export enum TokenType {
    'login' = 'login',
    'signal' = 'signal',
};


const jwt = require('jsonwebtoken');
const signAsync: (...args: any[]) => Promise<string> = promisify(jwt.sign);
const verifyAsync: (...args: any[]) => Promise<Record<string, string>> = promisify(jwt.verify);


/** expiresIn: secs */
export const signToken = (
    payload: Record<string, string>,
    tokenType: TokenType,
    expiresIn: number
) => {
    payload.type = tokenType;
    return signAsync(payload, TOKEN_SECRET_VALUE, { expiresIn });
};

export const verifyToken = async (token: string, tokenType: TokenType) => {
    if (!token) {
        throw new Error(
            `Error verifying token : 'token' is null`
        );
    }
    const decoded = await verifyAsync(token, TOKEN_SECRET_VALUE)
        .catch(error => {
            throw new Error(
                `Error verifying token : ${error.message}`
            );
        });
    if (decoded.type !== tokenType) {
        throw new Error(
            `Error verifying token : type is not ${TokenType[tokenType]}`
        );
    }
    return decoded;
};
