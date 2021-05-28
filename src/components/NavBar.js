import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
// import { Link as ScrollLink } from 'react-scroll';
// import * as Scroll from 'react-scroll';
// import Scroll from 'react-scroll';
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
              {/* <Link
                className="nav-link text-light"
                to="bio"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1500}
              >
                Bio
              </Link> */}
            </NavItem>
            <NavItem>
              <Link className="nav-link text-light" to="/technologies">Technologies</Link>
              {/* <Link
                className="nav-link text-light"
                to="technologies"
                activeClass="active"
                // spy={true}
                smooth={true}
                duration={1500}
              >
                Technologies
              </Link> */}
            </NavItem>
            <NavItem>
              <Link className="nav-link text-light" to="/projects">Projects</Link>
              {/* <Link
                className="nav-link text-light"
                to="projects"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1500}
              >
                Projects
              </Link> */}
            </NavItem>
            <NavItem>
              <Link className="nav-link text-light" to="contact-me">Contact Me</Link>
              {/* <Link
                className="nav-link text-light"
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1500}
              >
                Contact
              </Link> */}
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
