import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { useIntl } from "react-intl";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Post = ({ data }) => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO title={data.mdx.frontmatter.title} />
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            {data.mdx ? (
              <div className="py-5">
                <h2 className="pb-3 blog-title">
                  {data.mdx.frontmatter.title}
                </h2>
                <div className="mb-5">
                  <div>
                    <b>{intl.formatMessage({ id: "date" })} :</b>
                    <span>&nbsp;{data.mdx.frontmatter.date}</span>
                  </div>
                  <div>
                    <b>{intl.formatMessage({ id: "group" })} :</b>
                    <span>&nbsp;{data.mdx.frontmatter.group}</span>
                  </div>
                </div>
                <hr />
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </div>
            ) : (
              <div>This page hasn't been translated yet</div>
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query($locale: String!, $slug: String!) {
    mdx(
      fields: { locale: { eq: $locale } }
      frontmatter: { slug: { eq: $slug } }
    ) {
      frontmatter {
        slug
        title
        date(formatString: "YYYY-MM-DD")
        group
      }
      body
    }
  }
`;
