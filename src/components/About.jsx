// src/components/About.jsx
import React from "react";
import Lottie from "lottie-react";
import robotAnimation from "../assets/animations/robot-walking.json"; // Correct path
import profileImg from "../assets/img/profile-removebg-preview.png"; // Correct path

const About = () => (
  <section className="about section bg-light py-5 position-relative" id="about">
    <div className="container">
      {/* Lottie Animation - Robot Walking */}
      <div className="robot-container">
        <Lottie animationData={robotAnimation} className="animated-robot" />
      </div>

      <h2 className="section-title text-center fw-bold mb-4">🚀 Who Am I?</h2>

      <div className="row align-items-center">
        {/* Left: Profile Image */}
        <div className="col-md-5 text-center">
          <div className="about__img-container">
            <div className="profile-frame">
              <img
                src={profileImg} // ✅ Corrected: Using imported image reference
                alt="Profile Picture"
                className="about__img img-fluid"
              />
            </div>
          </div>
        </div>

        {/* Right: About Text */}
        <div className="col-md-7">
          <h2 className="about__subtitle fw-bold text-primary">Hello, I'm <span className="text-dark">Kana</span> 👋</h2>

          <p className="about__text text-muted">
            I am a <strong className="text-dark">Data Science enthusiast</strong> passionate about <strong className="text-dark">solving complex problems</strong> through 
            <strong className="text-dark"> data-driven insights</strong>. I have a <strong className="text-dark">strong foundation in statistics, programming, and machine learning</strong>, 
            and I thrive on continuous learning.
          </p>

          {/* Personal Journey */}
          <div className="about__story p-3 border rounded shadow-sm bg-white">
            <h4 className="fw-bold text-secondary">🌱 My Journey into Data Science</h4>
            <p className="text-muted">
              My passion for <strong className="text-dark">AI and predictive analytics</strong> began when I realized how <strong className="text-dark">data could drive real-world impact</strong>.
              Whether it’s optimizing <strong className="text-dark">business decisions</strong> or <strong className="text-dark">enhancing daily life through AI</strong>, I am committed to 
              <strong className="text-dark"> leveraging technology for meaningful change</strong>.
            </p>
          </div>

          {/* Key Focus Areas */}
          <div className="about__skills-list mt-3 p-3 border rounded shadow-sm bg-light">
            <h4 className="fw-bold text-secondary">🔍 What I Specialize In:</h4>
            <ul className="list-unstyled">
              <li>✅ <strong className="text-dark">Machine Learning & AI</strong> – Predictive modeling & automation</li>
              <li>✅ <strong className="text-dark">Data Analytics & Visualization</strong> – Making data-driven decisions</li>
              <li>✅ <strong className="text-dark">Python & SQL</strong> – Backend data processing & automation</li>
              <li>✅ <strong className="text-dark">Cloud Computing</strong> – Deploying scalable AI applications</li>
              <li>✅ <strong className="text-dark">Continuous Learning</strong> – Staying up-to-date with AI innovations</li>
            </ul>
          </div>

          {/* Final Thought */}
          <p className="about__text text-muted mt-3">
            I believe that <strong className="text-dark">data has the power to transform industries</strong>. My goal is to <strong className="text-dark">keep growing</strong>, collaborating with 
            like-minded individuals, and contributing <strong className="text-dark">innovative solutions</strong> that impact the world positively.  
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
