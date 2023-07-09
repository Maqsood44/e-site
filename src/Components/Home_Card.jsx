import React from 'react'
import { Link } from 'react-router-dom'

function Home_Card({ product }) {
    return (
        <div className='col-md-3 my-3'>
            <Link to={`/products/${product.id}`} className='text-decoration-none'>
                <div className="card" style={{ width: "18rem", maxHeight: "40vh", }}>
                    <img src={product.image} className="card-img-top" style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{ fontSize: "15px"}}>{product.title}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Home_Card
