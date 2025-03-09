



import React, { useState, useEffect } from 'react';
import Table from './Table';
import LineChart from './LineChart';

function App() {
    const [data, setData] = useState([]);
    const [tradeCode, setTradeCode] = useState('1JANATAMF'); // Default trade code

    // Fetch data from the backend
    useEffect(() => {
        fetch('http://localhost:5000/api/data')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    // Get unique trade codes for the dropdown
    const tradeCodes = [...new Set(data.map((row) => row.trade_code))];

    return (
        <div className="App">
            <h1>Stock Data</h1>
    
            {/* Table */}
            <div>
                <h2>Table</h2>
                <Table data={data} />
            </div>
    
            {/* Dropdown for Trade Code */}
            <div style={{ marginTop: '20px' }}> {/* Add margin here */}
                <label htmlFor="tradeCode">Select Trade Code for Chart: </label>
                <select
                    id="tradeCode"
                    value={tradeCode}
                    onChange={(e) => setTradeCode(e.target.value)}
                >
                    {tradeCodes.map((code) => (
                        <option key={code} value={code}>
                            {code}
                        </option>
                    ))}
                </select>
            </div>
    
            {/* Line Chart */}
            <div style={{ marginTop: '20px' }}> {/* Add margin here */}
                <h2>Line Chart</h2>
                <LineChart data={data} tradeCode={tradeCode} />
            </div>
        </div>
    );
}




export default App;
