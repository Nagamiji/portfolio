// src/components/Achievements.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Nav, ProgressBar } from "react-bootstrap";

// Import images
import youngleaderImg from "../assets/img/youngleader.jpg";
import hackathonImg from "../assets/img/hackathon.jpg";
import ictImg from "../assets/img/ict.jpg";
import saatImg from "../assets/img/saatevent.jpg";

const Achievements = () => {
  const [index, setIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState("all");

  const achievementsData = [
    {
      title: "Asia-Pacific Conference for Innovative Young Leaders Summit (ACIYLS) 2024",
      date: "August 2024",
      description1:
        "Represented my country at a globally recognized summit aimed at tackling sustainability challenges through cross-border collaboration.",
      description2:
        "Designed and pitched a 'Reverse Vending Machine' that converts plastic waste into renewable energy credits.",
      skills: ["Innovation", "Public Speaking", "Sustainability", "Strategic Planning"],
      image: youngleaderImg,
      location: "Himawari Hotel, Phnom Penh",
      category: "leadership",
      monthIndex: 0, // August
    },
    {
      title: "Turning Hackathon Season 7",
      date: "October 2024",
      description1:
        "Competed in a 48-hour national hackathon to develop an AI-powered home repair service platform.",
      description2:
        "Led UI/UX design and market research; project ranked in the top 5 finalists.",
      skills: ["UI/UX Design", "Market Research", "Startup Innovation", "Time Management"],
      image: hackathonImg,
      location: "Khmer Enterprise Building, Phnom Penh",
      category: "tech",
      monthIndex: 1, // October
    },
    {
      title: "Phnom Penh SAAT Event",
      date: "November - December 2024",
      description1:
        "Led sustainability initiatives and workshops that engaged over 5,000 participants.",
      description2:
        "Developed an eco-friendly campaign promoting waste management and urban sustainability.",
      skills: ["Community Leadership", "Event Management", "Environmental Awareness", "Teamwork"],
      image: saatImg,
      location: "Phnom Penh, Cambodia",
      category: "impact",
      monthIndex: 2, // November
    },
    {
      title: "Cambodia ICT Camp 2024",
      date: "December 2024",
      description1:
        "Participated in an immersive five-day camp focusing on AI, cybersecurity, and emerging technologies.",
      description2:
        "Developed an IoT-based security system prototype using AI-powered threat detection.",
      skills: ["Artificial Intelligence", "Cybersecurity", "IoT Development", "Data Privacy"],
      image: ictImg,
      location: "Bayon Hotel, Siem Reap",
      category: "tech",
      monthIndex: 3, // December
    },
  ];

  // Filter achievements by category
  const filteredAchievements =
    selectedTab === "all"
      ? achievementsData
      : achievementsData.filter((item) => item.category === selectedTab);

  // Update Progress Bar Based on Month
  const progressValues = [0, 33, 66, 100]; // Values for each month position
  const progressLabels = ["August", "October", "November", "December"];

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="fw-bold text-dark mb-4 text-center">My Achievements</h2>

        {/* Progress Bar (Timeline from August to December) */}
        <div className="mb-4">
          <ProgressBar now={progressValues[index]} variant="primary" animated />
          <div className="d-flex justify-content-between mt-2">
            {progressLabels.map((label, i) => (
              <span key={i} className={i === index ? "fw-bold text-primary" : "text-muted"}>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Tabs for categories */}
        <Nav variant="pills" className="justify-content-center mb-4">
          <Nav.Item>
            <Nav.Link onClick={() => setSelectedTab("all")} active={selectedTab === "all"}>
              All
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setSelectedTab("tech")} active={selectedTab === "tech"}>
              Tech Events 💻
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setSelectedTab("leadership")} active={selectedTab === "leadership"}>
              Leadership Conferences 🎤
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setSelectedTab("impact")} active={selectedTab === "impact"}>
              Environmental Impact 🌱
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="row align-items-center">
          {/* Left: Carousel */}
          <div className="col-md-6">
            <Carousel
              activeIndex={index}
              onSelect={(selectedIndex) => setIndex(selectedIndex)}
              controls={true}
              indicators={false}
              interval={4000}
              fade
            >
              {filteredAchievements.map((achievement, i) => (
                <Carousel.Item key={i}>
                  <AchievementCard achievement={achievement} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          {/* Right: Extended Description */}
          <div className="col-md-6">
            <h3 className="text-primary fw-bold">🚀 My Achievement Journey</h3>
            <p className="text-muted">
              Throughout my journey, I have actively participated in both <strong>startup competitions</strong> and <strong>innovation-driven projects</strong>, gaining valuable experience in problem-solving, teamwork, and leadership.
            </p>
            <ul className="list-unstyled">
              <li>✅ Contributed to multiple <strong>startup & innovation competitions</strong>, refining business models and prototyping solutions.</li>
              <li>✅ Engaged in <strong>environmental impact programs</strong>, collaborating with <strong>students, private sectors, and public institutions</strong> to raise awareness about sustainability.</li>
              <li>✅ Expanded my expertise in <strong>cybersecurity, AI, and sustainable development</strong>, applying these skills in real-world projects.</li>
              <li>✅ Continuously learning and growing by attending <strong>hackathons, leadership programs, and tech conferences</strong>.</li>
            </ul>
          </div>
       </div>
      </div>
    </section>
  );
};

// **Achievement Card Component**
const AchievementCard = ({ achievement }) => (
  <div className="card border-3 shadow-lg text-center mx-auto" style={{ width: "38rem", borderRadius: "15px" }}>
    <div className="border border-4 border-primary rounded-3 p-3">
      <div className="position-relative">
        <img src={achievement.image} alt={achievement.title} className="card-img-top rounded-top" style={{ height: "320px", objectFit: "cover" }} />
      </div>
      <div className="card-body">
        <h4 className="card-title fw-bold text-dark">{achievement.title}</h4>
        <p className="text-muted mb-2">{achievement.date}</p>
        <p className="card-text text-secondary">{achievement.description1}</p>
        <p className="card-text text-secondary">{achievement.description2}</p>
        <p className="fw-medium text-dark small mt-3">📍 Location: <span className="fw-bold">{achievement.location}</span></p>
      </div>
    </div>
  </div>
);

export default Achievements;
