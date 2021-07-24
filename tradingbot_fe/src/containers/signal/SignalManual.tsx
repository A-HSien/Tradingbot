
import axios from "axios";
import { useEffect, useState } from "react";
import baseStyles, { createClass } from "src/styles";


export const codeBlockStyle = createClass(
    'w-full', 'break-all',
    'border', 'rounded-xl',
    'bg-gray-600',
    'p-2', 'mb-3',
);
const styles = {
};

const stringify = (obj: any) => JSON.stringify(obj, null, "\t");

const order = {
    action: 'order',
    symbol: 'XLMETH',
    side: 'BUY',
    quantity: '100',
    token: '[Your Token]',
};

const SignalManual = () => {

    const [token, setToken] = useState('');


    useEffect(() => {
        axios.get<string>('/signal/getToken')
            .then(r => setToken(r.data));
    }, []);


    return <div className={baseStyles.pageEdge}>
        token:
        <div className={codeBlockStyle}>
            {token}
        </div>
        訊號設定說明:
        <pre className={codeBlockStyle}>
            現貨單:<br />
            {stringify(order)}
        </pre>
    </div>;
};


export default SignalManual;