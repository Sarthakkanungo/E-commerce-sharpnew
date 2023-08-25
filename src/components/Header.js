import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import CartContext from "./store/cartContext";
import { NavLink } from "react-router-dom"; 

function Header(props) {
  const cartCtx = useContext(CartContext);
  const totalQuantity = cartCtx.cart.reduce((sum, curr) => sum + curr.quantity, 0);

  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="fixed-top d-flex justify-content-between border-bottom border-light border-2"
        style={{ height: "45px" }}
      >
        <div className="mx-auto w-25 text-center d-flex justify-content-evenly">
          <NavLink to={"/"} className="fw-bold w-25 text-decoration-none text-white" activeClassName="active">
            Home
          </NavLink>
          <NavLink to={"/Store"} className="fw-bold w-25 text-decoration-none text-white" activeClassName="active">
            Store
          </NavLink>
          <NavLink to={"/About"} className="fw-bold w-25 text-decoration-none text-white" activeClassName="active">
            About
          </NavLink>
        </div>
        <div className="d-flex justify-content-end" style={{ width: "5%" }}>
          <Button
            variant="dark"
            className="fs-6 border border-info"
            onClick={props.onShowCart}
          >
            Cart
          </Button>
          <span className="badge text-info">{totalQuantity}</span>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
