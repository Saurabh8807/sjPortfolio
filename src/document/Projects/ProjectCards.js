import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import './ProjectCards.css';

function ProjectCard(props) {
  return (
    <div className={`box ${props.hasMobileBackground ? 'mobile-background' : ''}`}>

    <div className="box">
      <Card className="project-card-view">
        <div className="laptop-screen">
          <div
            className="photo"
            style={{
              backgroundImage: `url(${props.isMobile ? props.mobileImgPath : props.imgPath})`,
            }}
          ></div>
        </div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "Center" }}>
            {props.description}
          </Card.Text>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
    </div>
  );
}

export default ProjectCard;
