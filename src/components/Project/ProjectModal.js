import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProjectModal = ({ show, handleClose, title, description, imgUrl, techUsed, liveDemo, githubCode }) => {
  return (
    <Modal show={show} onHide={handleClose} className='mt-5 text-black'>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={imgUrl} alt={title} />
        <p className='mt-1'>{description}</p>
        <p><strong>Technologies Used:</strong> {techUsed.join(', ')}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {liveDemo && (
          <Button variant="primary" href={liveDemo} target="_blank">
            Live Demo
          </Button>
        )}
        {githubCode && (
          <Button variant="primary" href={githubCode} target="_blank">
            GitHub Code
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
