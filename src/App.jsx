// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const options = {
      root: null,
      threshold: 0.2, // Section appears when 20% is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

  }, []);

  return (
    // Wrap your App components inside BrowserRouter
    <BrowserRouter>
      <Header />
      <main className="l-main">
        <Home />
        <About />
        <Skills />
        <WorkExperience />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
