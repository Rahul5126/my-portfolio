/* eslint-disable react/jsx-no-target-blank */
import { useState, useEffect } from "react";
import './NavBar.css'
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false);
  }

  const socialIcon = {
    linkedin : "https://www.linkedin.com/in/rahul-singh-8a8479204/",
    github : "https://github.com/Rahul5126",
    instagram : "https://www.instagram.com/the_rahul.singh/?next=%2F",
  }
  

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""} expanded={expanded} onToggle={() => setExpanded(expanded ? false : "expanded")}>
        <Container className="px-md-0">
          <Navbar.Brand href="/" className="brand-container">
            <div className="brand-style">&lt;</div>
            Rahul
            <div className="brand-style">/</div>
            Singh
            <div className="brand-style">&gt;</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navigation-menu" onSelect={() => setExpanded(false)}>
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href={socialIcon.linkedin} target="_blank" onClick={() => setExpanded(false)}><img src={navIcon1} alt="" /></a>
                <a href={socialIcon.github} target="_blank" onClick={() => setExpanded(false)}><img src={navIcon2} alt="" /></a>
                <a href={socialIcon.instagram} target="_blank" onClick={() => setExpanded(false)}><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#connect' onClick={() => setExpanded(false)}>
                <button className="connect-button"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}