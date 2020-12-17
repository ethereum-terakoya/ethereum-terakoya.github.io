import React from "react";
import { useIntl } from "react-intl";
import Img from "gatsby-image";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Activity from "../components/activity"

const Hero = ({ logo }) => {
  return (
    <Jumbotron>
      <Container>
        <Img fixed={logo.childImageSharp.fixed} />
        <h1 className="display-6 text-white">ETHTerakoya</h1>
      </Container>
    </Jumbotron>
  );
};

const ContactUs = ({ title }) => {
  return (
    <Row className="py-2 mb-5">
      <Col>
        <div className="text-center">
          <a
            href="https://forms.gle/3ptEzDnWtrzqShMz8"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="info">{title}</Button>
          </a>
        </div>
      </Col>
    </Row>
  );
};

const Main = ({ data }) => {
  const intl = useIntl();
  return (
    <React.Fragment>
      <Hero logo={data.logo} />
      <Container>
        <Row>
          <Col className="py-5">
            <h3 className="text-center mb-5">
              <span role="img" aria-label="hand">
                👉
              </span>
              {intl.formatMessage({ id: "slogan" })}
            </h3>
          </Col>
        </Row>
        <Row>
          <Col className="">
            <h4 className="text-center mb-5 h3">
              {intl.formatMessage({ id: "what" })}
            </h4>
            <p>{intl.formatMessage({ id: "whatDetail" })}</p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <hr />
          </Col>
        </Row>

        {/* activity */}
        <Activity />

        <Row>
          <Col className="col-sm py-md-5 pb-5">
            <h4 className="text-center mb-5">
              <span role="img" aria-label="friendship">
                👬
              </span>
              <span role="img" aria-label="friendship different order">
                👫
              </span>
              {intl.formatMessage({ id: "wg" })}
            </h4>
            <ul>
              <li>{intl.formatMessage({ id: "wgList1" })}</li>
              <li>{intl.formatMessage({ id: "wgList2" })}</li>
              <li>{intl.formatMessage({ id: "wgList3" })}</li>
            </ul>
          </Col>
          <Col className="col-sm py-md-5 pb-5">
            <h4 className="text-center mb-5">
              <span role="img" aria-label="male researcher">
                👨‍🔬
              </span>
              <span role="img" aria-label="female researcher">
                👩‍⚕
              </span>
              {intl.formatMessage({ id: "ws" })}
            </h4>
            <ul>
              <li>{intl.formatMessage({ id: "wsList1" })}</li>
              <li>{intl.formatMessage({ id: "wsList2" })}</li>
            </ul>
          </Col>
        </Row>
        <ContactUs title={intl.formatMessage({ id: "contact" })} />
      </Container>

      <Container fluid className="bg-beige">
        <Row className="justify-content-md-center py-5 bg-beige">
          <Col className="col-12 col-sm-6">
            <h4 className="text-center mb-5">
              {intl.formatMessage({ id: "target" })}
            </h4>
            <ul>
              <li>{intl.formatMessage({ id: "target1" })}</li>
              <li>{intl.formatMessage({ id: "target2" })}</li>
              <li>{intl.formatMessage({ id: "target3" })}</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="py-5">
          <Col>
            <h4 className="text-center mb-5">
              {intl.formatMessage({ id: "organize" })}
            </h4>
            <div className="text-center">
              <Img fixed={data.couger.childImageSharp.fixed} />
            </div>
          </Col>
        </Row>
        <Row className="py-5">
          <Col>
            <h4 className="text-center mb-5">
              {intl.formatMessage({ id: "support" })}
            </h4>
            <div className="text-center">
              <Img fixed={data.ef.childImageSharp.fixed} />
            </div>
          </Col>
        </Row>
        <ContactUs title={intl.formatMessage({ id: "contact" })} />
      </Container>
    </React.Fragment>
  );
};

export default Main;
