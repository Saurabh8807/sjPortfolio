import React , { useEffect }from 'react';
import './Home.css';
import sjLogo from '../Animation/sjLogo.png'
import { saveAs } from 'file-saver';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  const handleDownloadPDF = () => {
    // Assuming you have the PDF file in the public folder
    const pdfFilePath = '/Saurabh-Resume.pdf';

    // Trigger the download
    saveAs(pdfFilePath, 'Saurabh-Resume.pdf');
  };

  useEffect(() => {
    // Add an event listener to handle the download when the button is clicked
    document.getElementById('downloadButton').addEventListener('click', handleDownloadPDF);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.getElementById('downloadButton').removeEventListener('click', handleDownloadPDF);
    };
  }, []);
  return (
    <section id="Home">
      <div id="home2">
        <div class="split-screen">
          <div class="split-screen__half left">
            <h1>Hello <br/>I'm Saurabh Jagtap</h1>
            <p>A skilled <span>full-stack developer</span> specializing in the <span>MERN stack</span>.</p>
            <p>With a passion for building dynamic and responsive web applications, I bring expertise in <span>front-end</span> and <span>back-end development</span> to deliver <span>robust</span> and <span>user-friendly solutions</span>.</p>
            <div className="main">
              <ul class="social-icons">
                <li>
                  <a className="a" href="https://github.com/Saurabh8807"><FaGithub /></a>
                </li>
                <li>
                  <a className="a" href="https://www.linkedin.com/in/saurabh-jagtap-339028242/"><FaLinkedin /></a>
                </li>
                <li>
                  <a className="a" href="https://www.instagram.com/__saurabh__8807/"><FaInstagram /></a>
                </li>
                <li>
                  <a className="a" href="https://www.facebook.com/saurabh.jagtap.161446"><FaFacebook /></a>
                </li>
                <li>
                  <a className="a" href="#"><FaEnvelope /></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="split-screen__half"><img className="logo1" src={sjLogo} alt='' height={350}/></div>        </div>
      </div>
      <span class="star">
    <a href="https://github.com/Saurabh8807" class="button">
        <svg className="svg-txt">
            <rect fill="none" className="rect" />
        </svg>
        ⭐Star Me On Github            
    </a>            
</span>
<button
      id="downloadButton"
      variant="primary"
      className="download-button"
    >
      Download Resume
    </button>
    </section>
  );
};

export default Home;
