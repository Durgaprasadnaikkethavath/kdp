import React from "react";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import PlaceOrder from "./Pages/PlaceOrder";
import Order from "./Pages/Order";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShopContextProvider from "./Context/ShopContext";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <HashRouter>
        <ShopContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </ShopContextProvider>
      </HashRouter>
    </>
  );
};

export default App;
