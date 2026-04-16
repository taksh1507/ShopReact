import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <section className="products-section">
          <h1>Our Products</h1>
          <ProductGrid />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
