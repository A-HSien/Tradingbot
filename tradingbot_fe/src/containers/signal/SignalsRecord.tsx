
import axios from "axios";
import { useEffect, useState } from "react";
import { formatDate } from "src/common/utities";
import baseStyles, { createClass, tableContainer } from "src/styles";


const styles = {
    table: baseStyles.table,
    tableCell: createClass(
        baseStyles.tableCell,
        'break-all',
    ),
}

const Signals = () => {

    const [history, setHistory] = useState([] as any[]);
    const [fields, setFields] = useState(['createdAt'] as string[]);


    const loadData = async () => {
        const history = await axios.get<any[]>('/signal/history')
            .then(r => r.data);
        setHistory(history);
        const fieldSet = new Set<string>();
        history.forEach(data => {
            Object.keys(data).forEach(key => {
                if (
                    !key.startsWith('_') &&
                    key !== 'id'

                ) fieldSet.add(key)
            });
        });
        setFields(Array.from(fieldSet));
    };

    useEffect(() => {
        loadData().then();
    }, []);

    const getValue = (signal: any, field: string) => {
        const val = signal[field];
        return field === 'createdAt' ? formatDate(val) : val;
    };


    return <div className={baseStyles.pageEdge}>

        訊號紀錄:
        <div className={tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {
                            fields.length === 0 &&
                            <th className={styles.tableCell}>
                                無任何紀錄
                            </th>
                        }
                        {
                            fields.length > 0 &&
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