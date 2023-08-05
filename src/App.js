import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Restorant from "./pages/Restorant";
import Products from "./pages/Products";
import Navbar from "./components/NavBar";
import Blogs from "./pages/Blogs";
import SingleBlogPage from "./pages/SingleBlogPage";
import Footer from "./components/Footer";
import Recipe from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipes";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/restorant" element={<Restorant />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/blogs" element={<Blogs />}></Route>
        <Route exact path="/blogs-single" element={<SingleBlogPage />}></Route>
        <Route exact path="/recipe" element={<Recipe />}></Route>
        <Route exact path="/recipe-poha" element={<SingleRecipe />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
