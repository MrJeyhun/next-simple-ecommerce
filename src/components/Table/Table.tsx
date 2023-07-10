import styles from '@/styles/table.module.css';

import { TableProps } from '@/types/products';

const Table = ({ className, data, columns }: TableProps) => {
    let tableClassName = styles.table;

    if (className) {
        tableClassName = `${tableClassName} ${className}`;
    }

    const rows = [...new Array(data.length)].map((item, index) => {
        //@ts-ignore
        return columns.map(({ columnId }) => data[index][columnId]);
    });

    return (
        <table className={tableClassName}>
            <thead>
                <tr>
                    {columns.map(({ columnId, Header }) => {
                        return <td key={columnId}>{Header}</td>;
                    })}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => {
                    return (
                        <tr key={index}>
                            {row.map((cell, index) => {
                                return <td key={index}>{cell}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
