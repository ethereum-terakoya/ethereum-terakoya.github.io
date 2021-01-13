import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useIntl } from "react-intl";
import HrComponent from "./hrComponent";

const AboutETHTerakoya = () => {
  const intl = useIntl();

  return (
    <Row className="about-eth-terakoya mb-5">
      <Col className="">
        <h4 className="text-center mb-4 h3">
          {intl.formatMessage({ id: "what" })}
        </h4>

        <HrComponent />

        <Row>
          <p className="a-description">
            {intl.formatMessage({ id: "whatDetail" })}
          </p>
        </Row>
      </Col>
    </Row>
  );
};

export default AboutETHTerakoya;
