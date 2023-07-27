import React from "react";
import "./About.css";
import imgAbout from "./about.png";
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <section id="About">
      <h1 style={{ marginLeft: "45vw" }}>About</h1>
      <div className="box-container">
        <div className="box-content">
          <div className="image-container">
          <Fade left>
            <img src={imgAbout} alt="Image" className="box-image" />
          </Fade>
          </div>
          <Fade right>
          <div className="text-container">
            <p className="box-description">
            <div className="introduction">
      <h1 className="heading">Hi, I'm a Final Year IT Engineering Student and a Passionate Full-Stack Developer</h1>
      <p className="description">
  <span>Specializing</span> in the <span>MERN Stack</span>. 
  With a <span>Strong Foundation</span> in Web Development. 
  Excited to Showcase my Skills and Projects through this Portfolio Website. 
  I am <span>ambitious</span> and <span>driven</span> to learn and grow in the field of web development. 
  With a strong foundation in both <span>front-end</span> and <span>back-end</span> technologies, 
  I strive to create <span>innovative</span> and <span>user-friendly</span> applications. 
  I am dedicated to delivering <span>high-quality</span> solutions and enjoy tackling challenging projects. 
  I am excited to contribute my skills and knowledge to create impactful and engaging web experiences. 
  Let's connect and explore the possibilities together.
</p>
    </div></p>

          </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
