import axios from "axios";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { accountStore } from "src/stores/AccountStore";
import { layoutStore } from "src/stores/LayoutStore";
import baseStyles, { buttonStyle, codeBlockStyle, createClass, inputStyle, selectStyle } from "src/styles";
import { EditingAccount } from "../../models/Account";

export const newAccountId = 'New';
type ActionResult = { result: string, symbols: string[] };

const styles = {
    root: createClass(
        baseStyles.pageEdge,
        'grid', 'grid-cols-2', 'gap-2', 'items-center'
    ),
    input: createClass(
        inputStyle,
        'px-3',
    ),
    inlineInput: createClass(
        inputStyle,
        'px-3', 'ml-2',
    ),
    checkbox: createClass(
        'translate-y-1.5', 'transform-gpu'
    ),
    error: createClass(
        'col-span-2', 'pt-2',
        'text-red-500', 'text-xs'
    ),
    button: createClass(
        baseStyles.buttonStyle,
        'col-span-2',
    ),
};

const newAccount: EditingAccount = {
    id: '',
    ownerId: '',
    name: '',
    groupName: '',
    apiKey: '',
    apiSecret: '',
    disabled: false,
};

const AccountEditor = () => {

    const { id } = useParams<{ id: string }>();
    const [account, setAccount] = useState({ ...newAccount });
    const [symbols, setSymbols] = useState<string[]>([]);
    const [symbol, setSymbol] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState('');
    const [leverage, setLeverage] = useState<number | null>(2);
    const [actionResult, setActionResult] = useState<ActionResult[]>([]);
    const [newOwner, setNewOwner] = useState('');
    const [delegate, setDelegate] = useState('');


    const goBack = () => {
        window.location.href = '/#/Accounts';
        return;
    };


    useEffect(() => {
        const account = id === newAccountId ?
            newAccount :
            accountStore.accounts.find(acc => acc.id === id);
        if (!account) return goBack();

        setAccount({ ...newAccount, ...account });
        axios.get('/signal/getAllSymbol')
            .then(r => setSymbols(r.data.sort()));
    }, [id]);


    useEffect(() => {
        const quantity = account.quantities?.find(e => e.symbol === symbol);
        quantity && setQuantity(quantity.quantity);
    }, [account, symbol]);


    const addQuantity = () => {
        if (!symbol) return;
        const quantities = account.quantities?.filter(e => e.symbol !== symbol) || [];
        quantity && quantities.push({ symbol, quantity });
        setAccount({ ...account, quantities: _.orderBy(quantities, e => e.symbol) });
    };


    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.currentTarget;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setAccount({
            ...account,
            [name]: value
        });
    };


    const save = () => {
        let errors: string[] = [];
        if (!account.name)
            errors.push('請輸入 名稱');
        if (id === newAccountId) {

            if (!account.apiKey)
                errors.push('請輸入 api Key');

            if (!account.apiSecret)
                errors.push('請輸入 api Secret');

            setAccount({ ...account, error: errors.join('\n') });
        }
        if (errors.length > 0) return;

        layoutStore.switchOverlay(true);
        axios.post<string>('/account/save', account).then(r => r.data)
            .then(err => {
                if (err) setError(err);
                else goBack();
                layoutStore.switchOverlay(false);
            })
            .catch(() => {
                setError('儲存失敗, 請檢查您的 api Key 或 api Secret');
                layoutStore.switchOverlay(false);
            });
    };


    const action = (action: 'setLeverage' | 'setMarginType') => {
        layoutStore.switchOverlay(true);
        axios.post<{ symbol: string, result: string }[]>(
            '/account/setup',
            {
                accountId: account.id,
                action,
                leverage
            }
        )
            .then(r => {
                layoutStore.switchOverlay(false);
                const result = {} as Record<string, string[]>;
                r?.data?.forEach(each => {
                    result[each.result] = (result[each.result] || []);
                    result[each.result].push(each.symbol)
                });
                const entries = Object.entries(result);
                setActionResult(entries.map(e => ({ result: e[0], symbols: e[1] })));
            })
            .catch(err => {
                layoutStore.switchOverlay(false);
                setActionResult([{
                    result: err?.data?.message || 'server error',
                    symbols: ['操作失敗']
                }]);
            });
    };

    
    const updateOwnership = (
        action:
            'changeOwner' |
            'delegate'
    ) => {
        layoutStore.switchOverlay(true);
        axios.post<{ symbol: string, result: string }[]>(
            '/account/updateOwnership',
            {
                accountId: account.id,
                userEmail: action === 'changeOwner' ? newOwner : delegate,
                action
            }
        )
            .then(r => {
                layoutStore.switchOverlay(false);
                goBack();
            })
            .catch(err => {
                layoutStore.switchOverlay(false);
            });
    };


    return <div className={styles.root}>

        <label>名稱</label>
        <input className={styles.input}
            type="text" value={account.name}
            onChange={onChange}
            name="name"
        />

        {
            id === newAccountId && <>
                <label>API key</label>
                <input className={styles.input}
                    type="text" value={account.apiKey}
                    onChange={onChange}
                    name="apiKey"
                />

                <label>API Secret</label>
                <input className={styles.input}
                    type="text" value={account.apiSecret}
                    onChange={onChange}
                    name="apiSecret"
                />
            </>
        }


        <label>群組</label>
        <input className={styles.input}
            type="text" value={account.groupName}
            onChange={onChange}
            name="groupName"
        />


        <label>停用</label>
        <input className={styles.checkbox}
            type="checkbox" checked={account.disabled}
            onChange={onChange}
            name="disabled"
        />

        <label className={createClass('col-span-2')}>
            自訂投資額 (可依幣種自訂, 無指定金額的幣種則使用訊號中訂的投資額)
        </label>
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
        <div className={createClass('h-full', 'w-full', 'flex')}>
            <input className={createClass(styles.input)}
                type="number" value={quantity}
                placeholder="金額(USDT), 設定為0可刪除設定"
                onChange={e => setQuantity(Number(e.target.value || 0))}
            />
            <button className={buttonStyle}
                onClick={addQuantity}
            >+</button>
        </div>
        <div className={createClass('col-span-2')}>
            <pre className={codeBlockStyle}>
                {
                    (account.quantities || [])
                        .map(q => `${q.symbol}:${q.quantity}`)
                        .join('\n') || '無自訂投資額'
                }
            </pre>
        </div>


        <button className={styles.button} onClick={save}>儲存</button>
        <pre className={styles.error} >{error || account.error}</pre>

        {id !== newAccountId && <>
            <div className={createClass('col-span-2', 'mt-6')}>
                可用資產(USDT):
                {account.balances?.availableBalance} <br />
                <pre className={codeBlockStyle}>
                    {
                        (account.balances?.positions || [])
                            .map(b => `${b.symbol} 持倉:${b.positionAmt} 槓桿:${b.leverage} 逐倉:${b.isolated ? 'Y' : 'N'}`)
                            .join('\n') || '無倉位紀錄'
                    }
                </pre>
            </div>
            <div>
                <label>槓桿</label>
                <input className={styles.inlineInput}
                    type="number" value={leverage || ''}
                    onChange={e => setLeverage(Number(e.target.value) || null)}
                />
            </div>
            <button className={baseStyles.buttonStyle}
                onClick={_ => action('setLeverage')}>
                調整
            </button>

            <label>切換保證金模式</label>
            <button className={baseStyles.buttonStyle}
                onClick={_ => action('setMarginType')}>
                逐倉
            </button>
            {actionResult.length > 0 &&
                <pre className={createClass('col-span-2', codeBlockStyle)}>
                    {
                        actionResult.map((res, i) =>
                            <div key={i}>
                                <label className={createClass('font-bold')}>
                                    {res.result}:
                                </label>
                                <div >
                                    {res.symbols.join(', ')}
                                </div>
                            </div>
                        )
                    }
                </pre>
            }

            <div>
                <label>委託</label>
                <input className={styles.inlineInput}
                    placeholder="委託其他帳號操作, 請輸入帳號email"
                    type="text" value={delegate}
                    onChange={e => setDelegate(e.target.value)}
                />
            </div>
            <button className={baseStyles.buttonStyle}
                onClick={_ => updateOwnership('delegate')}>
                設定
            </button>
            <div>
                <label>轉移</label>
                <input className={styles.inlineInput}
                    placeholder="轉移所有權至其他帳號, 請輸入帳號email"
                    type="text" value={newOwner}
                    onChange={e => setNewOwner(e.target.value)}
                />
            </div>
            <button className={baseStyles.buttonStyle}
                onClick={_ => updateOwnership('changeOwner')}>
                設定
            </button>

        </>
        }
    </div >;
};


export default AccountEditor;