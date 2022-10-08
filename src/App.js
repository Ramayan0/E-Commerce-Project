import React from "react";
import ProductList from "./components/ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addProduct" element={<Form />} />
          <Route exact path="/products" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
