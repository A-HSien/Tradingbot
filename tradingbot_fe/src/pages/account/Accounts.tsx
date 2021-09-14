import _ from "lodash";
import { orderBy } from "lodash";
import { observer } from "mobx-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Account } from "src/models/Account";
import { accountStore } from "src/stores/AccountStore";
import { authStore } from "src/stores/AuthStore";
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

    const { accounts, groupNames } = accountStore;

    useEffect(() => {
        if (authStore.authStatus)
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

    const [filteredGroups, setFilteredGroups] = useState(new Set<string>());
    const filterGroup = (name: string) => {
        const newFilter = new Set(filteredGroups);
        newFilter.has(name) ? newFilter.delete(name) : newFilter.add(name);
        setFilteredGroups(newFilter);
    };

    const groups = useMemo(() => {
        return groupNames.map(g => {
            return {
                name: g,
                selected: !filteredGroups.has(g),
            };
        });
    }, [groupNames, filteredGroups]);


    const accountGroups = useMemo(() => {
        const filtered = accounts.filter(acc => !filteredGroups.has(acc.groupName));
        const sorted = orderBy(filtered, ['groupName'], ['asc']);
        const groups = _.groupBy(sorted, acc => acc.ownerId === authStore.userId);
        return {
            my: groups[true.toString()],
            delegated: groups[false.toString()],
        };
    }, [accounts, filteredGroups]);



    return (
        <div className={baseStyles.pageEdge}>
            <div className={styles.actions}>
                <Link className={styles.action} to={`/Account/${newAccountId}`}>新增帳號</Link>
            </div>

            <div className={createClass('my-3', 'inline-flex', 'w-full')}>
                {groups.map((group, i) =>
                    <div key={i} >
                        <input id={`id-${group.name}`}
                            name={group.name}
                            type="checkbox" checked={group.selected}
                            onChange={e => filterGroup(e.target.name)}
                        />
                        <label htmlFor={`id-${group.name}`}
                            className={createClass('px-1')}>
                            {group.name}
                        </label>
                    </div>
                )}
            </div>
            <div>
                我的帳戶:
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.tableCell}></th>
                            <th className={styles.tableCell}>名稱</th>
                            <th className={styles.tableCell}>群組</th>
                            <th className={styles.tableCell}>資產 (free/locked)</th>
                            <th className={styles.tableCell}>停用</th>
                            <th className={styles.tableCell}>委託</th>
                            <th className={styles.tableCell}></th>
                            <th className={styles.tableCell}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {accountGroups?.my?.map((account, i) => (
                            <tr key={i}>
                                <td className={styles.tableCell}>
                                    <Link className={baseStyles.buttonStyle} to={`/Account/${account.id}`}>設定</Link>
                                </td>
                                <td className={styles.tableCell}>{account.name}</td>
                                <td className={styles.tableCell}>{account.groupName}</td>
                                <td className={styles.tableCell}>{getAssetInfo(account)}</td>
                                <td className={styles.tableCell}>{account.disabled ? 'Y' : ''}</td>
                                <td className={styles.tableCell}>{account.delegateUserEmail}</td>
                                <td className={styles.tableCell}>
                                    <Link className={baseStyles.buttonStyle} to={`/AccountRecord/${account.name}`}>操作記錄</Link>
                                </td>
                                <td className={styles.tableCell}>
                                    <Link className={baseStyles.buttonStyle} to={`/AccountIncome/${account.name}`}>績效記錄</Link>
                                </td>


                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={createClass('mt-6')}>
                委託帳戶:
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.tableCell}></th>
                            <th className={styles.tableCell}>名稱</th>
                            <th className={styles.tableCell}>群組</th>
                            <th className={styles.tableCell}>資產 (free/locked)</th>
                            <th className={styles.tableCell}>停用</th>
                            <th className={styles.tableCell}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {accountGroups?.delegated?.map((account, i) => (
                            <tr key={i}>
                                <td className={styles.tableCell}>
                                    <Link className={baseStyles.buttonStyle} to={`/Account/${account.id}`}>設定</Link>
                                </td>
                                <td className={styles.tableCell}>{account.name}</td>
                                <td className={styles.tableCell}>{account.groupName}</td>
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
        </div>
    );
};

export default observer(Accounts);