import React from "react";
import { useIntl } from "react-intl";
import { LocalizedLink } from "gatsby-theme-i18n";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import { Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";

const Navigation = ({logo}) => {
  console.log(logo, 'logologologologo')
  const intl = useIntl();

  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="header">
          {/* logo */}
          <Navbar.Brand>
            <LocalizedLink to="/" className="text-white font-weight-bold">
              <span className="header-logo"></span>
            </LocalizedLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>

            {/* working group */}
            <NavDropdown
              title={intl.formatMessage({ id: "wg" })}
              id="collasible-nav-dropdown-wg"
              className="working-group nav-item"
            >
              <LocalizedLink
                to="/id-voting/"
                className="working-group-item dropdown-item"
              >
                {intl.formatMessage({ id: "groupName_id-voting" })}
              </LocalizedLink>
              <LocalizedLink
                to="/ethereum2.0/"
                className="working-group-item dropdown-item"
              >
                {intl.formatMessage({ id: "groupName_ethereum2.0" })}
              </LocalizedLink>
              <LocalizedLink
                to="/students/"
                className="working-group-item dropdown-item"
              >
                {intl.formatMessage({ id: "groupName_students" })}
              </LocalizedLink>
              <LocalizedLink
                to="/scaling/"
                className="working-group-item dropdown-item"
              >
                {intl.formatMessage({ id: "groupName_scaling" })}
              </LocalizedLink>
            </NavDropdown>

            {/* news */}
            <div className={"nav-item news pr-3"}>
              <LocalizedLink to="/news">
                {intl.formatMessage({ id: "news" })}
              </LocalizedLink>
            </div>

            {/* contact lg以上はボタン md以下はテキスト */}
            <div className={"up-lg"}>
              <Button
                variant="none"
                href="https://forms.gle/3ptEzDnWtrzqShMz8"
                className="contact-button nav-item"
              >
                {intl.formatMessage({ id: "contact" })}
              </Button>
            </div>
            <div className={"down-md"}>
              <div className={"nav-item news pr-3"}>
                <a
                  href="https://forms.gle/3ptEzDnWtrzqShMz8"
                  className="nav-item"
                >
                  {intl.formatMessage({ id: "contact" })}
                </a>
              </div>
            </div>

            {/* language lg以上はボタン md以下はテキスト */}
            <div className={"up-lg"}>
              <Dropdown className="ml-2">
                <DropdownToggle variant="none">
                  <img
                    src="/svg/np_language.svg"
                    height="32"
                    width="32"
                    alt="language"
                  />
                </DropdownToggle>
                <DropdownMenu
                  id="collasible-nav-dropdown"
                  className="dropdown-menu"
                >
                  <DropdownItem className="dropdown-item" href="/">
                    日本語
                  </DropdownItem>
                  <DropdownItem className="dropdown-item" href="/en">
                    English
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className={"down-md"}>
              <div className={"nav-item news pr-3"}>
                <a href="/">日本語</a>
                <span style={{ color: "white" }}> / </span>
                <a href="/en">English</a>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Navigation;
