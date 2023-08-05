import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Restorant from "./pages/Restorant";
import Products from "./pages/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/restorant" element={<Restorant />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
