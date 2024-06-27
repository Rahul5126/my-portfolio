import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import './Projects.css'
import { ProjectCard } from "./ProjectCard";
import { ProjectDetails } from "./ProjectDetails"
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const maxProjectsToShow = 3;

  const [additionalProjects, setAdditionalProjects] = useState(maxProjectsToShow);

  const handleShowMore = () => {
    setAdditionalProjects(prev => prev + 3);
  };

  const handleShowLess = () => {
    setAdditionalProjects(maxProjectsToShow);
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeInDown": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="Javascript">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="Javascript">Javascript</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="React">React</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="MERN">MERN</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                    <Tab.Pane eventKey="Javascript">
                      <Row>
                      {ProjectDetails.filter(project => project.category === 'Javascript').slice(0, additionalProjects).map((project, index) => (
                            <ProjectCard key={index} {...project} className="animate-new" />
                          ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="React">
                      <Row>
                      {ProjectDetails.filter(project => project.category === 'React').slice(0, additionalProjects).map((project, index) => (
                            <ProjectCard key={index} {...project} className="animate-new" />
                          ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="MERN">
                      <Row>
                      {ProjectDetails.filter(project => project.category === 'MERN').slice(0, additionalProjects).map((project, index) => (
                            <ProjectCard key={index} {...project} className="animate-new" />
                          ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                {additionalProjects >= ProjectDetails.length ? (
                    <div className="text-center">
                      <Button variant="light" onClick={handleShowLess}>
                        Show Less
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Button variant="light" onClick={handleShowMore}>
                        Show More
                      </Button>
                    </div>
                  )}
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  )
}
