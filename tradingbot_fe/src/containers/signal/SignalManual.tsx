import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { formatJson } from "src/common/utities";
import { pageEdge, codeBlockStyle, createClass, tableCell, table, buttonStyle, selectStyle, borderGray } from "src/styles";



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
    action: 'FOrder',
    symbol: "{{ticker}}",
    side: "{{strategy.order.action}}",
    quantity: '數量(USDT)',
    token: '你的Token',
};

const SignalManual = () => {

    const orderSampleContent = useMemo(() => formatJson(orderSample), []);
    const [token, setToken] = useState('');
    const [actions, setActions] = useState([] as {
        action: string,
        description: string,
        api: string
    }[]);
    const [testSubmitted, setTestSubmitted] = useState(false);
    const [symbols, setSymbols] = useState([] as string[]);
    const [symbol, setSymbol] = useState('');


    useEffect(() => {
        axios.get('/signal/getToken')
            .then(r => setToken(r.data));

        axios.get('/signal/getAllSymbol')
            .then(r => setSymbols(r.data.sort()));

        axios.get('/signal/actions')
            .then(r => setActions(r.data));
    }, []);


    const submitTest = () => {
        if (!symbol) return;
        const payload = {
            action: 'FOrderTest',
            symbol,
            side: "BUY",
            quantity: "1000",
            token,
        };
        axios.post(tradingApi, payload).then(_ => setTestSubmitted(true));
    };


    return <div className={pageEdge}>



        <label>訊號說明:</label>

        <div className={styles.block}>
            <pre className={codeBlockStyle}>
                api url: {window.location.host + tradingApi}<br />
                payload:
                {orderSampleContent}<br /><br />
                symbol和side使用TradingView提供的變數<br />
                quantity與token請自行更改
            </pre>
        </div>


        <label>訊號測試:</label>
        <div className={createClass(
            styles.block, borderGray,
            'p-3', 'flex'
        )}>
            <select onChange={e => setSymbol(e.target.value)}
                value={symbol}
                className={selectStyle}>
                <option value=''>請選擇交易對</option>
                {
                    symbols.length > 0 &&
                    symbols.map((symbol, i) =>
                        <option key={i} value={symbol}>{symbol}</option>)
                }
            </select>
            {
                !testSubmitted &&
                <button className={buttonStyle} onClick={submitTest}>送出</button>
            }
            {
                testSubmitted &&
                <div>測試已送出,請至[訊號紀錄]與[帳戶操作記錄]查詢結果</div>
            }
        </div>

        <div className={styles.block}>
            最新的token:
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
                    </tr>
                </thead>
                <tbody>
                    {actions.map((act, i) => (
                        <tr key={i}>
                            <td className={tableCell}>{act.action}</td>
                            <td className={tableCell}>{act.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <h3>其他資訊:</h3>
        TradingView的
        <a href="https://www.tradingview.com/support/solutions/43000531021-how-to-use-a-variable-value-in-alert/" rel="noreferrer">
            變數
        </a>說明
    </div>;
};


export default SignalManual;