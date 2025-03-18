// src/components/Projects.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Project Data Array
const projectsData = [
  {
    title: "Diagnosis Disease & ML Recommendation",
    image: "src/assets/img/project1.jpg",
    link: "https://github.com/Nagamiji/Diagnosis-Disease/tree/main",
    description: "A Machine Learning model for diagnosing diseases and recommending treatments.",
    tech: ["Python", "Flask", "ML", "Scikit-Learn"]
  },
  {
    title: "Library Management System",
    image: "src/assets/img/project2.jpg",
    link: "https://github.com/Nagamiji/library_management_system/tree/main",
    description: "A Spring Boot-powered library management system for book tracking and user management.",
    tech: ["Java", "Spring Boot", "MySQL"]
  },
  {
    title: "Loan Eligibility Prediction",
    image: "src/assets/img/project3.jpg",
    link: "https://www.kaggle.com/code/tykana/loan-eligibility-prediction",
    description: "Binary classification model for predicting loan approval eligibility.",
    tech: ["Python", "Kaggle", "Logistic Regression"]
  },
  {
    title: "Customer Segmentation (KMeans)",
    image: "src/assets/img/project4.jpg",
    link: "https://www.kaggle.com/code/tykana/customer-segmentation",
    description: "Unsupervised ML model to segment customers based on purchasing behavior.",
    tech: ["Python", "KMeans", "Scikit-Learn"]
  },
  {
    title: "Image Segmentation (U-Net)",
    image: "src/assets/img/project5.png",
    link: "https://www.kaggle.com/code/tykana/image-segmatation",
    description: "A deep learning-based image segmentation project using U-Net.",
    tech: ["Python", "TensorFlow", "CNN"]
  },
  {
    title: "Data Engineer Project",
    image: "src/assets/img/project6.png",
    link: "https://github.com/Nagamiji/Data-Engineer-Project",
    description: "Data pipeline implementation for structured data processing.",
    tech: ["Airflow", "PostgreSQL", "BigQuery"]
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
