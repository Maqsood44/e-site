import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function ProductCard({products}) {
  const desWords = products.description.split(" ")
  const limit = desWords.splice(0,10).join(" ")
  return (
    <div className='col-md-4'>
      <Link to={`/products/${products.id}`} className="text-decoration-none">
        
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ width: '100%', height: '200px', objectFit: 'cover' }} src={products.image} />
      <Card.Body>
        <Card.Title>{products.title} </Card.Title>
        <Card.Text>
          {limit}
        </Card.Text>
      </Card.Body>
    </Card>

    </Link>

    </div>
  );
}

export default ProductCard;