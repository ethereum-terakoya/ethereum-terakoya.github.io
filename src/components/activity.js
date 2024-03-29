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

const Activity = () => {
  const intl = useIntl();

  return (
    <div className={"activity-container"}>
      <Row>
        {/* アクティビティ */}
        <Col>
          <p className={"main-submenu-title"}>
            {intl.formatMessage({ id: "activity" })}
          </p>
        </Col>
      </Row>

      <HrComponent />

      {/* ワーク */}
      <Row className="pt-4">
        {/* ワークキンググループ */}
        <Col className="col-sm py-md-3" md={6}>
          <h4 className="text-center mb-4">
            <span role="img" aria-label="friendship">
              <img src="/svg/np_group.svg" alt={"working-group"} />
            </span>
          </h4>
          <div className="activity-item-title mb-4">
            {intl.formatMessage({ id: "wg" })}
          </div>
          <ul>
            <li>{intl.formatMessage({ id: "wgList1" })}</li>
            <li>{intl.formatMessage({ id: "wgList2" })}</li>
            <li>{intl.formatMessage({ id: "wgList3" })}</li>
          </ul>
        </Col>

        {/* ワークショップ */}
        <Col className="col-sm py-md-3" md={6}>
          <h4 className="text-center mb-4">
            <span role="img" aria-label="male researcher">
              <img src="/svg/np_programming.svg" alt={"work-shop"} />
            </span>
          </h4>
          <div className="activity-item-title mb-4">
            {intl.formatMessage({ id: "ws" })}
          </div>
          <ul>
            <li>{intl.formatMessage({ id: "wsList1" })}</li>
            <li>{intl.formatMessage({ id: "wsList2" })}</li>
          </ul>
        </Col>
      </Row>

      <Row className={"pt-4 pb-5 activity-bottom"}>
        {/* ID x Voting */}
        <Col className={"item working-group"}>
          <Container className="main-menu-item">
            <Row>
              <Col className="text-center">
                <div className={"category"}>Working Group</div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <LocalizedLink to="/id-voting/" className={"title"}>
                  ID x Voting
                </LocalizedLink>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <div className={"description"}>
                  {intl.formatMessage({ id: "activityWorkingGroupSubtitle" })}
                </div>
              </Col>
            </Row>
          </Container>
        </Col>

        {/* C.R.E.A.M */}
        <Col className={"item oss-cream"}>
          <Container className="main-menu-item">
            <Row>
              <Col className="text-center">
                <div className={"category"}>OSS</div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <Link to="https://zkcre.am/" className="title">
                  C.R.E.A.M
                </Link>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <div className={"description"}>
                  {intl.formatMessage({ id: "activityCreamSubtitle" })}
                </div>
                <div className={"link-icon"}>
                  <Link
                    to="https://github.com/couger-inc/cream"
                    target={"blank"}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Activity;
