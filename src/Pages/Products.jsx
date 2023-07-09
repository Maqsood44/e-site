import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

function Products() {
  const { categoryname } = useParams()
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${categoryname}`)
      .then((json) => setData(json.data))
  }, [categoryname])
  return (
    <div className='container'>
      <div className="text-center my-5">
        <h1 className="mt-4">{categoryname}</h1>
        <p className="text-secondary">
          All Products are Distributed into our Special Designed Categories
        </p>
      </div>
      <div className="row">
        {data.map((productarr, key)=> (
            <ProductCard key={key} products={productarr}/>
        ))}
      </div>
    </div>
  )
}

export default Products;
