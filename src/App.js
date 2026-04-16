import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <h1>Our Products</h1>
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
