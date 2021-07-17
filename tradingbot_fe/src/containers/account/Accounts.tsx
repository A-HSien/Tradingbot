import { observer } from "mobx-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { accountStore } from "src/stores/AccountStore";
import baseStyles, { createClass } from "src/styles";
import { newAccountId } from "./AccountEditor";


const styles = {
    root: createClass(
        baseStyles.pageEdge
    ),
    actions: createClass(
        'flex', 'justify-end'
    ),
    action: createClass(
        baseStyles.buttonStyle, 'w-28',
    ),
    table: createClass(
        'table-auto', 'rounded',
        'border-collapse', 'border', 'border-gray-800',
        'min-w-full'
    ),
    tableCell: createClass(
        'py-3', 'px-2',
        'border', 'border-gray-600',
        'h-10',
        'text-center'
    ),
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
        <div className={styles.root}>
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