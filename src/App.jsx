import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Home from './Home';
import Men from './Men';
import Unisex from './Unisex';
import AboutUs from './AboutUs';
import Layout from './Layout';
import MyCart from './MyCart';
import ShoeCollection from './components/ShoeCollection';
import LogIn from './LogIn';


function App() {
  
  return (
    <CartProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/men' element={<Men />} />
          <Route path='/men/MyCart' element={<MyCart/>} />
          <Route path='/unisex' element={<Unisex />} />
          <Route path='unisex/MyCart' element={<MyCart/>} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/search' element = {<ShoeCollection />} />
          <Route path='/myCart' element={<MyCart />} />
          <Route path='/logIn' element={<LogIn/>} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
