import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

const productsArr = [
  {
    title: "Album 1",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Album 2",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Album 3",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Album 4",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const ProductList = () => {
  return (
    <div>
      <div style={{background:"grey", height:"190px", textAlign:"center" ,fontSize:"200px",color:"white",fontFamily:"cursive", marginTop:"35px"}}>
        <div className="display-1 fw-bold  mt-3">The Generics</div>
      </div>
      <Container style={{ width: "900px" }}>
        <h2 style={{textAlign:"center" , marginTop:"60px", fontFamily:"cursive"}}> Music </h2>
        <Row>
          {productsArr.map((item) => (
            <Col className="col-6 ">
              <div className=" mt-4 d-flex flex-column align-items-center  ">
                <h3>{item.title}</h3>
                <img src={item.imageUrl} alt={item.title} width="250px" />
                <div
                  className="d-flex justify-content-between bg-white mt-4"
                  style={{ width: "300px" }}
                >
                  <h6 className="mr-3 mt-2">
                    {`\u20B9`}
                    {item.price}
                  </h6>
                  <Button variant="info" className="mr-3">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;
