import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <Link className="navbar-brand text-light" to="/">Lindsey Satterfield</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavHashLink smooth to="/#about-me"
                className="nav-link text-light"
                activeClassName="selected"
                >
                  Bio
              </NavHashLink>
            </NavItem>
            <NavItem>
              <NavHashLink smooth to="/#technologies"
                className="nav-link text-light"
                activeClassName="selected"
                >
                  Technologies
              </NavHashLink>
            </NavItem>
            <NavItem>
              <NavHashLink smooth to="/#projects"
                className="nav-link text-light"
                activeClassName="selected"
                >
                  Projects
              </NavHashLink>
            </NavItem>
            <NavItem>
              <NavHashLink smooth to="/#certifications"
                className="nav-link text-light"
                activeClassName="selected"
                >
                  Certifications
              </NavHashLink>
            </NavItem>
            <NavItem>
              <NavHashLink smooth to="/#contact"
                className="nav-link text-light"
                activeClassName="selected"
                >
                  Contact Me
              </NavHashLink>
            </NavItem>
            {
              admin
                ? <NavItem>
                    <Link className="nav-link text-light" to="admin">Admin</Link>
                  </NavItem>
                : ''
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any
};

export default NavBar;
