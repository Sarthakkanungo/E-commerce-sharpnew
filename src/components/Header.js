import React, { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import CartContext from "./store/cartContext";

function Header(props) {
  const cartCtx = useContext(CartContext); 
  const totalQantity = cartCtx.cart.reduce(( sum , curr)=> sum+curr.quantity, 0);
  console.log(totalQantity , " Header total");
 

 



  return (
    <Navbar bg="dark" data-bs-theme="dark" className= "fixed-top" style={{height: "35px"}}>
      <Col className="col-1 "></Col>
      <Col className="col-10 ">
        <Nav className="me-auto d-flex justify-content-center">
          <Nav.Link href="#home" className="fw-bold">
            Home
          </Nav.Link>
          <Nav.Link href="#features" className="fw-bold">
            Store
          </Nav.Link>
          <Nav.Link href="#pricing" className="fw-bold">
            About
          </Nav.Link>
        </Nav>
      </Col>

      <Col className="col-1 d-flex justify-content-center ">
        <Button variant="dark" className="fs-6 border border-info" onClick={props.onShowCart}>Cart</Button>
        <span className="badge text-info" >{totalQantity}</span>
      </Col>
    </Navbar>
  );
}

export default Header;
