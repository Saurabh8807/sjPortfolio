import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faGit, faGithub, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import Flip from 'react-reveal/Flip';

import { faHtml5, faCss3, faReact, faJava, faJs, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import './Skills.css';

const Skills = () => {
  return (
    <section id="Skills">
      <h1 style={{marginLeft:"45vw",marginBottom:"6vh"}}>Skills</h1>
      <div className="skillBackground">
        <div className="row">
        <Flip left>
          <div className="glass">
            <FontAwesomeIcon icon={faHtml5} className="logo2" />
            <p>HTML5</p>
          </div>
          </Flip>

          <Flip left>
          <div className="glass">
            <FontAwesomeIcon icon={faCss3} className="logo2" />
            <p>CSS3</p>
          </div>
          </Flip>
          <Flip right>

          <div className="glass">
            <FontAwesomeIcon icon={faJs} className="logo2" />
            <p>JavaScript</p>
          </div>
          </Flip>

          <Flip right>
          <div className="glass">
            <FontAwesomeIcon icon={faBootstrap} className="logo2" />
            <p>Bootstrap</p>
          </div>
          </Flip>

        </div>
        <div className="row">
        <Flip left>
          <div className="glass">
            <FontAwesomeIcon icon={faDatabase} className="logo2" />
            <p>MongoDB</p>
          </div>
          </Flip>
          <Flip left>
          <div className="glass">
            <FontAwesomeIcon icon={faReact} className="logo2" />
            <p>React.js</p>
          </div>
          </Flip>

          <Flip right>
          <div className="glass">
            <FontAwesomeIcon icon={faNodeJs} className="logo2" />
            <p>Express.js</p>
          </div>
          </Flip>

          <Flip right>
          <div className="glass">
            <FontAwesomeIcon icon={faNodeJs} className="logo2" />
            <p>Node.js</p>
          </div>
          </Flip>

        </div>
        <div className="row">
        <Flip left>
          <div className="glass">
            <FontAwesomeIcon icon={faJava} className="logo2" />
            <p>Java</p>
          </div>
          </Flip>

          <Flip right>
          <div className="glass">
            <FontAwesomeIcon icon={faGit} className="logo2" />
            <p>Git</p>
          </div>
          </Flip>

          <Flip left>
          <div className="glass">
            <FontAwesomeIcon icon={faGithub} className="logo2" />
            <p>Github</p>
          </div>
          </Flip >

          <Flip right>
          <div className="glass">
            <FontAwesomeIcon icon={faBootstrap} className="logo2" />
            <p>Bootstrap</p>
          </div>
          </Flip>

        </div>
      </div>
    </section>
  );
};

export default Skills;
