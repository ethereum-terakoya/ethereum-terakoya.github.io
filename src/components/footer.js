import React from "react";
import { LocalizedLink } from "gatsby-theme-i18n";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Img from "gatsby-image";

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid className="pt-5 pb-2 bg-dark text-white">
        <Row className="justify-content-md-center mb-5">
          <Col>
            <h4 className="text-center footer-title">ETHTerakoya</h4>
          </Col>
          <Col />
          <Col>
            <ul className="list-unstyled">
              <li>
                <LocalizedLink
                  to={"/news"}
                  rel="noreferrer"
                  className="text-white"
                >
                  News
                </LocalizedLink>
              </li>
              <li>
                <a
                  href="https://github.com/ethereum-terakoya"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  Github
                </a>
              </li>
              <li>
                <a href="/" rel="noreferrer" className="text-white">
                  Contributors
                </a>
              </li>
              <li>
                <a href="/" rel="noreferrer" className="text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" rel="noreferrer" className="text-white">
                  Terms
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="small text-center">
              &copy; {new Date().getFullYear()} Ethereum Terakoya
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
