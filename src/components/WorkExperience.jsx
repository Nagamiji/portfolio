import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import '../assets/css/WorkExperience.css';

import ministryLogo from '../assets/img/ministry.jpg';
import saatLogo from '../assets/img/saat.jpg';
import scholararLogo from '../assets/img/scholarar.jpg';
import vilalabLogo from '../assets/img/vilalab.jpg';

const experiences = [
  {
    title: 'Data Analyst – Spectrum Management & Frequency Department',
    company: 'Ministry of Telecommunication and Post of Cambodia',
    date: 'Aug 2024 – Sep 2024',
    logo: ministryLogo,
    bullets: [
      'Built regression & ML models (Linear, Ridge, Lasso, Random Forest, SVR) to forecast spectrum pricing.',
      'Performed data preprocessing, EDA, and feature engineering on large datasets.',
      'Delivered policy‑grade insights that informed MoTP’s spectrum allocation strategy.',
    ],
    sideInfo: '📊 92% prediction accuracy, 🗂 Processed 100K+ records, 💼 Policy recommendation adopted',
    certificate: '/assets/certificates/ministry.pdf',
  },
  {
    title: 'Secretary Office Volunteer – Phnom Penh Saat Campaign',
    company: 'Phnom Penh Saat',
    date: 'Oct 2024 – Nov 2024',
    logo: saatLogo,
    bullets: [
      'Managed official communications, scheduling, and digital outreach.',
      'Ensured accurate documentation for all campaign activities.',
    ],
    sideInfo: '🗓 Coordinated 20+ meetings, ✉️ Processed 300+ correspondence',
    certificate: '/assets/certificates/saat.jpg',
  },
  {
    title: 'Data Science Intern – Scholarar',
    company: 'Scholarar (Startup)',
    date: 'Dec 2024 – Apr 2025',
    logo: scholararLogo,
    bullets: [
      'Built an automated web‑scraping pipeline with Selenium & Playwright.',
      'Developed a pgvector‑powered recommendation engine using OpenAI embeddings.',
      'Optimized PostgreSQL indexing for 10× faster queries.',
    ],
    sideInfo: '🤖 Automated 500+ scrapes weekly, ⚡ Query latency reduced from 200ms to 20ms',
  },
  {
    title: 'AI Researcher – Khmer Digit Recognition',
    company: 'Institute of Technology of Cambodia',
    date: 'Mar 2025 – Present',
    logo: vilalabLogo,
    bullets: [
      'Leading deep‑learning research (LSTM, BLSTM, GRU) on Khmer handwritten digit recognition.',
      'Designed a data‑collection pipeline for stroke coordinates.',
      'Iterating model architectures & hyperparameters to maximize accuracy.',
    ],
    sideInfo: '📈 Current accuracy: 96%, 🧑‍🔬 Dataset size: 15K samples',
  },
];

const WorkExperience = () => (
  <section id="work-experience" className="work-experience py-5">
    <Container>
      <h2 className="section-title text-center mb-5">Work Experience</h2>
      {experiences.map((exp, idx) => (
        <Card key={idx} className="work-item mb-4 animate-fadein">
          <div className="d-flex align-items-center flex-wrap p-4">
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="work-logo img-fluid rounded mb-3 mb-md-0"
            />
            <div className="work-details ms-md-4 flex-grow-1">
              <Card.Title className="h4">{exp.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{exp.company}</Card.Subtitle>
              <Card.Text className="date">{exp.date}</Card.Text>
              <ul>
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              {exp.sideInfo && (
                <p className="side-info">
                  <strong>Highlights:</strong> {exp.sideInfo}
                </p>
              )}
              {exp.certificate && (
                <a href={exp.certificate} target="_blank" rel="noopener noreferrer">
                  <Button variant="link" className="text-primary">View Certificate</Button>
                </a>
              )}
            </div>
          </div>
        </Card>
      ))}
    </Container>
  </section>
);

export default WorkExperience;
