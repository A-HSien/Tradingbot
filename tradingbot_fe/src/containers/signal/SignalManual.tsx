import axios from "axios";
import { useEffect, useState } from "react";
import { formatJson } from "src/common/utities";
import { pageEdge, codeBlockStyle, createClass, tableCell, table, buttonStyle } from "src/styles";



const styles = {

    block: createClass(
        'mb-6',
    ),
    token: createClass(
        codeBlockStyle,
    )
};

const tradingApi = '/signal/trading';
const orderSample = {
    action: 'FOrderTest',
    token: '[Your Token]',

    symbol: 'DOGEUSDT',
    side: 'BUY',
    quantity: '5.1',
};

const SignalManual = () => {

    const [token, setToken] = useState('');
    const [actions, setActions] = useState([] as {
        action: string,
        description: string,
        api: string
    }[]);
    const [testSubmitted, setTestSubmitted] = useState(false);


    useEffect(() => {
        axios.get('/signal/getToken')
            .then(r => setToken(r.data));

        axios.get('/signal/actions')
            .then(r => setActions(r.data));
    }, []);

    const submitTest = () => {
        const payload = { ...orderSample };
        payload.token = token;
        axios.post(tradingApi, payload).then(resp => {
            setTestSubmitted(true);
        });
    };


    return <div className={pageEdge}>


        <label>訊號範例:</label>

        <div className={styles.block}>
            <pre className={codeBlockStyle}>
                api url: {window.location.host + tradingApi}<br />
                payload:
                {formatJson(orderSample)}
                <br />
                <a href="https://binance-docs.github.io/apidocs/spot/cn/#c15d2e6b39"
                    target="_blank" rel="noreferrer">
                    詳細參數說明
                </a>
                <br />
                {
                    !testSubmitted &&
                    <button className={buttonStyle} onClick={submitTest}>送出</button>
                }
                {
                    testSubmitted &&
                    <div>測試已送出,請至[訊號紀錄]與[帳戶操作記錄]查詢結果</div>
                }
            </pre>
        </div>

        <div className={styles.block}>
            token:
            <div className={styles.token}>
                <div>{token}</div>
            </div>
        </div>

        <div className={styles.block}>
            action對照表:
            <table className={table}>
                <thead>
                    <tr>
                        <th className={tableCell}>名稱</th>
                        <th className={tableCell}>功能描述</th>
                        <th className={tableCell}>api</th>
                    </tr>
                </thead>
                <tbody>
                    {actions.map((act, i) => (
                        <tr key={i}>
                            <td className={tableCell}>{act.action}</td>
                            <td className={tableCell}>{act.description}</td>
                            <td className={tableCell}>{act.api}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <h3>其他資訊:</h3>
        若您的訊號來自TradingView, 可使用TradingView提供的
        <a href="https://www.tradingview.com/support/solutions/43000531021-how-to-use-a-variable-value-in-alert/" rel="noreferrer">
            變數
        </a>設定訊號
    </div>;
};


export default SignalManual;