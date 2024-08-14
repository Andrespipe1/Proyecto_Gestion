import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const navigate = useNavigate();

    const handlemontoClick = () => {
        navigate('/pagina_monto');
    };
    const handlegraficoClick = () => {
        navigate('/visualizar');
    };
    const handlelistasClick = () => {
        navigate('/visualizarlistas');
    };

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <>
            <button className={`sidebar-toggle ${!isSidebarVisible ? 'hidden' : ''}`} onClick={toggleSidebar}>
                {isSidebarVisible ? 'Ocultar' : '-'}
            </button>
            <Col md={2} className={`sidebar ${!isSidebarVisible ? 'hidden' : ''}`}>
                <div className="sidebar-content">
                    <h5 className="sidebar-title">Menú</h5>
                    <ul className="list-unstyled">
                        <li><a href="#" onClick={handlemontoClick}>Ingresar Saldo</a></li>
                        <li>Visualización:</li>
                        <ul>
                            <li><a href="#" onClick={handlegraficoClick}>Gráficos</a></li>
                            <li><a href="#listas" onClick={handlelistasClick}>Listas</a></li>
                        </ul>
                        <li>Pagos:</li>
                        <ul>
                            <li><a href="#registrar" onClick={handlemontoClick}>Registrar un pago</a></li>
                        </ul>
                        <li>Recordatorios:</li>
                        <ul>
                            <li><a href="#registrar" onClick={handlemontoClick}>Registrar un pago</a></li>
                        </ul>
                        <div className="mensaje">
                            <h4>Consejo del día</h4>
                            <p>De centavito en centavito se va llegando al dolarito</p>
                        </div>
                    </ul>
                </div>
            </Col>
        </>
    );
};

export default Sidebar;
