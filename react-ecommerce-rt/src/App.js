import './App.css';
import React from 'react';
//Importar Barra de Navegacion
import Navbar from "./components/Navbar";
//Importar Componente
import ItemListContainer from './components/Productos/ItemListContainer';
import ItemDetailContainer from './components/Productos/ItemDetailContainer';


const App = () => {
    
        return (
          <div className='App'>
            <nav><Navbar /></nav>
                <div className="ProdSection">
                    <ItemListContainer />
                    <ItemDetailContainer />
                </div>
            </div>
        );
     
  }

export default App;
