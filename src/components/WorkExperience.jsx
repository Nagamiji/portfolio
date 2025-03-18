// src/components/WorkExperience.jsx
import React from 'react';

const WorkExperience = () => (
  <section className="work-experience section" id="work_experience">
    <h2 className="section-title fw-bold">Work Experience</h2>

    <div className="work-container">
      {/* Data Analyst Role */}
      <div className="work-item">
        <img src="src\assets\img\ministry.jpg" alt="Spectrum Management Logo" className="work-logo" />
        <div className="work-details">
          <h3>Data Analyst - Spectrum Management &amp; Frequency Department</h3>
          <p><strong>Ministry of Telecommunication and Post of Cambodia</strong></p>
          <p className="date">August 2024 - September 2024</p>
          <ul>
            <li>Worked on a <strong>spectrum price prediction</strong> project to analyze and forecast <strong>telecommunication spectrum pricing trends</strong>.</li>
            <li>Performed <strong>data preprocessing and exploratory data analysis (EDA)</strong> on large-scale spectrum datasets.</li>
            <li>Developed and tested multiple <strong>regression models</strong> including <strong>Linear Regression, Ridge, Lasso</strong>, and advanced machine learning models like <strong>Random Forest and Support Vector Regression (SVR)</strong>.</li>
            <li>Analyzed <strong>spectrum allocation strategies</strong> and studied <strong>telecommunication regulations</strong> to understand pricing factors.</li>
            <li>Generated <strong>data-driven insights</strong> to support policy decisions related to spectrum management.</li>
          </ul>
          <a href="assets/certificates/ministry.pdf" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
        </div>
      </div>
      {/* Secretary Office Volunteer */}
      <div className="work-item">
        <img src="src\assets\img\saat.jpg" alt="Phnom Penh Saat Logo" className="work-logo" />
        <div className="work-details">
          <h3>Secretary Office Volunteer – Phnom Penh Saat Campaign</h3>
          <p className="date">October 2024 – November 2024</p>
          <ul>
            <li>Provided <strong>administrative support</strong> for the Phnom Penh Saat campaign, assisting in scheduling, documentation, and record-keeping.</li>
            <li>Managed <strong>official communications</strong> and coordinated meetings to ensure smooth campaign operations.</li>
            <li>Assisted in <strong>organizing digital outreach efforts</strong>, including social media posts and campaign reports.</li>
            <li>Ensured proper documentation and data organization for future campaign reference.</li>
          </ul>
          <a href="assets/certificates/saat.jpg" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>
        </div>
      </div>
      {/* Data Science Intern */}
      <div className="work-item">
        <img src="src\assets\img\scholarar.jpg" alt="Scholarar Logo" className="work-logo" />
        <div className="work-details">
          <h3>Data Science Intern - Scholarar (Startup Company)</h3>
          <p className="date">December 2024 – April 2025</p>
          <ul>
            <li>Designed and implemented an <strong>automated web scraping pipeline</strong> using <strong>Selenium, Playwright, and WebDriver</strong> to extract scholarship data.</li>
            <li>Developed a <strong>scholarship recommendation system</strong> using <strong>Python (Flask), PostgreSQL, and pgvector</strong>, integrating advanced filtering methods.</li>
            <li>Implemented <strong>vector-based search algorithms</strong> with <strong>Zilliz and OpenAI embeddings</strong> to enhance recommendation accuracy.</li>
            <li>Performed <strong>database optimization and indexing strategies</strong> to improve query efficiency and system scalability.</li>
            <li>Collaborated with a cross-functional team to ensure seamless deployment and integration of machine learning models.</li>
          </ul>
        </div>
      </div>
      {/* AI Researcher Role */}
      <div className="work-item">
        <img src="src\assets\img\vilalab.jpg" alt="Vilalab Logo" className="work-logo" />
        <div className="work-details">
          <h3>AI Researcher - Khmer Digit Written Recognition</h3>
          <p><strong>Institute of Technology of Cambodia (ITC)</strong></p>
          <p className="date">March 2025 – Present</p>
          <ul>
            <li>Conducting research on <strong>Khmer handwritten digit recognition</strong> using <strong>deep learning</strong> techniques.</li>
            <li>Leading data collection efforts by acquiring <strong>stroke coordinate data</strong> from students to build a robust dataset.</li>
            <li>Developing and evaluating <strong>LSTM, BLSTM, GRU, and Hybrid deep learning models</strong> to optimize recognition accuracy.</li>
            <li>Implementing <strong>data preprocessing, feature extraction, and model tuning</strong> to enhance performance.</li>
            <li>Exploring various architectures and hyperparameter tuning strategies to improve model generalization.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default WorkExperience;
