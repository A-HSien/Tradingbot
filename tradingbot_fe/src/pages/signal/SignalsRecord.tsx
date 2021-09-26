
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { formatDate } from "src/common/utities";
import baseStyles, { createClass, scrollable } from "src/styles";


type Signal = {
    action: string,
    userId: string,
    createdAt: string,
    currentPrice: number,
    quantity: number,
    side: string,
    symbol: string,
    token: string,
    tokenExp: number,
    [key: string]: any,
};

const styles = {
    table: baseStyles.table,
    tableCell: createClass(
        baseStyles.tableCell,
        'break-all',
    ),
};

const Signals = () => {

    const [history, setHistory] = useState([] as any[]);
    const fields = useMemo(() => {
        const orderedFields = [
            'createdAt',
            'token',
            'tokenExp',
            'action',
            'symbol',
            'side',
        ];
        const defaultFields = new Set<string>(orderedFields);
        const fieldSet = new Set<string>();
        history.forEach(data => {
            Object.keys(data).forEach(key => {
                if (
                    !defaultFields.has(key) &&
                    !key.startsWith('_') &&
                    key !== 'id' &&
                    key !== 'userId'

                ) fieldSet.add(key)
            });
        });
        return [...orderedFields, ...Array.from(fieldSet)];
    }, [history]);



    useEffect(() => {
        const loadData = async () => {
            const history = await axios.get<Signal[]>('/signal/history')
                .then(r => r.data);
            setHistory(history);

        };
        loadData();
    }, []);

    const getValue = (signal: Signal, field: string) => {
        const val = signal[field];
        if (!val) return '';
        if (field === 'createdAt')
            return formatDate(val);
        if (field === 'tokenExp')
            return formatDate(Number(val) * 1000);

        return val
    };


    return <div className={baseStyles.pageEdge}>

        訊號紀錄:
        <div className={scrollable}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {
                            history.length === 0 &&
                            <th className={styles.tableCell}>
                                無任何紀錄
                            </th>
                        }
                        {
                            history.length > 0 &&
                            fields.map((field, i) =>
                                <th key={i}
                                    className={styles.tableCell}>
                                    {field}
                                </th>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {history.map((signal, i) => (
                        <tr key={i}>
                            {
                                fields.map((field, j) =>
                                    <td key={j}
                                        className={styles.tableCell}>
                                        {getValue(signal, field)}
                                    </td>
                                )
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div >;
};


export default Signals;