import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getLinkPath, linkMap } from "src/Manu";
import { accountStore } from "src/stores/AccountStore";
import { layoutStore } from "src/stores/LayoutStore";
import baseStyles, { codeBlockStyle, createClass } from "src/styles";
import { EditingAccount } from "../../models/Account";

export const newAccountId = 'New';
type ActionResult = { result: string, symbols: string[] };

const styles = {
    root: createClass(
        baseStyles.pageEdge,
        'grid', 'grid-cols-2', 'gap-2', 'items-center'
    ),
    input: createClass(
        baseStyles.background, baseStyles.borderGray, 'px-3'
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
    name: '',
    apiKey: '',
    apiSecret: '',
    disabled: false,
};

const AccountEditor = () => {

    const { id } = useParams<{ id: string }>();
    const [account, setAccount] = useState({ ...newAccount });
    const [shouldGoBack, setShouldGoBack] = useState(false);
    const [error, setError] = useState('');
    const [leverage, setLeverage] = useState<number | null>(2);
    const [actionResult, setActionResult] = useState<ActionResult[]>([]);


    useEffect(() => {
        const account = id === newAccountId ?
            newAccount :
            accountStore.accounts.find(acc => acc.id === id);

        if (!account) setShouldGoBack(true);
        else setAccount({ ...account });
    }, [id]);


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
                if (err) {
                    setError(err);
                    layoutStore.switchOverlay(false);
                }
                else setShouldGoBack(true);
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

            .catch(() => {
                layoutStore.switchOverlay(false);
                setActionResult([{ result: 'server error', symbols: ['操作失敗'] }]);
            });
    };


    if (shouldGoBack)
        return <Redirect push to={getLinkPath(linkMap.Accounts)} />;


    return <div className={styles.root}>

        <label>名稱</label>
        <input className={styles.input}
            name="name"
            type="text" value={account.name}
            onChange={onChange}
        />

        {
            id === newAccountId && <>
                <label>API key</label>
                <input className={styles.input}
                    name="apiKey"
                    type="text" value={account.apiKey}
                    onChange={onChange}
                />

                <label>API Secret</label>
                <input className={styles.input}
                    name="apiSecret"
                    type="text" value={account.apiSecret}
                    onChange={onChange}
                />
            </>
        }

        <label>停用</label>
        <input className={styles.checkbox}
            name="disabled"
            type="checkbox" checked={account.disabled}
            onChange={onChange}
        />

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
                <input className={createClass(styles.input, 'ml-2')}
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

            {
                actionResult.map(res =>
                    <div className={createClass('col-span-2')}>
                        <label className={createClass('font-bold')}>
                            {res.result}:
                        </label>
                        {res.symbols.join(', ')}
                    </div>
                )
            }
        </>
        }
    </div >;
};


export default AccountEditor;