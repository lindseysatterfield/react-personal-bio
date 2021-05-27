import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
              <Link className="nav-link text-light" to="/bio">Bio</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link text-light" to="/technologies">Technologies</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link text-light" to="/projects">Projects</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link text-light" to="/contact-me">Contact Me</Link>
            </NavItem>
            {
              admin
                ? <NavItem>
                    <Link className="nav-link text-light" to="/admin">Admin</Link>
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
