import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { Link } from "react-scroll";


const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tubelightRef = useRef(null);

  const handleLinkClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const tubelightElement = tubelightRef.current;
    const activeLink = document.querySelector('.navbar-nav .active');
  
    if (tubelightElement && activeLink) {
      const navElement = document.querySelector('nav');
      const navRect = navElement.getBoundingClientRect();
      const activeLinkRect = activeLink.getBoundingClientRect();
      const tubelightWidth = tubelightElement.offsetWidth;
      const offset = 14; // Adjust this value to control the tubelight's position
      const newLeft = activeLinkRect.left - navRect.left + (activeLinkRect.width - tubelightWidth) / 2 + offset;
      tubelightElement.style.left = `${newLeft}px`;
    }
  }, [activeIndex]);
  
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a href="/" className="navbar-brand nameNav">
          <div className="logoName">&lt; 𝓢𝓪𝓾𝓻𝓪𝓫𝓱 𝓙𝓪𝓰𝓽𝓪𝓹 /&gt;</div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="Home" className={`nav-link ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleLinkClick(0)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="About" className={`nav-link ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleLinkClick(1)}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="Skills" className={`nav-link ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleLinkClick(2)}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link to="Achievements" className={`nav-link ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleLinkClick(3)}>Achievements</Link>
            </li>
            <li className="nav-item">
              <Link to="Projects" className={`nav-link ${activeIndex === 4 ? 'active' : ''}`} onClick={() => handleLinkClick(4)}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="Contact" className={`nav-link ${activeIndex === 5 ? 'active' : ''}`} onClick={() => handleLinkClick(5)}>Contact</Link>
            </li>
          </ul>
          <div className="tubelight" ref={tubelightRef}>
            <div className="light-ray"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
