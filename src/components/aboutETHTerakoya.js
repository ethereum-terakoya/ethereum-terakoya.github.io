import React from "react";
import { LocalizedLink } from "gatsby-theme-i18n";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
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
          <p className="a-description">{intl.formatMessage({ id: "whatDetail" })}</p>
        </Row>
      </Col>
    </Row>
  )
}

export default AboutETHTerakoya
