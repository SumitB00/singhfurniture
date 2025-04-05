import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Shop } from "./Pages/Shop";
import Contact from './Pages/Contact';
import Asgard from '../Component/Pages/Asgard'
import { Blog } from './Pages/Blog';
import { Cart } from './Pages/Cart';
export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/asgard" element={<Asgard/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}
