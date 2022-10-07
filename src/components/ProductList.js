import React, { useState, useEffect } from "react";
import ProductsCard from "./ProductsCard";
// import Search from "./Search";
import "./ProductList.css";
import NavBar from "./NavBar";
import Header from "./Header";
import Home from "./Home";
import Form from "./Form";
function ProductList() {
  const [product, setProduct] = useState();
  const [productListData, setProductListData] = useState([]);
  const baseUrl = "https://polar-tundra-37099.herokuapp.com/products";

  useEffect(() => {
    // const baseUrl = "https://polar-tundra-37099.herokuapp.com/products";
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setProductListData(data);
      });
  }, []);

  const filterItems = (categItem) => {
    const updatedProducts = productListData.filter((curElem) => {
      return curElem.category === categItem;
    });
    setProductListData(updatedProducts);
  };

  const allProduct = productListData.map((productObject) => {
    return <ProductsCard key={productObject.id} product={productObject} />;
  });

  function handleSearching(search) {
    setProductListData((productListData) =>
      productListData.filter((products) => products.category.includes(search))
    );
  }

  const handleAddData = (data) => {
    // let id = productListData.length + 1;
    // let newProduct = { ...data, id: id };
    // console.log("add ~Something", newProduct);
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-types": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json)
    .then((newProduct)=> setProduct( ...product,newProduct))
  };

  return (
    <div id="all">
      <Header onSearching={handleSearching} />
      <NavBar />
      <Form addProduct={handleAddData} />
      <Home />

      {/* <Search onSearching={handleSearching} /> */}
      <br></br>
      <div id="box">
        <button
          className="btn btn-outline-primary"
          onClick={() => filterItems("PRODUCTS")}
        >
          ALL
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => filterItems("Men's")}
        >
          MEN
        </button>
        <button
          className="btn btn-outline-success"
          onClick={() => filterItems("Women's")}
        >
          WOMEN
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => filterItems("Jewelery")}
        >
          JEWELERY
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={() => filterItems("Electronics")}
        >
          ELETRONIC
        </button>
      </div>
      <br></br>
      <div className="row">{allProduct}</div>
    </div>
  );
}

export default ProductList;
