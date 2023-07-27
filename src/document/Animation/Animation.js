import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Animation.css';
import sjLogo from './sjLogo.png'
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';


const Animation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const circle = document.querySelector('.circle');
    const logo = document.querySelector('.logo');
    const name = document.querySelector('.name');

    const expandCircleAnimation = () => {
      circle.style.animation = 'expandCircle 2.5s ease-in-out forwards';
    };

    const showLogoAndName = () => {
      logo.style.opacity = '1';
      name.style.opacity = '1';
      setTimeout(() => {
        navigate('/Dashboard'); // Replace '/home' with the actual route for your home page
      }, 3000); // Delay the transition to the home page after showing the logo and name
    };

    expandCircleAnimation();
    setTimeout(() => {
      showLogoAndName();
    }, 1000); // Delay the logo and name after circle expansion
  }, [navigate]);

  return (
    <div className="animation-page">
      <div className="circle"></div>
      <div className="text-containerAnim">
        <Bounce top>
        <div className='hexagon'>
        <img className="logo" src={sjLogo} alt='' height={500}/>
        </div>
        </Bounce>
        <Rotate bottom>
        <div className="name">&lt; 𝓢𝓪𝓾𝓻𝓪𝓫𝓱 𝓙𝓪𝓰𝓽𝓪𝓹 /&gt;</div>
        </Rotate>
      </div>
    </div>
  );
};

export default Animation;
