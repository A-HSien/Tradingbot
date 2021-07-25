
import axios from "axios";
import { useEffect, useState } from "react";
import baseStyles, { createClass } from "src/styles";


const styles = {
    tableContainer: createClass(
        'overflow-auto'
    ),
    table: baseStyles.table,
    tableCell: createClass(
        baseStyles.tableCell,
        'break-all',
    ),
}

const Signals = () => {

    const [history, setHistory] = useState([] as any[]);
    const [fields, setFields] = useState([] as string[]);

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


    return <div className={baseStyles.pageEdge}>
        訊號紀錄:
        <div className={styles.tableContainer}>
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
                                        {signal[field]}
                                    </td>
                                )
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>;
};


export default Signals;