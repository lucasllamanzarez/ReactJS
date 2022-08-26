import './App.css';
import React from 'react';
//Importar Barra de Navegacion
import Navbar from "./components/Navbar";
//Importar Componente
import ItemListContainer from './components/card/ItemListContainer';



const App = () => {
     
        return (
          <div className='App'>
            <nav><Navbar /></nav>
                <div className="ProdSection">
                    <ItemListContainer 
                    name = 'Placa de video ASUS'
                    description = 'Placa de video ASUS de gran potencia que te permitira jugar a una gran cantidad de juegos'
                    image = './images/placavideo.jpg'
                    />
                    <ItemListContainer 
                    name = 'Thermaltake '
                    description = 'Gabinete de gran calidad y terminacion para los gamers mas exigentes'
                    image = './images/gabinete.jpg'
                    />
                    <ItemListContainer 
                    name = 'Fuente Thermaltake'
                    description = 'Fuente de gran potencia y calidad para alimentar todos tus dispositivos'
                    image = './images/fuente.jpg'
                    />
                </div>
            </div>
        );
     
  }

export default App;
