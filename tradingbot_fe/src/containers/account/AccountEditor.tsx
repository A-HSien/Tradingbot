import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getLinkPath, linkMap } from "src/common/Manu";
import { accountStore } from "src/stores/AccountStore";
import baseStyles, { createClass } from "src/styles";
import { EditingAccount } from "../../models/Account";

export const newAccountId = 'New';


const styles = {
    root: createClass(
        baseStyles.pageEdge,
        'grid', 'grid-cols-2', 'gap-2'
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
    quota: 0,
    disabled: false,
};

const AccountEditor = () => {

    const { id } = useParams<{ id: string }>();
    const [account, setAccount] = useState({ ...newAccount });
    const [shouldGoBack, setShouldGoBack] = useState(false);
    const [error, setError] = useState('');

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
        accountStore.save(account)
            .then(() => {
                setShouldGoBack(true);
            }).catch(() => {
                setError('儲存失敗, 請檢查您的 api Key 或 api Secret');
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

        <label>單筆投資額</label>
        <input className={styles.input}
            name="quota"
            type="number" value={account.quota}
            onChange={onChange}
        />

        <label>停用</label>
        <input className={styles.checkbox}
            name="disabled"
            type="checkbox" checked={account.disabled}
            onChange={onChange}
        />

        <pre className={styles.error} >{error || account.error}</pre>

        <button className={styles.button} onClick={save}>儲存</button>
    </div>;
};


export default AccountEditor;