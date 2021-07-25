
import axios from "axios";
import { useEffect, useState } from "react";
import { formatJson } from "src/common/utities";
import baseStyles, { codeBlockStyle, createClass } from "src/styles";



const styles = {
    block: createClass(
        'mb-3'
    )
};


const order = {
    token: '[Your Token]',
    action: 'order',

    symbol: 'LTCBTC',
    side: 'BUY',
    type: 'MARKET',
    quantity: '100',
};

const SignalManual = () => {

    const [token, setToken] = useState('');

    useEffect(() => {
        axios.get<string>('/signal/getToken')
            .then(r => setToken(r.data));
    }, []);


    return <div className={baseStyles.pageEdge}>

        <div className={styles.block}>
            token:
            <div className={codeBlockStyle}>
                {token}
            </div>
        </div>

        <label>訊號設定說明:</label>
        <div className={styles.block}>
            <a href="https://binance-docs.github.io/apidocs/spot/cn/#c15d2e6b39" target="_blank">現貨單:</a>
            <br />
            <pre className={codeBlockStyle}>
                {formatJson(order)}
            </pre>
        </div>

        <h3>其他資訊:</h3>
        若您的訊號來自TradingView, 可使用TradingView提供的
        <a href="https://www.tradingview.com/support/solutions/43000531021-how-to-use-a-variable-value-in-alert/">
            變數
        </a>設定訊號
    </div>;
};


export default SignalManual;