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

const Navigation = () => {
  const intl = useIntl();

  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="header">
          {/* logo */}
          <Navbar.Brand>
            <LocalizedLink to="/" className="text-white font-weight-bold">
              <span className="header-logo">ETHTerakoya</span>
            </LocalizedLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>

            {/* news */}
            <div className={"nav-item news"}>
              <LocalizedLink to="/news">
                {intl.formatMessage({ id: "news" })}
              </LocalizedLink>
            </div>

            {/* working group */}
            <NavDropdown
              title={intl.formatMessage({ id: "wg" })}
              id="collasible-nav-dropdown-wg"
              className="working-group"
            >
              <NavDropdown.Item class="working-group-item">
                <LocalizedLink to="/id-voting/">
                  ID x Voting x Blockchain
                </LocalizedLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <LocalizedLink to="/ethereum2.0/">Ethereum2.0</LocalizedLink>
              </NavDropdown.Item>
            </NavDropdown>

            {/* contact */}
            <Button
              variant="none"
              href="https://forms.gle/3ptEzDnWtrzqShMz8"
              className="contact-button"
            >
              {intl.formatMessage({ id: "contact" })}
            </Button>

            {/* language */}
            <Dropdown className="ml-2">
              <DropdownToggle variant="none">
                <img src="/svg/np_language.svg" height="32" width="32" />
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Navigation;
