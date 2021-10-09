import { Col, Container, Row } from "react-bootstrap";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import axios from "axios";
//import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Product from "./components/Product";

const App = ({ products }) => {
  //const [product, setProduct] = useState([]);
  // useEffect(async () => {
  //   const respone = await axios.get(
  //     "https://jsonplaceholder.typicode.com/posts"
  //   );
  //   const data = respone.data;
  //   setProduct(data);
  // }, []);

  return (
    <>
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Header />
        <Container className="main">
          <Row>
            <Col xs={12} md={12}>
              <h1>محصولات</h1>
            </Col>
            {products.map((product) => (
              <Col xs={12} sm={6} md={3} key={product.id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Container>
        <Footer />
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return { products: state.shop.products };
};

export default connect(mapStateToProps)(App);
