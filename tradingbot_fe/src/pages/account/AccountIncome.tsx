import axios from "axios";
import _ from "lodash";
import { observer } from "mobx-react";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "src/common/utities";
import { accountStore } from "src/stores/AccountStore";
import baseStyles, { createClass } from "src/styles";


const styles = {
    page: createClass(
        baseStyles.pageEdge,
    ),
    tableContainer: createClass(
        'overflow-auto'
    ),
    table: baseStyles.table,
    tableCell: baseStyles.tableCell,
};

type Income = {
    asset: string, // "USDT"
    income: string, // "1194.00000000"
    incomeType: string, // "TRANSFER"
    symbol: string, // ""
    time: string, // 1630063613000
};


const defaultPerformance = {
    7: 0,
    14: 0,
    21: 0,
    30: 0,
    60: 0,
};
type PerformanceKey = keyof typeof defaultPerformance;
const performanceKeys: PerformanceKey[] = Object.keys(defaultPerformance) as any;


const AccountIncome = () => {
    const { name } = useParams<{ name: string }>();
    const [records, setRecords] = useState<Income[]>([]);


    const performance = useMemo(() => {
        const oneDay = 24 * 60 * 60 * 1000;
        const now = Date.now();
        const days = performanceKeys.reduce((prev, key) => {
            prev[key] = now - (oneDay * Number(key));
            return prev
        }, {} as typeof defaultPerformance);
        const newPerformance = { ...defaultPerformance };
        records.filter(e => e.incomeType !== 'TRANSFER')
            .forEach(e => {
                performanceKeys.forEach(key => {
                    if (Number(e.time) > days[key])
                        newPerformance[key] += Number(e.income);
                });
            });
        return newPerformance;
    }, [records]);


    useEffect(() => {
        const account = accountStore.accounts.find(acc => acc.name === name);
        if (!account) { window.location.href = '/#/accounts'; return; }

        axios.get<Income[]>('/account/income', { params: { id: account.id } })
            .then(
                r => _.chain(r.data)
                    .filter(e => e.asset === 'USDT')
                    .orderBy(e => e.time, 'desc')
                    .value()
            )
            .then(setRecords);

    }, [name]);


    return (
        <div className={styles.page}>
            帳戶 - {name} (單位:USDT)<br />
            {
                performanceKeys.map((key, i) => {
                    return <div key={i} className={createClass('flex')}>
                        <div className={createClass('mr-2', 'w-20', 'text-right')}>{key}日獲利</div>
                        <div>{performance[key]}</div>
                    </div>;
                })
            }
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.tableCell}>time</th>
                            <th className={styles.tableCell}>type</th>
                            <th className={styles.tableCell}>symbol</th>
                            <th className={styles.tableCell}>income</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, i) => (
                            <tr key={i}>
                                <td className={styles.tableCell}>{formatDate(record.time)}</td>
                                <td className={styles.tableCell}>{record.incomeType}</td>
                                <td className={styles.tableCell}>{record.symbol}</td>
                                <td className={styles.tableCell}>{record.income}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default observer(AccountIncome);