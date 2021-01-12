import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useIntl } from "react-intl";

const HrComponent = () => {
  const intl = useIntl();

  return (
    <Row className="mb-4">
      <Col>
        <hr />
      </Col>
    </Row>
  );
};

export default HrComponent;
