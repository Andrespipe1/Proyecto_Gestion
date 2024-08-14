import React from 'react';
import './visualizarlistas.css';
import { Cabecera } from './cabecera';
import Sidebar from './sidebar';
import { Pie } from './pie';

const Listas = () => {
    return (<>
        <Cabecera/>
        <Sidebar/>
        <div className="content">
            <header>
                
            </header>
            <h1>Lista de gastos realizados</h1>
            <div className="table-container">
                <table className="expense-table">
                    <thead>
                        <tr>
                            <th>Fecha de Gasto</th>
                            <th>Categoría</th>
                            <th>Nombre -gasto</th>
                            <th>Detalle</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Aquí puedes agregar filas de ejemplo o dinámicamente */}
                        <tr>
                            <td>01/08/2024</td>
                            <td>Transporte</td>
                            <td>Gasolina</td>
                            <td>Compra mensual</td>
                            <td>$50.00</td>
                        </tr>
                        <tr>
                            <td>05/08/2024</td>
                            <td>Comida</td>
                            <td>Supermercado</td>
                            <td>Compras semanales</td>
                            <td>$150.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Pie/>
        </>
    );
};

export default Listas;
