import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import ProductModal from "./components/ProductModal";
import Account from "./pages/Account";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { getCategory, getProducts } from "./services";
import Wishlist from "./pages/Wishlist";
import CheckOut from "./pages/CheckOut";

export const DataContext = createContext();

function App() {
  const [modal, setModal] = useState(false);
  const [productModal, setProductModal] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    getCategory().then((data) => {
      setCategoryData(data);
    });

    getProducts().then((data) => {
      setProductData(data);
    });
  }, []);

  const addWishlist = (id) => {
    const product = productData.find((item) => item.id == id);
    const add = wishlist.some((item) => item.productId == id);
    if (add) {
      return;
    }
    const obj = {
      productId: product.id,
      title: product.title,
      img: product?.pictures[0],
      price: product?.price,
      discountPrice: product.discount_price,
    };
    setWishlist([...wishlist, obj]);
  };

  const addToCart = (id) => {
    const product = productData.find((item) => item.id == id);
    if (!product) return;
    const addCart = cart.some((item) => item.productId == id);
    if (addCart) {
      return;
    }
    const obj = {
      productId: product.id,
      title: product.title,
      img: product?.pictures[0],
      price: product?.price,
      count: 1,
    };
    setCart([...cart, obj]);
  };

  const delCart = (id) => {
    const filter = cart.filter((item) => item.productId != id);
    setCart(filter);
  };

  return (
    <>
      <DataContext.Provider
        value={{
          modal,
          setModal,
          productModal,
          setProductModal,
          categoryData,
          productData,
          addToCart,
          cart,
          setCart,
          delCart,
          addWishlist,
        }}
      >
        <BrowserRouter>
          <ProductModal />
          <Modal />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/account" element={<Account />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<CheckOut/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
}

export default App;
