import React from "react";
import { LocalizedLink } from "gatsby-theme-i18n";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Link} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {useIntl} from "react-intl";

const Activity = () => {
  const intl = useIntl();

  return (
    <div className={'activity-container'}>
      <Row>
        {/* title */}
        <Col>
          <p className={'main-submenu-title'}>
            {intl.formatMessage({id: "activity"})}
          </p>
        </Col>
      </Row>
      <Row className={'pt-5'}>
        {/* ID x Voting x Blockchain */}
        <Col className={'item'}>
          <Container className="main-menu-item">
            <Row>
              <Col className="text-center">
                <div className={"category"}>Working Group</div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <LocalizedLink to="/id-voting/" className={"title"}>
                  ID x Voting x Blockchain
                </LocalizedLink>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <div className={"description"}>{intl.formatMessage({id: "activityWorkingGroupSubtitle"})}</div>
              </Col>
            </Row>
          </Container>
        </Col>

        {/* C.R.E.A.M */}
        <Col className={'item'}>
          <Container className="main-menu-item">
            <Row>
              <Col className="text-center">
                <div className={"category"}>OSS</div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center" >
                <Link to="https://github.com/couger-inc/cream" className="title">
                  C.R.E.A.M
                </Link>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <div className={"description"}>Confidential Reliable Ethereum Anonymous Mixer</div>
                <div className={"link-icon"}>
                  <Link to="https://github.com/couger-inc/cream" target={"blank"}>
                    <FontAwesomeIcon icon={faGithub}/>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default Activity
