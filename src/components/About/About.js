import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import HeroImage from '../../assets/img/HeroImage.png';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc">
        <li>Java</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc">
        <li>MCA from DIT University, Dehradun</li>
        <li>B.Sc in Mathematics from Sunrise University, Alwar</li>
        <li>12th in Science from Netajee Defence Academy, Gorakhpur</li>
        <li>10th from Air Force School, Gorakhpur</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc">
        <li>Full Stack Developer Pro from Imarticus Learning</li>
        <li>The Complete 2023 Web Development Bootcamp from Udemy</li>
        <li>Getting Started with Full Stack Java Development from Simplilearn</li>
        <li>Core Java from Internshala</li>
      </ul>
    ),
  },
];

export const About = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-white" style={{padding: '0 0 50px 0', position: 'relative'}} id="about">
      <div className="container py-8 px-4" style={{background: '#0d0c0cb1', borderRadius: '64px', padding: '60px 50px', marginTop: '-60px'}}>
        <div className="row">
          <div className="col-md-6 mb-4 d-flex align-items-center justify-content-center" style={{ maxHeight: "500px" }}>
            <Image src={HeroImage} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
          </div>

          <div className="col-md-6 text-left">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              As an aspiring Full Stack Developer, I've completed my training at Imarticus Learning,
              specializing in Full Stack development. Proficient in a wide range of technologies,
              including Java, HTML, CSS, Bootstrap, JavaScript, ReactJS, NodeJS, ExpressJS, and
              MongoDB, with hands-on experience in building scalable and efficient solutions from
              conception to deployment. A proactive learner committed to staying updated with
              emerging trends and best practices in Full Stack Development, continuously seeking
              opportunities to expand knowledge and refine skills.
            </p>
            <Nav variant="tabs" className="mt-4">
              {TAB_DATA.map((tabItem) => (
                <Nav.Item key={tabItem.id}>
                    <Nav.Link
                        className={tab === tabItem.id ? 'active' : ''}
                        onClick={() => handleTabChange(tabItem.id)}
                        >
                        {tabItem.title}
                    </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
            <div className="mt-4">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};