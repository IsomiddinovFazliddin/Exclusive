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
import { getCategory, getProducts, myWishlist } from "./services";
import Wishlist from "./pages/Wishlist";
import CheckOut from "./pages/CheckOut";
import Error from "./pages/Error";
import CategoryPage from "./pages/CategoryPage";

export const DataContext = createContext();

function App() {
  const [modal, setModal] = useState(false);
  const [productModal, setProductModal] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [tokenTitle, setTokenTitle] = useState(
    localStorage.getItem("shopToken")
      ? localStorage.getItem("shopToken")
      : null,
  );
  const [wishlistData, setWishlistData] = useState([]);
  const [modalId, setModalId] = useState(null);

  const [categoryTitle, setCategoryTitle] = useState("");

  useEffect(() => {
    getCategory().then((data) => {
      setCategoryData(data);
    });

    getProducts().then((data) => {
      setProductData(data);
    });

    myWishlist().then((data) => {
      const update = data.map((item) => ({
        ...item,
        is_liked: true,
      }));
      setWishlistData(update);
    });
  }, [tokenTitle]);

  console.log(categoryTitle);

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
          setProductData,
          tokenTitle,
          setTokenTitle,
          wishlistData,
          setWishlistData,
          modalId,
          setModalId,
          categoryTitle,
          setCategoryTitle,
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
            <Route path="/productdetails/:id" element={<ProductDetails />} />
            <Route path="/account" element={<Account />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/categorypage" element={<CategoryPage />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
}

export default App;
