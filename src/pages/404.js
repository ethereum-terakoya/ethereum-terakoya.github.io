import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <Link to="/">Return to home</Link>
    </Layout>
  );
};

export default NotFoundPage;
