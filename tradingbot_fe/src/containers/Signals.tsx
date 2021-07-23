
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import baseStyles, { createClass } from "src/styles";


const styles = {
    token: createClass(
        'w-full', 'break-all',
        'border', 'rounded-xl',
        'bg-gray-600',
        'p-2', 'mb-3'
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
    const [token, setToken] = useState('');

    const loadData = async () => {
        const history = await axios.get<any[]>('/signal/history')
            .then(r => r.data);
        setHistory(history);
        const fieldSet = new Set<string>();
        history.forEach(data => {
            Object.keys(data).forEach(key => {
                if (!key.startsWith('_'))
                    fieldSet.add(key);
            });
        });
        setFields(Array.from(fieldSet));
    };

    useEffect(() => {

        loadData();

        axios.get<string>('/signal/getToken').then(r => {
            setToken(r.data);
        });

    }, []);


    return <div className={baseStyles.pageEdge}>
        token:
        <div className={styles.token}>
            {token}
        </div>
        <Link to="">訊號設定說明</Link>
        訊號紀錄:
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
    </div>;
};


export default Signals;