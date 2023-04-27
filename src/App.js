import React from 'react';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function NotFound() {
  return <h1>404 Not Found!</h1>;
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header /> 
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
