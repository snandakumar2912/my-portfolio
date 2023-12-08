import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

function Projects() {
  const rfid = "./rfid.jpg";
  const portfolio = "./portfolioIcon.jpg";

  const projects = [
    {
      id: 1,
      title: "Personal portfolio website",
      description:
        "Using CSS, HTML, and JavaScript and hosting my website through GitHub",
      ghLink: "https://mutyasowmya.github.io/project2/",
    },
    {
      id: 3,
      title: "RFID based attendance detector",
      description:
        "An RFID based attendance detector automates attendance tracking using RFID technology.",
      ghLink:
        "https://github.com/mutyasowmya/RFIDbasedAttendanceDetector/tree/0fd198be010e4f83be57dacb01f7fe40dc39f141",
    },
    // Add more projects as needed
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <Container fluid className="project-section">
      <Container><center>
        <h1 className="project-heading">
          <strong className="purple">Projects Worked</strong>
        </h1></center>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col
              key={project.id}
              md={4}
              className="project-card"
              onClick={() => handleProjectClick(project)}
            >
              <ProjectCard
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                imgPath={project.id === 3 ? rfid : portfolio}
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for displaying detailed project information */}
      {selectedProject && (
        <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedProject.description}</p>
            {selectedProject.ghLink && (
              <a
                href={selectedProject.ghLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Link
              </a>
            )}
            {/* Add more detailed information here */}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="mt-4 px-4 py-2 text-white rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              onClick={handleCloseModal}
              style={{ backgroundColor: "black" }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default Projects;
