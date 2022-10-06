import React from "react";
import ProductList from "./components/ProductList";
import { Route, Switch, Routes } from "react-router-dom";
import Home from "./components/Home";
// import NavBar from "./components/NavBar";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={<Home />} />

        {/* <Route exact path="/" element={<Home />}></Route> */}
        <Route exact path="/" element={<ProductList />} />
      </Routes>
    </div>
  );
};

export default App;
