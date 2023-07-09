import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CategoryCard({ category }) {
  return (
    <div className='col-md-4'>
      <Link to={`/products/category/${category}`} className='text-decoration-none'>

      <Card>
        <Card.Body>
          <Card.Title>{category.toUpperCase().replace("-", " ")}</Card.Title>
        </Card.Body>
      </Card>
      </Link>
    </div>
  )
}

export default CategoryCard
