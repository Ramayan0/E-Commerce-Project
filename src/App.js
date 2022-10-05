import React from "react";
import ProductList from "./components/ProductList";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="App">
      <Routers>
        <NavBar />
        <Routes>
          {/* <Route exact path="/" element={<Home />}></Route> */}
          <Route exact path="/" element={<ProductList />}></Route>
        </Routes>
      </Routers>
    </div>
  );
};

export default App;
