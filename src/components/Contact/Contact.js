import './Contact.css'
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';

export const Contact = () => {

  const form = useRef();
  const [setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_e8udw4q', 'template_2ms9pp5', form.current, {
        publicKey: 'E4PDBe_TscWiJD9KL',
      })

      setDone(true)

      e.target.reset()
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="first_name" placeholder="First Name"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="last_name" placeholder="Last Name"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="user_email" placeholder="Email Address"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="user_phone" placeholder="Phone No."/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" placeholder="Message"></textarea>
                      <button type="submit"><span>Send</span></button>
                    </Col>
                  </Row>
                  <input type="hidden" name="to_name" value="Rahul" />
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
