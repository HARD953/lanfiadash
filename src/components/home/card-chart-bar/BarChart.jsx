
import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const BarChart = () => {
    const [basicData] = useState({
        labels: ['Abidjan', 'Man', 'Soubre', 'Bouaké', 'Issia', 'San-pedron', 'Yakro'],
        datasets: [
            {
                label: 'Villes avec nombre de personnes vulnerables élevés',
                backgroundColor: '#42A5F5',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
           
        ]
    });


        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };


   

    return (
        <div>
            <div className="">
                <Chart type="bar" height={250} data={basicData} options={basicOptions} />
            </div>
        </div>
    )
}

export default BarChart
                 