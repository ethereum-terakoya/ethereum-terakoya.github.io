import React from "react";
import { graphql } from "gatsby";
import { LocalizedLink } from "gatsby-theme-i18n";
import { useIntl } from "react-intl";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Category = ({ pageContext, data }) => {
  const intl = useIntl();
  const group = pageContext.group.toUpperCase();

  return (
    <Layout>
      <SEO title={group} />
      <Container className="py-5">
        <Row className="mb-5">
          <Col>
            <h1 className="font-weight-bold">
              {group} {intl.formatMessage({ id: "group" })}
            </h1>
            <p>{intl.formatMessage({ id: "posts" })}</p>
          </Col>
        </Row>
        <ul className="list-unstyled">
          {data.allMdx.edges.map(({ node: post }) => (
            <li key={post.frontmatter.slug} className="post-list-item">
              <Row>
                <Col xs={2}>{post.frontmatter.date}</Col>
                <Col>
                  <LocalizedLink
                    to={`/${pageContext.group}/${post.parent.relativeDirectory}`}
                  >
                    <b className="h3 font-weight-bold text-black">
                      {post.frontmatter.title}
                    </b>
                  </LocalizedLink>
                </Col>
              </Row>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  );
};

export default Category;

export const query = graphql`
  query($locale: String!, $group: String!, $dateFormat: String!) {
    allMdx(
      filter: {
        fields: { locale: { eq: $locale } }
        frontmatter: { group: { eq: $group } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: $dateFormat)
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
  }
`;
