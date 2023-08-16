import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Category = () => {
  return (
    <Container style={{ width: "1000px", marginTop: "100px" }}>
      <div className="font-cursive text-center fs-2 fw-bold">
        <h2 style={{ fontFamily: "cursive", fontSize: "40px" }}> MERCH</h2>
      </div>
      <Row>
        <Container className="col-6 mt-4 ml-3">
          <Col >
            <div className="d-flex flex-column align-items-center">
              <h2>T-Shirt</h2>
              <div>
                <img
                  src="https://prasadyash2411.github.io/ecom-website/img/Shirt.png"
                  alt="T-shirt"
                  width="250px"
                />
              </div>
              <div className="d-flex justify-content-between" style={{ width: "300px" }}>
                <h6 className="mt-3"> {`\u20B9`}19.99</h6>
                <Button variant="info">Add to Cart</Button>
              </div>
            </div>
          </Col>
        </Container>
        <Container className="col-6 mt-4 ml-3">
          <Col >
            <div className="d-flex flex-column align-items-center">
              <h2>Coffee</h2>
              <div>
                <img
                  src="https://prasadyash2411.github.io/ecom-website/img/Cofee.png"
                  alt="Coffee"
                  width="250px"
                  height="250px"
                />
              </div>
              <div className="d-flex justify-content-between" style={{ width: "300px" }}>
                <h6 className="mt-3"> {`\u20B9`}6.99</h6>
                <Button variant="success">Add to Cart</Button>
              </div>
            </div>
          </Col>
        </Container>
      </Row>
      <div className="text-center mt-5 ">
          <Button variant="secondary" className="p-2 text-info fw-bolder">See the Cart</Button>
      </div>
    </Container>
  );
};

export default Category;
