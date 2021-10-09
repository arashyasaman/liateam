import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { useState } from "react";

const Cart = ({ cart }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, current) => acc + Number(current.price) * current.qty,
        0
      )
    );
  }, [total, cart]);

  return (
    <div className="cart_dropdown">
      <ul>
        {cart.length > 0 ? (
          cart.map((prod) => <CartItem prod={prod} />)
        ) : (
          <p className="cart_empty">سبد خرید شما خالی است</p>
        )}
      </ul>
      {cart.length > 0 ? (
        <div>
          <div className="cart_reduce">
            <p>
              جمع سفارش‌ها:
              <span>{total} تومان</span>
            </p>
          </div>
          <div className="gotocheckout">
            <p>ثبت سفارش</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
