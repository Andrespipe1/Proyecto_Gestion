import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import './visualizar.css';
import { Pie } from './pie';
import { Cabecera } from './cabecera';


const Visualizar = () => {
    
    useEffect(() => {
        const ctx = document.getElementById('myChart').getContext('2d');

        if (window.myChart instanceof Chart) {
            window.myChart.destroy();
        }

        window.myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Renta', 'Utilidades', 'Cuidado de los niños', 'Comida', 'Entretenimiento', 'Transporte', 'Otro'],
                datasets: [{
                    label: 'Presupuesto Mensual',
                    data: [30, 20, 15, 15, 10, 5, 5],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(201, 203, 207, 0.7)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(201, 203, 207, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Presupuesto Mensual'
                    }
                }
            },
        });

        // Limpiar el gráfico al desmontar el componente
        return () => {
            if (window.myChart instanceof Chart) {
                window.myChart.destroy();
            }
        };
    }, []);

    return (<>
        <Cabecera/>
        <div className="content">
            <header>
                
            </header>
            <h1>Grafico de gastos realizados</h1>
            <div className="chart-container">
                <canvas id="myChart"></canvas>
            </div>
        </div>
        <Pie/>
        </>
    );
};


export default Visualizar;

