import { observer } from "mobx-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { accountStore } from "src/stores/AccountStore";
import baseStyles, { createClass } from "src/styles";
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
        'h-full', 'overflow-auto',
        'text-left'
    ),
};



const Accounts = () => {


    useEffect(() => {

        (async () => {
            await accountStore.loadAccounts();
        })();

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
                        <th className={styles.tableCell}>名稱</th>
                        <th className={styles.tableCell}>餘額 (free/locked)</th>
                        <th className={styles.tableCell}>單筆投資額</th>
                        <th className={styles.tableCell}>停用</th>
                        <th className={styles.tableCell}></th>
                    </tr>
                </thead>
                <tbody>
                    {accountStore.accounts.map((account, i) => (
                        <tr key={i}>
                            <td className={styles.tableCell}>{account.name}</td>
                            <td className={styles.tableCell}>
                                <pre className={styles.balancesCell}>
                                    {
                                        (account.balances || [])
                                            .map(b => `${b.asset}: ${b.free} / ${b.locked}`)
                                            .join('\n')
                                    }
                                </pre>
                            </td>
                            <td className={styles.tableCell}>{account.quota}</td>
                            <td className={styles.tableCell}>{account.disabled ? 'Y' : ''}</td>
                            <td className={styles.tableCell}>
                                <Link className={baseStyles.buttonStyle} to={`/Account/${account.id}`}>編輯</Link>
                            </td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default observer(Accounts);