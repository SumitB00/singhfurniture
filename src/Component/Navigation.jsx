import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Offcanvas,
  ListGroup,
} from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
import Png from "../Component/assets/Singh Furniture Logo (2).png";
import "../Component/Navigation.css";
import P1 from "../Component/assets/chair1.png"
import P2 from '../Component/assets/chair3.png' 

function Navigation() {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [showCart, setShowCart] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  const cartItems = [
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      image: P2,
    },
    {
      id: 2,
      name: "Casaliving Wood",
      price: 270000,
      image: P1,
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary px-3" sticky="top">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src={Png}
              alt="Logo"
              style={{ width: "50px", marginRight: "10px" }}
            />
            <h1 className="fs-4 m-0">Singh Furniture</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              <Nav.Link href="/" className="mx-2">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="mx-2">
                About
              </Nav.Link>
              <Nav.Link href="/shop" className="mx-2">
                Shop
              </Nav.Link>
              <Nav.Link href="/contact" className="mx-2">
                Contact
              </Nav.Link>
              <Nav.Link href="/blog" className="mx-2">
                Blog
              </Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              {showSearch ? (
                <Form className="d-flex" onSubmit={handleSearch}>
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <Button type="submit" variant="outline-dark">
                    Go
                  </Button>
                </Form>
              ) : (
                <Nav.Link href="#" className="me-3" onClick={() => setShowSearch(true)}>
                  <FaSearch size={18} />
                </Nav.Link>
              )}
              <Nav.Link href="#" className="me-3">
                <FaHeart size={20} />
              </Nav.Link>
              <Nav.Link href="#" onClick={() => setShowCart(true)}>
                <FaShoppingCart size={20} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Cart Sidebar Offcanvas */}
      <Offcanvas show={showCart} onHide={() => setShowCart(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.map((item) => (
            <ListGroup key={item.id} className="mb-3">
              <ListGroup.Item className="d-flex align-items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="me-3"
                  width="60"
                  height="60"
                />
                <div>
                  <div>{item.name}</div>
                  <div className="text-muted">Rs. {item.price.toLocaleString()}</div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          ))}

          <hr />
          <h5 className="text-end">Subtotal: Rs. {subtotal.toLocaleString()}</h5>
          <div className="d-grid gap-2 mt-3">
            <Button variant="dark" href="/checkout">Checkout</Button>
            <Button variant="outline-secondary" href="/cart">Go to Cart</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navigation;
