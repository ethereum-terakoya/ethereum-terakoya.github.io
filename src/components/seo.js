import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

const SEO = ({ description, children, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            siteUrl
            title
          }
        }
      }
    `
  );

  return (
    <Helmet title={title} titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.siteMetadata.title} />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {children}
    </Helmet>
  );
};

export default SEO;
