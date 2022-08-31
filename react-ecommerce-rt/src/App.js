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
                    <ItemListContainer />
                </div>
            </div>
        );
     
  }

export default App;
