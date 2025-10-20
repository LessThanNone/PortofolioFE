'use client';

import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={scrolled ? 'navbar-scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          Charless <span className="text-main">Portfolio</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" activeClass="active">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="education" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" activeClass="active">Education</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="services" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" activeClass="active">Services</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" activeClass="active">Portfolio</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" activeClass="active">Contact</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;