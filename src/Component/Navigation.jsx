import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Png from "../Component/assets/Singh Furniture Logo (2).png";
import "../Component/Navigation.css";

function Navigation() {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
    // Add your search logic here
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary px-3" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img src={Png} alt="Logo" style={{ width: "50px", marginRight: "10px" }} />
          <h1 className="fs-4 m-0">Singh Furniture</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            <Nav.Link href="/" className="mx-2">Home</Nav.Link>
            <Nav.Link href="/about" className="mx-2">About</Nav.Link>
            <Nav.Link href="/shop" className="mx-2">Shop</Nav.Link>
            <Nav.Link href="/contact" className="mx-2">Contact</Nav.Link>
            <Nav.Link href="/blog" className="mx-2">Blog</Nav.Link>
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
                <Button type="submit" variant="outline-success">Go</Button>
              </Form>
            ) : (
              <Nav.Link href="#" className="me-3" onClick={() => setShowSearch(true)}>
                <FaSearch size={20} />
              </Nav.Link>
            )}
            <Nav.Link href="#">
              <FaShoppingCart size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
