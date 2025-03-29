// src/components/Projects.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import project1 from "../assets/img/project1.jpg";
import project2 from "../assets/img/project2.jpg";
import project3 from "../assets/img/project3.jpg";
import project4 from "../assets/img/project4.jpg";
import project5 from "../assets/img/project5.png";
import project6 from "../assets/img/project6.jpeg";

// Project Data Array
const projectsData = [
  {
    title: "Diagnosis Disease & ML Recommendation",
    image: project1, // Use imported project1 image
    link: "https://github.com/Nagamiji/Diagnosis-Disease/tree/main",
    description: "A Machine Learning model for diagnosing diseases and recommending treatments.",
    tech: ["Python", "Flask", "ML", "Scikit-Learn"]
  },
  {
    title: "Library Management System",
    image: project2, // Use imported project2 image
    link: "https://github.com/Nagamiji/library_management_system/tree/main",
    description: "A Spring Boot-powered library management system for book tracking and user management.",
    tech: ["Java", "Spring Boot", "MySQL"]
  },
  {
    title: "Loan Eligibility Prediction",
    image: project3, // Use imported project3 image
    link: "https://www.kaggle.com/code/tykana/loan-eligibility-prediction",
    description: "Binary classification model for predicting loan approval eligibility.",
    tech: ["Python", "Kaggle", "Logistic Regression"]
  },
  {
    title: "Customer Segmentation (KMeans)",
    image: project4, // Use imported project4 image
    link: "https://www.kaggle.com/code/tykana/customer-segmentation",
    description: "Unsupervised ML model to segment customers based on purchasing behavior.",
    tech: ["Python", "KMeans", "Scikit-Learn"]
  },
  {
    title: "Image Segmentation (U-Net)",
    image: project5, // Use imported project5 image
    link: "https://www.kaggle.com/code/tykana/image-segmatation",
    description: "A deep learning-based image segmentation project using U-Net.",
    tech: ["Python", "TensorFlow", "CNN"]
  },
  {
    title: "Ai Chat Bot Agent",
    image: project6, // Make sure 'project6' is correctly imported above
    link: "https://github.com/Nagamiji/AiAgentChatbot",
    description: "Conversational AI chatbot using Flask and Ollama with RAG (Retrieval-Augmented Generation), PostgreSQL for embeddings, and MongoDB for logging.",
    tech: ["Flask", "Python", "Ollama", "PostgreSQL", "MongoDB", "RAG", "LLM"]
  }
  
];

const Projects = () => (
  <section className="projects section bg-light py-5" id="projects">
    <div className="container">
      <h2 className="section-title text-center fw-bold mb-4">📌 Personal Projects</h2>
      
      <div className="row g-4">
        {projectsData.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <a href={project.link} className="card project-card shadow-sm border-0" target="_blank" rel="noopener noreferrer">
              {/* Project Image */}
              <img src={project.image} alt={project.title} className="card-img-top project-image" />

              {/* Card Body */}
              <div className="card-body">
                <h5 className="card-title fw-bold">{project.title}</h5>
                <p className="card-text text-muted">{project.description}</p>

                {/* Tech Stack Badges */}
                <div className="d-flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="badge bg-primary">{tech}</span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
