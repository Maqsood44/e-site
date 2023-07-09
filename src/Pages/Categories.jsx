import React, { useEffect, useState } from "react";
import CategoryCard from "../Components/CategoryCard";
import axios from "axios";

export default function Categories() {
  const [category, setCategory] = useState([]);
  useEffect(() =>{
    axios.get("https://fakestoreapi.com/products/categories").then((json) =>{setCategory(json.data)})
      .catch((err) => console.log(err))
  },[])
  return (
    <div className="container">
      <div className="text-center my-5">
        <h1 className="mt-4">Products</h1>
        <p className="text-secondary">
          All Products are Distributed into our Special Designed Categories
        </p>
      </div>

      <div className="row">
        {category.map((val, key) => (
          <CategoryCard key={key} category={val} />
        ))}
      </div>
    </div>
  );
}




