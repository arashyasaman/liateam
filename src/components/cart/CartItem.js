import React from "react";
import { removeFromCart } from "../../redux/shopping/action";
import { connect } from "react-redux";

const CartItem = ({ removeFromCart, prod }) => {
  return (
    <li key={prod.id} className="cart_item">
      <div className="cart_item_image">
        <img src={prod.image} alt={prod.title} style={{ width: "100%" }} />
      </div>
      <div className="cart_item_name">
        <p>{prod.title}</p>
        <p>{prod.price} تومان</p>
      </div>
      <div className="cart_item_remove" onClick={() => removeFromCart(prod.id)}>
        <i className="fas fa-times"></i>
      </div>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
