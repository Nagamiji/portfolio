// src/components/Home.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaTelegram, FaDownload } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import profileImg from "../assets/img/profileHome.png";

const Home = () => (
  <section className="home bd-grid" id="home">
    <div className="home__data">
      <h1 className="home__title">
        Hi,<br />
        I am <span className="home__title-color">Ty Kana</span>
        <br />
        <Typewriter
          options={{
            strings: ["Data Scientist", "AI Enthusiast", "API Developer"],
            autoStart: true,
            loop: true,
            delay: 100,
            deleteSpeed: 50,
          }}
        />
      </h1>

      {/* Buttons */}
      <div className="mt-3">
        <a href="#contact" className="button">📩 Contact</a>
        
        {/* Corrected CV Download Button */}
        <a href="/files/CV.pdf" download className="button button--secondary ms-3">
          <FaDownload /> Download CV
        </a>
      </div>
    </div>

    {/* Social Links */}
    <div className="home__social">
      <a href="https://www.linkedin.com/in/ty-kana-3080a42aa/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Nagamiji" className="home__social-icon" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/share/15yJTQUopd/?mibextid=wwXIfr" className="home__social-icon" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://t.me/Tykana" className="home__social-icon" target="_blank" rel="noopener noreferrer">
        <FaTelegram />
      </a>
    </div>

    {/* Profile Image with Zoom Effect */}
    <div className="home__img">
      <svg className="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <mask id="mask0" mask-type="alpha">
          <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
        </mask>
        <g mask="url(#mask0)">
          <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
          
          {/* Zoomed-in Image */}
          <image 
            className="home__blob-img" 
            x="10"
            y="20"
            width="450"
            height="450"
            xlinkHref={profileImg}
            alt="Profile" 
            style={{ filter: "drop-shadow(5px 5px 15px rgba(0,0,0,0.3))" }}
          />
        </g>
      </svg>
    </div>
  </section>
);

export default Home;
