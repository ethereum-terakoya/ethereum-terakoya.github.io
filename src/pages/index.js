import React from "react";
import { graphql } from "gatsby";
import { useIntl } from "react-intl";

import Layout from "../components/layout";
import Main from "../components/main";
import SEO from "../components/seo";

const Home = ({ data, pageContext }) => {
  const intl = useIntl();
  const home = pageContext.locale === "ja" ? "ホーム" : "Home";

  return (
    <Layout>
      <SEO
        title={home}
        description={intl.formatMessage({ id: "description" })}
      />
      <Main data={data} />
    </Layout>
  );
};

export default Home;

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 300) {
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
