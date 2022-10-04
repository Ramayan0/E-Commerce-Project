import React from "react";
import ProductsCard from "./ProductsCard";
import Search from "./Search";

const productListData = [
  {
    id: 1,
    title: "Hooded Jacket with Drawstring",
    price: "ksh 109.95",
    description: "Your perfect hood for everyday use and walks in the forest. ",
    category: "Men's ",
    image:
      "https://cdn.shopify.com/s/files/1/0604/9513/4942/products/HoodedJacketwithDrawstring1.jpg?v=1648303697",
  },
  {
    id: 2,
    title: "Men's",
    price: "Ksh:22.3",
    description: "Slim-fitting style, contrast raglan long sleeve.",
    category: "Men's",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "great outerwear jackets for Spring/Autumn/Winter.",
    category: "Men's",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
];

function ProductList() {
  const allProduct = productListData.map((productObject) => {
    return <ProductsCard key={productObject.id} product={productObject} />;
  });
  return (
    <div>
      <Search />
      {allProduct}
    </div>
  );
}

export default ProductList;
