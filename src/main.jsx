import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

import Home from "./views/Home";
//import Services from './components/Services'
import AllProducts from "./views/AllProducts";
import Product from "./views/Product";
//import Contacts from './components/Contacts'
//import AboutUs from './components/AboutUs'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/services" element={<Services></Services>}/> */}
      <Route path="/products" element={<AllProducts></AllProducts>} />
      {/* <Route path="/contacts" element={<Contacts/>}/> */}
      {/* <Route path="/aboutUs" element={<AboutUs/>}/> */}
      <Route path="/produto" element={<Product />} />
    </Routes>
  </BrowserRouter>
);
