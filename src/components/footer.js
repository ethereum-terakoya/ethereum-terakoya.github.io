import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Footer = () => {
  return (
    <React.Fragment>
      <Container fluid className="py-5 bg-dark text-white">
        <Row className="justify-content-md-center">
          <Col>
            <h4 className="text-center mb-5">
              Ethereum
              <br />
              Terakoya
            </h4>
          </Col>
          <Col>
            <h5>Development</h5>
            <a
              href="https://github.com/ethereum-terakoya"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              Github
            </a>
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
    </React.Fragment>
  );
};

export default Footer;
