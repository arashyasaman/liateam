import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Container>
        <div className="footer-top">
          <div className="info">
            <ul>
              <li>مرکز پشتیبانی یاران</li>
              <li>
                <i className="fas fa-phone-volume"></i>
                021 88 88 88 88
              </li>
              <li>
                <i className="far fa-envelope"></i>
                sellersupport@liateam.com
              </li>
            </ul>
          </div>
          <div className="footer-logo">
            <img src="./assets/images/footer-logo.png" alt="footer-logo" />
            <p>Good Time Good News</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-text">
            <p>هفت روز هفته، 24 ساعت شبانه روز پاسخگوی شما هستیم</p>
          </div>
          <div className="social">
            <ul>
              <li>
                <i className="fab fa-instagram"></i>
              </li>
              <li>
                <i className="fab fa-facebook"></i>
              </li>
              <li>
                <i className="fab fa-twitter"></i>
              </li>
              <li>
                <i className="fab fa-youtube"></i>
              </li>
            </ul>
          </div>
          <div className="footer-text">
            <p>
              تمام حقوق این وب سایت متعلق به شرکت آرمان تدبیر اطلس 1397-1398
              می‌باشد
            </p>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Footer;
