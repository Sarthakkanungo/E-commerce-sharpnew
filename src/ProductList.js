import React, { useContext } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import CartContext from "./components/store/cartContext";

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
const MerchElements = [
  {
    title: "Album 5",

    price: 190,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
  },
  {
    title: "Album 6",

    price: 108,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
  },
];

const ProductList = (props) => {
  const cartCtx = useContext(CartContext);
  // console.log(cartCtx.cart , " inside product list");

  return (
    <div>
      <Container style={{ width: "900px" }}>
        <h2
          style={{
            textAlign: "center",
            marginTop: "60px",
            fontFamily: "cursive",
          }}
        >
          
          Music
        </h2>
        <Row>
          {productsArr.map((item) => (
            <Col key={item.title} className="col-6 ">
              <div
                key={item.title}
                className=" mt-4 d-flex flex-column align-items-center  "
              >
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
                  <Button
                    variant="info"
                    className="mr-3"
                    onClick={cartCtx.addtoCart.bind(null, item)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Container style={{ width: "900px" }}>
        <h2
          style={{
            textAlign: "center",
            marginTop: "60px",
            fontFamily: "cursive",
          }}
        >
          {" "}
          Merch{" "}
        </h2>
        <Row>
          {MerchElements.map((item) => (
            <Col key={item.title} className="col-6 ">
              <div
                key={item.title}
                className=" mt-4 d-flex flex-column align-items-center  "
              >
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
                  <Button
                    variant="info"
                    className="mr-3"
                    onClick={cartCtx.addtoCart.bind(null, item)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="text-center mt-5 ">
        <Button variant="secondary" className="p-2 text-info fw-bolder" onClick={props.onShowCart}>
          See the Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductList;
