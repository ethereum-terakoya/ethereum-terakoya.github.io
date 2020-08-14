import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TOC from "../components/toc";

const Post = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.mdx.frontmatter.title} discription={data.mdx.excerpt} />
      <Container>
        <Row>
          <Col>
            <h1 className="pb-3 pt-5 font-weight-bold">
              {data.mdx.frontmatter.title}
            </h1>
            <div>{data.mdx.frontmatter.date}</div>
          </Col>
        </Row>
        <Row>
          <Col sm={4} className="d-none d-sm-block">
            <TOC tableOfContents={data.mdx.tableOfContents.items} />
          </Col>
          <Col sm={{ order: "first" }} className="post">
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query($locale: String!, $slug: String!, $dateFormat: String!) {
    mdx(
      fields: { locale: { eq: $locale } }
      frontmatter: { slug: { eq: $slug } }
    ) {
      excerpt
      tableOfContents
      frontmatter {
        slug
        title
        date(formatString: $dateFormat)
        group
      }
      body
    }
  }
`;
