import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-bootstrap'
import ReactStars from 'react-stars'
import Swal from "sweetalert2";
import { CartGlobalContext } from "../Context/Cart/Context";

function Product_Card() {
  const { productId } = useParams()
  const [selectedProduct, setSelectedProduct] = useState([])
  const [count, setCount] = useState(1)
  const { state, dispatch } = useContext(CartGlobalContext)

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((json) => setSelectedProduct(json.data))
  }, [productId])


  const addToCart = () => {
    const item = { ...selectedProduct, count };
    dispatch({
      type: "ADD_TO_CART",
      payload: item
    })
    Swal.fire({
      title: "Success!",
      text: "Added to Cart Successfully",
      icon: "success",
      confirmButtonText: "Close",
    });
  };
  return (
    <div className="container">

      <div className="row mx-auto my-auto">
        <div className="col-md-6">
        <img src={selectedProduct.image} className="card-img-top" alt="..."></img>
        </div>

        <div className="col-md-4">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{selectedProduct.title}</h5>
              <h4 className='card-title'>Description</h4>
              <p className="card-text">{selectedProduct.description}</p>
              <p className="card-text">Category: <span>{selectedProduct.category}</span></p>
              <p className="card-text">Price: <span>${selectedProduct.price}</span></p>
              <p className="card-text">Total Reviews: <span>{selectedProduct.rating?.count}</span></p>
              <p className="card-text">Rating:</p>
              <ReactStars
                count={5}
                size={24}
                edit={false}
                value={selectedProduct.rating?.rate}
                color2={'#ffd700'}
              />
              <div className="d-flex">
                <button className="btn btn-primary mx-2" onClick={() => (setCount(count - 1))} disabled={count > 1 ? false : true}>-</button>
                <p className='text-center border-1 rounded'>{count}</p>
                <button className="btn btn-primary mx-2" onClick={() => (setCount(count + 1))}>+</button>
              </div>
              <button className="btn btn-primary mx-2 mt-3" onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_Card;