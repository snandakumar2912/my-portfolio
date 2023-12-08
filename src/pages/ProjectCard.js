// ProjectCard.js
import React from "react";
import { Button } from "react-bootstrap";

const ProjectCard = ({ title, description, imgPath, onClick }) => {
  return (
    <div className="card">
      <div className="card-body">
        <center>
          <h5 className="card-title">{title}</h5>
          <img
            src={imgPath}
            alt={title}
            style={{ width: "250px", height: "200px", borderRadius: "5px" }}
          />
          <Button
            className="mt-4 px-4 py-2 text-white rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            variant="primary"
            onClick={onClick}
            style={{ backgroundColor: "black" }}
          >
            View Details
          </Button>
        </center>
      </div>
    </div>
  );
};

export default ProjectCard;
