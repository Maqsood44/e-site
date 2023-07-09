import React, { useEffect, useState } from 'react'
import HeroImage from '../Components/HeroSection'
import Product_Card from '../Components/Product_Card'
import { Container, Row, Col } from 'react-bootstrap';
import '../Pages CSS/Home.css'
import Footer from '../Components/Footer';
import axios from 'axios';
import Home_Card from '../Components/Home_Card';
function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(((json) => setProducts(json.data)))
  }, [])


  return (
    <>
      <HeroImage heading="Discover the Perfect Companion for Every Heart and Home" slogan="Unleash Love, Joy, and Furry Happiness with Pak Pets" />
      {/* New Arrival */}
      <section className="my-5 mx-auto heading">
        <div>
          <h2 className='text-center'>New Arrival</h2>
          <p className='my-3 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium distinctio consectetur delectus quia fuga id.</p>
        </div>
        <div className="row">
        {
            products.slice(11,15).map((val, key) => (
              <Home_Card key={key} product={val} />
            ))
          }
        </div>
      </section>

      {/* New Arrival */}
      <section className="my-5 mx-auto heading">
        <div>
          <h2 className='text-center'>Featured Products</h2>
          <p className='my-3 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium distinctio consectetur delectus quia fuga id.</p>
        </div>
        <div className="row ">
          {
            products.slice(3,7).map((val, key) => (
              <Home_Card key={key} product={val} />
            ))
          }
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home
