import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Employees from './components/Employees';
import Products from './components/Products';
import Employee from './components/Employee';
import Product from './components/Product';

function App() {
  return (
    <>
      {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div> */}
      <Header />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/employees" Component={Employees}></Route>
        <Route path="/employees/:empId" Component={Employee}></Route>
        <Route path="/products" Component={Products}></Route>
        <Route path="/products/:pId" Component={Product}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
