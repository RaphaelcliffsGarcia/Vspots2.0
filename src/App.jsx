import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Spots from "./Components/Spots/Spots";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Spots/*" element={<Spots />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
