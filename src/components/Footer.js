import React from "react";
import { Container, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Container>
        <Col sm={12} className="footer-top">
          <Col sm={12} md={6} className="info">
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
          </Col>
          <Col sm={12} md={6} className="footer-logo">
            <img src="./assets/images/footer-logo.png" alt="footer-logo" />
            <p>Good Time Good News</p>
          </Col>
        </Col>
        <Col sm={12} className="footer-bottom">
          <Col sm={12} md={4} className="footer-text">
            <p>هفت روز هفته، 24 ساعت شبانه روز پاسخگوی شما هستیم</p>
          </Col>
          <Col sm={12} md={4} className="social">
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
          </Col>
          <Col sm={12} md={4} className="footer-text">
            <p>
              تمام حقوق این وب سایت متعلق به شرکت آرمان تدبیر اطلس 1397-1398
              می‌باشد
            </p>
          </Col>
        </Col>
      </Container>
    </Container>
  );
};

export default Footer;
