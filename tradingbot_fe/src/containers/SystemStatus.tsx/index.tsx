import axios from "axios";
import { useEffect, useState } from "react";
import { formatDate } from "src/common/utities";
import { table, tableCell, tableContainer } from "src/styles";

export const SystemStatus = () => {

    const [apiQuotaRecords, setApiQuotaRecords] = useState([] as {
        key: string,
        time: string,
        value: string,
    }[]);


    useEffect(() => {
        axios.get<any[]>('/signal/getApiQuotaRecords').then(resp => {
            setApiQuotaRecords(resp.data);
        });
    }, []);
    

    return <>
        API配額使用狀態:
        <div className={tableContainer}>
            <table className={table}>
                <tbody>
                    {apiQuotaRecords.map((record, i) => (
                        <tr key={i}>
                            <td className={tableCell}>
                                {formatDate(record.time)}
                            </td>
                            <td className={tableCell}>
                                {record.key}
                            </td>
                            <td className={tableCell}>
                                {record.value}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>;
};