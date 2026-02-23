import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <BrowserRouter>
        {modal && (
          <div
            className="fixed inset-0 z-30"
            onClick={() => {
              setModal(false);
            }}
          />
        )}
        <Modal modal={modal} />
        <Navbar modal={modal} setModal={setModal} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
