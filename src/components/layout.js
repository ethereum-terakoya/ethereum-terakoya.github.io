import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../global.scss";

import Navigation from "./navigation";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
