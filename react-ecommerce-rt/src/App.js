import './App.css';
import React from 'react';
//Importar Barra de Navegacion
import Navbar from "./components/Navbar";
//Importar Componente
import ItemList from './components/Productos/ItemListContainer';


const App = () => {
    
        return (
          <div className='App'>
            <nav><Navbar /></nav>
                <div className="ProdSection">
                    <ItemList />
                </div>
            </div>
        );
     
  }

export default App;
