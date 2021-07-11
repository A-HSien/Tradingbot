import { buttonStyle, createClass } from "src/styles";


const styles = {
    root: createClass(
        'py-3', 'px-6',
    ),
    table: createClass(
        'table-auto', 'rounded',
        'border-collapse', 'border', 'border-gray-800',
        'min-w-full'
    ),
    tableCell: createClass(
        'py-3', 'px-2', 'border', 'border-gray-600'
    ),
};


const accounts = Array(100).fill({}).map((_, i) => (
    {
        name: 'account-' + i,
        balance: Math.floor(Math.random() * 10000),
        quota: 1000,
        disable: Math.random() > 0.8,
    }
));


const Accounts = () => {

    return (
        <div className={styles.root}>
            Accounts
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.tableCell}>名稱</th>
                        <th className={styles.tableCell}>餘額</th>
                        <th className={styles.tableCell}>單筆投資額</th>
                        <th className={styles.tableCell}>停用</th>
                        <th className={styles.tableCell}></th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map((account, i) => (
                        <tr key={i}>
                            <td className={styles.tableCell}>{account.name}</td>
                            <td className={styles.tableCell}>{account.balance}</td>
                            <td className={styles.tableCell}>{account.quota}</td>
                            <td className={styles.tableCell}>{account.disable ? 'V' : ''}</td>
                            <td className={styles.tableCell}>
                                <a href="/" className={buttonStyle}>詳情</a>
                            </td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Accounts;