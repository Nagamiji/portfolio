// src/App.jsx
import React from 'react';
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
  return (
    <>
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
    </>
  );
}

export default App;
