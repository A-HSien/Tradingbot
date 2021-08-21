import axios from "axios";
import { useEffect, useState } from "react";
import { formatDate } from "src/common/utities";
import { table, tableCell, tableContainer } from "src/styles";

type Record = {
    time: string,
    ip: string,
    key: string,
    value: string,
};
export const SystemStatus = () => {

    const [apiQuotaRecords, setApiQuotaRecords] = useState([] as Record[]);
    const [max, setMax] = useState(0);


    useEffect(() => {
        axios.get<Record[]>('/systemStatus/getApiQuotaRecords')
            .then(resp => resp.data)
            .then(data => {
                let m = 0;
                data.forEach(e => {
                    if (
                        e.key === 'x-mbx-used-weight-1m' &&
                        Number(e.value) > m
                    )
                        m = Number(e.value);
                });
                setMax(m);

                setApiQuotaRecords(data.reverse());
            });
    }, []);


    return <>
        API配額使用狀態(max: {max}):
        <div className={tableContainer}>
            <table className={table}>
                <tbody>
                    {apiQuotaRecords.map((record, i) => (
                        <tr key={i}>
                            <td className={tableCell}>
                                {formatDate(record.time)}
                            </td>
                            <td className={tableCell}>
                                {record.ip}
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