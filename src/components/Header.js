import React from "react";
import { Container, NavLink, Row } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Cart from "./cart/Cart";

const Header = ({ cart }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <Container fluid className="header">
      <Container>
        <Row>
          <div className="menu">
            <div className="menu-wrapper">
              <div className="logo">
                <img alt="logo" src="./assets/images/logo.png" />
              </div>
              <ul className="menu-item">
                <li>
                  <NavLink>خانه</NavLink>
                </li>
                <li>
                  <NavLink>فروشگاه</NavLink>
                </li>
                <li>
                  <NavLink>وبلاگ</NavLink>
                </li>
                <li>
                  <NavLink>درباره ما</NavLink>
                </li>
                <li>
                  <NavLink>تماس با ما</NavLink>
                </li>
              </ul>
            </div>
            <div className="user-wrapper">
              <div className="user_name">آرش یاسمن عزیز</div>
              <div className="user_avatar">
                <div className="around_avatar">
                  <img alt="avatar" src="/assets/images/avatar.jpg" />
                </div>
                <i className="fas fa-angle-down"></i>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div className="menu-bottom">
            <div className="menu-product">
              <ul>
                <li>
                  <NavLink href="#">مراقبت پوست</NavLink>
                </li>
                <li>
                  <NavLink href="#">مراقبت مو</NavLink>
                </li>
                <li>
                  <NavLink href="#">مراقبت بدن</NavLink>
                </li>
                <li>
                  <NavLink href="#">آرایشی</NavLink>
                </li>
                <li>
                  <NavLink href="#">پرفروش‌ترین</NavLink>
                </li>
                <li>
                  <NavLink href="#">جدیدترین</NavLink>
                </li>
              </ul>
            </div>
            <div
              onClick={() => {
                toggleOpen((open) => !open);
              }}
              className="cart"
            >
              <i className="fas fa-shopping-cart"></i>
              <span className="cartNumber">{cart.length}</span>

              {open && <Cart cart={cart} />}
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.shop.cart };
};

export default connect(mapStateToProps)(Header);
