import React from "react";
import ProductList from "./components/ProductList";
// import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <ProductList />
    </div>
  );
};

export default App;
