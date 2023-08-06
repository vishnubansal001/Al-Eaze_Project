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
import Doctor from "./pages/Doctors";
import Community from "./pages/Community";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/restaurant" element={<Restorant />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/blogs" element={<Blogs />}></Route>
        <Route exact path="/blogs-single" element={<SingleBlogPage />}></Route>
        <Route exact path="/recipe" element={<Recipe />}></Route>
        <Route exact path="/recipe-poha" element={<SingleRecipe />}></Route>
        <Route exact path="/wheat-allergy" element={<SingleBlogPage />}></Route>
        <Route exact path="/consultants" element={<Doctor />}></Route>
        <Route exact path="/community" element={<Community />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
