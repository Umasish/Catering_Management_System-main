import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Our Menu</h2>
      {products.map((p) => (
        <div key={p.id}>{p.name} - ₹{p.price}</div>
      ))}
    </div>
  );
};

export default ProductList;
