import { observer } from "mobx-react";
import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { Account } from "src/models/Account";
import { accountStore } from "src/stores/AccountStore";
import baseStyles, { codeBlockStyle, createClass } from "src/styles";
import { newAccountId } from "./AccountEditor";


const styles = {
    actions: createClass(
        'flex', 'justify-end'
    ),
    action: createClass(
        baseStyles.buttonStyle, 'w-28',
    ),
    table: baseStyles.table,
    tableCell: baseStyles.tableCell,
    balancesCell: createClass(
        'overflow-auto',
    ),
};



const Accounts = () => {


    useEffect(() => {
        accountStore.loadAccounts();
    }, []);

    const getAssetInfo = useCallback((account: Account) => {
        if (account.error)
            return <>{account.error}</>
        if (!account.balances)
            return <>無資產</>

        return <div className={styles.balancesCell}>
            可用資產(USDT):
            {account.balances.availableBalance} <br />
            <pre className={codeBlockStyle}>
                {
                    (account.balances?.positions || [])
                        .map(b => `${b.symbol} 持倉:${b.positionAmt} 槓桿:${b.leverage} 逐倉:${b.isolated ? 'Y' : 'N'}`)
                        .join('\n') || '無倉位紀錄'
                }
            </pre>
        </div>;
    }, []);

    return (
        <div className={baseStyles.pageEdge}>
            <div className={styles.actions}>
                <Link className={styles.action} to={`/Account/${newAccountId}`}>新增帳號</Link>
            </div>

            帳戶列表:
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.tableCell}></th>
                        <th className={styles.tableCell}>名稱</th>
                        <th className={styles.tableCell}>資產 (free/locked)</th>
                        <th className={styles.tableCell}>停用</th>
                        <th className={styles.tableCell}></th>
                    </tr>
                </thead>
                <tbody>
                    {accountStore.accounts.map((account, i) => (
                        <tr key={i}>
                            <td className={styles.tableCell}>
                                <Link className={baseStyles.buttonStyle} to={`/Account/${account.id}`}>編輯</Link>
                            </td>
                            <td className={styles.tableCell}>{account.name}</td>
                            <td className={styles.tableCell}>{getAssetInfo(account)}</td>
                            <td className={styles.tableCell}>{account.disabled ? 'Y' : ''}</td>
                            <td className={styles.tableCell}>
                                <Link className={baseStyles.buttonStyle} to={`/AccountRecord/${account.name}`}>操作記錄</Link>
                            </td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default observer(Accounts);