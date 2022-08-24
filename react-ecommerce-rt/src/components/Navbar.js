import {useState} from 'react'
import './Navbar.css';
import CartWidget from "./Cartwidget.js";


const Navbar = () => {
        
    //Genero estado del menu
        const [menu , setMenu] = useState(false)
           
        //Genero funcion para ejecutar estado
            const toggleMenu = () => {
                setMenu( !menu )
            }

    return (
        
            <div className="barraNav">
                <h1 className="barraNav-h1">
                    <a href="#" className="barraNav-a">
                    Rise Technology
                    </a>
                </h1>

                <button onClick={ toggleMenu } className="barraNav-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="barraNav-svg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                </button>  

                <nav className={ `barraNav-nav ${menu ? 'isActive' : ''}`}>
                    <ul className="barraNav-ul">
                        <li className="barraNav-li"><a href="#" className="barraNav-a">Sobre Nosotros</a></li>
                        <li className="barraNav-li"><a href="#" className="barraNav-a">Productos</a></li>
                        <li className="barraNav-li"><a href="#" className="barraNav-a">Contactanos</a></li>
                        <li className="barraNav-li"><a href="#" className="barraNav-a">Carga de productos</a></li>
                        <li className="barraNav-li"><a href="#" className="barraNav-a"><CartWidget /></a></li>
                        
                    </ul>
                </nav>

        </div>

    )
}

export default Navbar;