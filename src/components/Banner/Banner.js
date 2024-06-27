import { useEffect } from "react";
import Typewriter from 'typewriter-effect'
import './Banner.css'
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {

  useEffect(() => {
    const interval = setInterval(() => {
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const Bio = {
    resume : "https://drive.google.com/file/d/1TaZiVLQZfQ7ribAV6PN-xh4JetWVQ02e/view?usp=sharing",
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1> Hi! I'm Rahul{' '}
                  <Typewriter
                    options={{
                      strings: ['Web Developer', 'Full Stack Developer'],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      delay: 200,
                    }}
                  />
                </h1>
                <p>I'm here to showcase my passion for coding through interactive projects. Every project is a story waiting to be told, and I'm thrilled to share mine with you. From responsive designs to seamless user experiences, let's push the boundaries of what's possible together. Explore and get inspired!</p>
                <button onClick={() => window.open(Bio.resume, "_blank")}>Check Resume <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`header-img ${isVisible ? "animate__animated animate__zoomIn" : ""}`}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
