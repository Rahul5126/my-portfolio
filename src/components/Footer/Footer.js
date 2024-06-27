/* eslint-disable react/jsx-no-target-blank */
import './Footer.css'
import { Container, Row, Col} from "react-bootstrap";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

export const Footer = () => {

  const socialIcon = {
    linkedin : "https://www.linkedin.com/in/rahul-singh-8a8479204/",
    github : "https://github.com/Rahul5126",
    instagram : "https://www.instagram.com/the_rahul.singh/?next=%2F",
  }

  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col size={12} sm={4}>
            <a href="/" className="footer-brand">
              <div className="footer-brand-style">&lt;</div>
              Rahul
              <div className="footer-brand-style">/</div>
              Singh
              <div className="footer-brand-style">&gt;</div>
            </a>
          </Col>
          <Col size={12} sm={4} className="text-center">
            <div className="social-icon">
              <a href={socialIcon.linkedin} target="_blank"><img src={navIcon1} alt="" /></a>
              <a href={socialIcon.github} target="_blank"><img src={navIcon2} alt="" /></a>
              <a href={socialIcon.instagram} target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
          </Col>
          <Col size={12} sm={4} className="text-center">
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
