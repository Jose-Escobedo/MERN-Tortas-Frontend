import React from "react";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          exact
          path="/register"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route exact path="/products/:cat" element={<ProductList />} />
        <Route exact path="/products" element={<ProductList />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
