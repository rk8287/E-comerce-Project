import React, { Suspense, lazy } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Suspense fallback={<div className="text-center text-xl">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<ProductList/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/productDetails/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
