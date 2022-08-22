import logo from './logo.svg';
import './App.css';
//Importar Barra de Navegacion
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <nav><Navbar /></nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Alumno: Lucas Llamanzarez <br></br>
          Comision: 38060 <br></br>
          Ecommerce:  Rise Technology <br></br>
          </p>
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
            Learn React
          </a>
      </header>
    </div>
  );
}

export default App;
