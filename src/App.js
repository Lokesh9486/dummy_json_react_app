import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from './screens/Home';
import LayOut from "./screens/LayOut";
import Products from "./screens/Products";
import "./Styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetail from "./screens/ProductDetail";
import "font-awesome/css/font-awesome.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = lazy(() => import("./screens/Home"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:category" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
