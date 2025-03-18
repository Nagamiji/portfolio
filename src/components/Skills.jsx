// src/components/Skills.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

// Import certificate images
import certificate1 from "../assets/img/certificate.jpg";
import certificate2 from "../assets/img/Googleanalyze.jpg";
import certificate3 from "../assets/img/IBMDataEngineer.jpg";
import certificate5 from "../assets/img/AseanDataScience.jpg";

const skills = [
  { name: "Python (Data Science)", icon: "fa-brands fa-python", percentage: 80 },
  { name: "MySQL", icon: "fa-solid fa-database", percentage: 70 },
  { name: "Java (Spring Boot)", icon: "fa-brands fa-java", percentage: 65 },
  { name: "HTML5", icon: "bx bxl-html5", percentage: 60 },
  { name: "CSS3", icon: "bx bxl-css3", percentage: 60 },
  { name: "JavaScript", icon: "bx bxl-javascript", percentage: 60 },
];

const Skills = () => (
  <section className="skills section bg-light py-5" id="skills">
    <div className="container">
      <h2 className="section-title text-center fw-bold mb-4">Skills & Certifications</h2>

      <div className="row">
        {/* Left: Skills List */}
        <div className="col-md-6">
          <h3 className="skills__subtitle fw-bold text-primary">Professional Skills</h3>
          <p className="skills__text text-muted">
            I have a strong foundation in <strong>mathematics</strong> and <strong>programming</strong>, specializing in <strong>Data Science</strong> and Some background in <strong>Backend Development</strong>. Additionally, I have experience working with <strong>databases</strong>, and <strong>web technologies</strong>.
          </p>

          {/* Skill Items */}
          {skills.map((skill, index) => (
            <div key={index} className="skills__data d-flex align-items-center my-3">
              {/* Skill Icon */}
              <div className="me-3 text-primary" style={{ fontSize: "2rem" }}>
                <i className={skill.icon}></i>
              </div>

              {/* Skill Name & Bar */}
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between">
                  <strong className="skills__name">{skill.name}</strong>
                  <span className="fw-bold">{skill.percentage}%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div className="progress-bar bg-primary" style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Certificate Carousel */}
        <div className="col-md-6 text-center">
          <h3 className="fw-bold text-primary mb-3">🎓 Certifications</h3>
          <Carousel controls={true} indicators={true} interval={3500} fade>
            <Carousel.Item>
              <img src={certificate1} alt="Certificate 1" className="d-block w-100 rounded shadow-lg" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={certificate2} alt="Certificate 2" className="d-block w-100 rounded shadow-lg" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={certificate3} alt="Certificate 3" className="d-block w-100 rounded shadow-lg" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={certificate5} alt="Certificate 5" className="d-block w-100 rounded shadow-lg" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
