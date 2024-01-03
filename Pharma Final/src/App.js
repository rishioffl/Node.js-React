import { BrowserRouter,Route,Routes } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Products from './components/Products';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
