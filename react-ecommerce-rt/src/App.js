import './App.css';
//Importar Barra de Navegacion
import Navbar from "./components/Navbar";
//Importo Componente
import Cardcom from './components/card/Cardcom';
import React from 'react';


class App extends React.Component {
    render () {
        return (
          <div className='App'>
            <nav><Navbar /></nav>
                <div className="ProdSection">
                    <Cardcom 
                    name = 'Placa de video ASUS'
                    description = 'Placa de video ASUS de gran potencia que te permitira jugar a una gran cantidad de juegos'
                    image = './images/placavideo.jpg'
                    />
                    <Cardcom 
                    name = 'Thermaltake '
                    description = 'Gabinete de gran calidad y terminacion para los gamers mas exigentes'
                    image = './images/gabinete.jpg'
                    />
                    <Cardcom 
                    name = 'Fuente Thermaltake'
                    description = 'Fuente de gran potencia y calidad para alimentar todos tus dispositivos'
                    image = './images/fuente.jpg'
                    />
                </div>
            </div>
        );
     }
  }

export default App;
