import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();

    const handleGraficoClick = () => {
        navigate('/visualizar');
    };

    const toggleSidebar = () => {
        setIsVisible(prev => !prev);
    };

    return (
        <>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isVisible ? 'Hide Menu' : '-'}
            </button>
            <Col md={2} className={`sidebar ${isVisible ? 'visible' : 'hidden'}`}>
                <div className="sidebar-content">
                    <h5 className="sidebar-title">Menú</h5>
                    <ul className="list-unstyled">
                        <li><a href="#ingresar-saldo">Ingresar Saldo</a></li>
                        <li>Visualización:</li>
                        <ul>
                            <li><a href="#" onClick={handleGraficoClick}>Gráficos</a></li>
                            <li><a href="#listas">Listas</a></li>
                        </ul>
                        <li>Pagos:</li>
                        <ul>
                            <li><a href="#registrar">Registrar un pago</a></li>
                        </ul>
                    </ul>
                    <div className='mensaje'>
                        <h4>Consejo del día</h4>
                        <p>De centavito en centavito se va llegando al dolarito</p>  
                    </div>
                </div>
            </Col>
        </>
    );
};

export default Sidebar;
