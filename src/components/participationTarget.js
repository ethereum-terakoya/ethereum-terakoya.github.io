import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useIntl } from "react-intl";
import HrComponent from "./hrComponent";

const ParticipationTarget = () => {
  const intl = useIntl();

  return (
    <Container className="participation-target">
      {/* title */}
      <h4 className="text-center mb-4">
        {intl.formatMessage({ id: "target" })}
      </h4>
      <HrComponent />

      {/* body */}
      <Row className="pt-4 pb-5 pt-body justify-content-md-center">
        {/* 技術者 */}
        <Col className="text-center" md={3}>
          <Container>
            <div className="pt-img mb-3">
              <img src="/svg/np_office-working.svg" alt={"engineers"} />
            </div>
            <div className="pt-target mb-3">
              {intl.formatMessage({ id: "target1" })}
            </div>
            <div className="pt-description mb-3">
              {intl.formatMessage({ id: "target1-desc" })}
            </div>
          </Container>
        </Col>

        {/* 事業者 */}
        <Col className="text-center" md={3}>
          <Container>
            <div className="pt-img mb-3">
              <img src="/svg/np_buildings.svg" alt={"business-persons"} />
            </div>
            <div className="pt-target mb-3">
              {intl.formatMessage({ id: "target2" })}
            </div>
            <div className="pt-description mb-3">
              {intl.formatMessage({ id: "target2-desc" })}
            </div>
          </Container>
        </Col>

        {/* 法律家 */}
        <Col className="text-center" md={3}>
          <Container>
            <div className="pt-img mb-3">
              <img src="/svg/np_law.svg" alt={"lawyers"} />
            </div>
            <div className="pt-target mb-3">
              {intl.formatMessage({ id: "target3" })}
            </div>
            <div className="pt-description mb-3">
              {intl.formatMessage({ id: "target3-desc" })}
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default ParticipationTarget
