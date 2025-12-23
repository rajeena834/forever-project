import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Content from "./pages/Content";
import Login from "./pages/Login";
 import Product from "./pages/Product";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import { ToastContainer, toast } from 'react-toastify';
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Verify from "./pages/Verify";
const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer/>
      <Navbar/>
      <Searchbar/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/collection" element={<Collection />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/content" element={<Content />} />

        <Route path="/login" element={<Login />} />
         <Route path="/place-order" element={<PlaceOrder />} />

        <Route path="/orders" element={<Orders />} />
        <Route path="/verify" element={<Verify/>} />

        <Route path="/product/:productId" element={<Product />} />

      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
