import React, { useState, useEffect } from "react";
import ProductsCard from "./ProductsCard";
import Search from "./Search";

function ProductList() {
  const [productListData, setProductListData] = useState([]);
  // const baseUrl = "https://polar-tundra-37099.herokuapp.com/products";

  useEffect(() => {
    const baseUrl = "https://polar-tundra-37099.herokuapp.com/products";
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProductListData(data);
      });
  }, []);

  const allProduct = productListData.map((productObject) => {
    return <ProductsCard key={productObject.id} product={productObject} />;
  });
  return (
    <div>
      <Search />
      <div className="row">{allProduct}</div>
    </div>
  );
}

export default ProductList;
