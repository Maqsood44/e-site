import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
    return (
      <footer className="bg-dark text-light">
        <Container>
          <Row>
            <Col md={6}>
              <h5>About Us</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
            <Col md={6}>
              <h5>Contact</h5>
              <ul className="list-unstyled">
                <li>Address: 123 Street, City, Country</li>
                <li>Email: info@example.com</li>
                <li>Phone: 123-456-7890</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-center">
                &copy; {new Date().getFullYear()} Your Website. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  };
  export default Footer;
  