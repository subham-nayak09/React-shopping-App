import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/cart' exact element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
