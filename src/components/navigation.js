import React from "react";
import { useIntl } from "react-intl";
import { LocalizedLink } from "gatsby-theme-i18n";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  const intl = useIntl();

  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <LocalizedLink to="/" className="text-white font-weight-bold">
              ETHTerakoya
            </LocalizedLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* working group */}
            <Nav className="mr-auto">
              <NavDropdown
                title={intl.formatMessage({ id: "wg" })}
                id="collasible-nav-dropdown-wg"
              >
                <NavDropdown.Item>
                  <LocalizedLink to="/id-voting/">
                    ID x Voting x Blockchain
                  </LocalizedLink>
                </NavDropdown.Item>
              </NavDropdown>

              {/* news */}
              <div
                className={"nav-item"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "4px",
                }}
              >
                <LocalizedLink
                  to="/news"
                  style={{ color: "rgba(255,255,255,.5)" }}
                >
                  {intl.formatMessage({ id: "news" })}
                </LocalizedLink>
              </div>
            </Nav>

            {/* contact */}
            <Button variant="info" href="https://forms.gle/3ptEzDnWtrzqShMz8">
              {intl.formatMessage({ id: "contact" })}
            </Button>

            {/* language */}
            <Nav>
              <NavDropdown title="Languages" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/">日本語</NavDropdown.Item>
                <NavDropdown.Item href="/en">English</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Navigation;
