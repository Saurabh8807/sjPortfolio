import React from 'react';
import './Achievement.css';
import { FaTrophy } from 'react-icons/fa';
import certificate from './Hackathon.png'
import certificate2 from './VNPS.jpeg'
import Fade from 'react-reveal/Fade';


const Achievements = () => {
  return (
    <section id="Achievements">
      <h2 >
        Achievements
        <FaTrophy className="trophy-icon" size={40} style={{ color: 'gold', marginLeft: '1vw' }} />
      </h2>
      <div className="certificates-container">
        <div className="certificate1">
        <Fade>
          <img src={certificate} alt="Certificate 1" />
          </Fade >
          <h3>Hackathon</h3>
        </div>
        <div className="certificate2">
        <Fade>
          <img src={certificate2} alt="Certificate 2" />
          </Fade>
          <h3>VCET'S National Level Project <br />ShowCase</h3>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
