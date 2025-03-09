import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = ({ data, tradeCode }) => {
    // Filter data by trade_code
    const filteredData = data.filter((row) => row.trade_code === tradeCode);

    // Prepare chart data
    const chartData = {
        labels: filteredData.map((row) => row.date), // X-axis: Dates
        datasets: [
            {
                label: 'Close Price',
                data: filteredData.map((row) => row.close), // Y-axis: Close prices
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
            {
                label: 'Volume',
                data: filteredData.map((row) => parseFloat(row.volume.replace(/,/g, ''))), // Y-axis: Volume
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: true,
                yAxisID: 'y2', // Use a secondary Y-axis for volume
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `Stock Data for ${tradeCode}`,
            },
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                title: {
                    display: true,
                    text: 'Close Price',
                },
            },
            y2: {
                type: 'linear',
                display: true,
                position: 'right',
                title: {
                    display: true,
                    text: 'Volume',
                },
                grid: {
                    drawOnChartArea: false, // Prevents grid lines for the secondary Y-axis
                },
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default LineChart;