import React, { useState } from "react";
// import Footer from "./Footer";

function Form({ addProduct }) {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const hanleSubmit = (e) => {
    e.preventDefault();
    // console.log("data");
    const formData = {
      image: image,
      title: title,
      price: price,
      description: description,
      category: category,
    };
    console.log("data", formData);
    addProduct(formData);
  };

  return (
    <div>
      <form onSubmit={hanleSubmit}>
        <lable>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </lable>
        <lable>
          Image:
          <input
            type="img"
            name="img"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </lable>
        <lable>
          Price:
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </lable>
        <lable>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </lable>
        <lable>
          Category:
          <input
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </lable>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Form;
