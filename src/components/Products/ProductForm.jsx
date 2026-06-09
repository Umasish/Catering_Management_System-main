import React, { useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "products"), { name, price: Number(price) });
    setName(""); setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
      <button type="submit">Add</button>
    </form>
  );
};

export default ProductForm;
