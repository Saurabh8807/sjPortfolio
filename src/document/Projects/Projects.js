import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Mobile from './mobile.png'
import './Projects.css'

function Projects() {
  return (
    <section id="Projects">
    <Container fluid className="project-section">
      <Container>
        <h1  className="project-heading">
          My Recent <strong className="highlight">Works </strong>
        </h1>
        <p class="title"> 
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("./Travelouge.jpeg")}
              isBlog={false}
              title="Travelouge"
              description="Travelogue is a social-media application on
              which user can create new post and share it globally. This project has helped to
              explore the pattern of how social media is important to
              produce, share and filter information and also how it
              functions to fulfill the daily needs of a user."
              ghLink="https://github.com/Saurabh8807/Travelouge-memories-app-sem5"
              demoLink="https://travelogue-seven.vercel.app/posts"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("./Rohit Sharma.png")}
              isBlog={false}
              title="Sahyadri Hotel"
              description="Coming Soon..."
              ghLink="https://saurabh-jagtap.vercel.app/"
              demoLink="https://saurabh-jagtap.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={require("./plant.jpeg")}
    isBlog={false}
    title="Plant Disease Detection"
    description="The creation of a plant disease detection
    system that combines machine learning, image processing,
    and a user-friendly interface has the potential to completely
    transform crop health management and agriculture."
    ghLink="https://github.com/Saurabh8807/Travelouge-memories-app-sem5"
    hasMobileBackground 
    imageSize="small" // Add this prop to specify the size of the image
    // Add this prop to specify that the card should have a mobile background
  />
</Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("./Rohit Sharma.png")}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="http://localhost:3000/Dashboard#Contact"
              demoLink="http://localhost:3000/Dashboard#Contact"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("./Rohit Sharma.png")}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="http://localhost:3000/Dashboard#Contact"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("./Rohit Sharma.png")}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image."
              ghLink="http://localhost:3000/Dashboard#Contact"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  </section>
  );
}

export default Projects;
