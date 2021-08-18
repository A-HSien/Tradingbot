import axios from "axios";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate, formatJson } from "src/common/utities";
import baseStyles, { codeBlockStyle, createClass } from "src/styles";

type ActionRecord = {
    userId: string,
    accountId: string,
    action: string,
    params: string,
    result?: any,
    success?: boolean,
    createdAt: Date,
};

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



const AccountRecord = () => {

    const { name } = useParams<{ name: string }>();
    const [records, setRecords] = useState([] as ActionRecord[]);

    useEffect(() => {
        axios.get('/account/records', { params: { name } })
            .then(r => {
                return r.data
            })
            .then(setRecords);
    }, [name]);


    return (
        <div className={styles.page}>
            帳戶 - {name}<br />
            系統僅保存七天內之交易紀錄:
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.tableCell}>時間</th>
                            <th className={styles.tableCell}>動作</th>
                            <th className={styles.tableCell}>成功</th>
                            <th className={styles.tableCell}>參數</th>
                            <th className={styles.tableCell}>結果</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, i) => (
                            <tr key={i}>
                                <td className={styles.tableCell}>{formatDate(record.createdAt)}</td>
                                <td className={styles.tableCell}>{record.action}</td>
                                <td className={styles.tableCell}>{record.success ? 'Y' : 'N'}</td>
                                <td className={styles.tableCell}>{record.params}</td>
                                <td className={styles.tableCell}>
                                    <pre className={codeBlockStyle}>{formatJson(record.result)}</pre>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default observer(AccountRecord);