import axios from "axios";
import _ from "lodash";
import { observer } from "mobx-react";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate, formatJson } from "src/common/utities";
import baseStyles, { createClass, scrollable } from "src/styles";


const styles = {
    page: createClass(
        baseStyles.pageEdge,
    ),
    table: baseStyles.table,
    tableCell: baseStyles.tableCell,
};

type Income = {
    asset: string, // "USDT"
    income: string, // "1194.00000000"
    incomeType: string, // "TRANSFER"
    symbol: string, // ""
    time: string, // 1630063613000,
};
type IncomeViewModel = Income & {
    accumulate: number,
};

const calculate = (func: () => number) => Number(func().toPrecision(12));


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
    const [error, setError] = useState<any>();
    const [unrealizedProfit, setUnrealizedProfit] = useState('');
    const [records, setRecords] = useState<IncomeViewModel[]>([]);


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
                        newPerformance[key] = calculate(
                            () => newPerformance[key] + Number(e.income)
                        );
                });
            });
        return newPerformance;
    }, [records]);


    useEffect(() => {
        if (!name) {
            setError('請於網址帶入帳號名稱');
            return;
        }
        axios.get<{
            totalUnrealizedProfit: string,
            incomes: Income[]
        }>('/account/income', { params: { name } })
            .then(r => {
                const { totalUnrealizedProfit, incomes } = r.data;
                setUnrealizedProfit(totalUnrealizedProfit);

                const arr = _.chain(incomes)
                    .filter(e => e.asset === 'USDT')
                    .orderBy(e => e.time, 'desc')
                    .map(e => e as IncomeViewModel)
                    .value();

                arr.reduceRight((prev, curr) => {
                    curr.accumulate =
                        curr.incomeType === 'TRANSFER' ?
                            prev :
                            calculate(() => prev + Number(curr.income));
                    return curr.accumulate;
                }, 0);

                setRecords(arr);
            })
            .catch(setError);

    }, [name]);


    return (
        <div className={styles.page}>
            帳戶 - {name} (單位:USDT)<br />
            {error && <pre>{formatJson(error)}</pre>}
            <div className={createClass('flex')}>
                <div className={createClass('mr-2', 'w-20', 'text-right')}>未實現獲利</div>
                <div>{unrealizedProfit}</div>
            </div>
            {
                performanceKeys.map((key, i) => {
                    return <div key={i} className={createClass('flex')}>
                        <div className={createClass('mr-2', 'w-20', 'text-right')}>{key}日獲利</div>
                        <div>{performance[key]}</div>
                    </div>;
                })
            }
            <div className={scrollable}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.tableCell}>時間</th>
                            <th className={styles.tableCell}>類別</th>
                            <th className={styles.tableCell}>交易對</th>
                            <th className={styles.tableCell}>金額</th>
                            <th className={styles.tableCell}>累積利潤</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, i) => (
                            <tr key={i}>
                                <td className={styles.tableCell}>{formatDate(record.time)}</td>
                                <td className={styles.tableCell}>{record.incomeType}</td>
                                <td className={styles.tableCell}>{record.symbol}</td>
                                <td className={styles.tableCell}>{record.income}</td>
                                <td className={styles.tableCell}>{record.accumulate}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default observer(AccountIncome);