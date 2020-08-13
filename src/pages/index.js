import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Main from "../components/main";
import SEO from "../components/seo";

const Home = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Main data={data} />
    </Layout>
  );
};

export default Home;

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    couger: file(relativePath: { eq: "couger.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ef: file(relativePath: { eq: "ethereum-foundation.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
