import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useIntl } from "react-intl";
import Img from "gatsby-image";
import HrComponent from "./hrComponent";

const Sponsor = (props) => {
  const intl = useIntl();

  return (
    <>
      {/* 主催 */}
      <Row className="py-5">
        <Col>
          <h4 className="text-center mb-4">
            {intl.formatMessage({ id: "organize" })}
          </h4>

          <HrComponent />

          <div className="text-center">
            <Img fixed={props.data.couger.childImageSharp.fixed} />
          </div>
        </Col>
      </Row>

      {/* 後援 */}
      <Row className="py-5">
        <Col>
          <h4 className="text-center mb-4">
            {intl.formatMessage({ id: "support" })}
          </h4>

          <HrComponent />

          <div className="text-center">
            <Img fixed={props.data.ef.childImageSharp.fixed} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Sponsor;
