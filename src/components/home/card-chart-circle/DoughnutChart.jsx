
import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const DoughnutChart = () => {
    const [chartData] = useState({
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    });

    return (
        <div className="flex justify-content-center">
            <Chart type="doughnut" data={chartData}  style={{ position: 'relative', width: '70%',margin:"auto" }} />
        </div>
    )
}
                 

export default DoughnutChart