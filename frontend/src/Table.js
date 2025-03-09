import React, { useEffect, useState } from 'react';

const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/data')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Trade Code</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Open</th>
                    <th>Close</th>
                    <th>Volume</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.date}</td>
                        <td>{row.trade_code}</td>
                        <td>{row.high}</td>
                        <td>{row.low}</td>
                        <td>{row.open_t}</td>
                        <td>{row.close_t}</td>
                        <td>{row.volume}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;