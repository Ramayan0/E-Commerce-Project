import React from "react";
import Product from "./components/Product";
// import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <div>
      <NavBar />
      <Product />
    </div>
  );
};

export default App;
