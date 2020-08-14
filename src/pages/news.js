import React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Layout from "../components/layout";
import SEO from "../components/seo";

const News = () => {
  return (
    <Layout>
      <SEO title={"NEWS"} />
      <Container>
        <Row>
          <Col>
            <h1>Coming soon...</h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default News;
