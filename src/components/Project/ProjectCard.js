import React, { useState } from 'react';
import { Col, Button } from 'react-bootstrap';
import ProjectModal from './ProjectModal';

export const ProjectCard = ({ title, description, imgUrl, techUsed, liveDemo, githubCode }) => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          {/* <span>{description}</span> */}
          <Button variant="info" onClick={handleToggleModal}>
            More Details
          </Button>
        </div>
      </div>
      <ProjectModal
        show={showModal}
        handleClose={handleToggleModal}
        title={title}
        description={description}
        imgUrl={imgUrl}
        techUsed={techUsed}
        liveDemo={liveDemo}
        githubCode={githubCode}
      />
    </Col>
  );
};
