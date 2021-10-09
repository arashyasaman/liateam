import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/shopping/action";

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <div className="image_box">
        <img src={product.image} alt={product.name} />
        {product.new ? <span>جدید</span> : null}
      </div>
      <div className="name_box">
        <h5>{product.title}</h5>
        <p>{product.capacity}</p>
      </div>
      <div className="cart_box">
        <div className="price">
          {product.price}
          <span>تومان</span>
        </div>
        <div className="addtocart" onClick={() => addToCart(product.id)}>
          <i className="fas fa-cart-plus"></i>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
