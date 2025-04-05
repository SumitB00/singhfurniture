import React from 'react'
import S1 from "../assets/cart.png"
import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import chair1 from "../assets/chair1.png"; // adjust path accordingly
import { FaTrash } from "react-icons/fa";
export const Cart = () => {
    const cartItems = [
        {
          id: 1,
          name: "Asgaard sofa",
          price: 250000,
          quantity: 1,
          image: chair1,
        },
      ];
    
      const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
 <>
    <img src={S1} class="img-fluid w-100" alt="Banner" />
    <Container className="py-5" >
      <Row>
        {/* Cart Table */}
        <Col lg={8} sm={12}>
          <Table responsive bordered className="align-middle" >
            <thead style={{ backgroundColor: "#fdf4ea" }}>
              <tr>
                <th >Product</th>
                <th>Price</th>
                <th style={{ width: "100px" }}>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="d-flex align-items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "60px", height: "60px", marginRight: "10px" }}
                    />
                    <span>{item.name}</span>
                  </td>
                  <td>Rs. {item.price.toLocaleString()}</td>
                  <td>
                    <Form.Control type="number" value={item.quantity} min={1} />
                  </td>
                  <td>Rs. {(item.price * item.quantity).toLocaleString()}</td>
                  <td className="text-center">
                    <Button variant="link" className="text-warning">
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>

        {/* Cart Totals */}
        <Col lg={4} sm={12}>
          <div
            style={{
              backgroundColor: "#fdf4ea",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h5 className="fw-bold mb-4">Cart Totals</h5>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Subtotal</span>
              <span className="text-muted">Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <span className="fw-bold">Total</span>
              <span className="fw-bold text-warning">Rs. {subtotal.toLocaleString()}</span>
            </div>
            <Button variant="outline-dark" className="w-100" href='/checkout'>
              Check Out
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
 </>
  )
}
