import React from "react";
import ProductList from "./components/ProductList";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* <Route exact path="/" element={<Home />}></Route> */}
        <Route exact path="/" element={<ProductList />} />
      </Routes>
    </div>
  );
};

export default App;
