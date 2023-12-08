import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';

import WorkExperience from './pages/WorkExperience';
import './index.css';
import './tailwind.css';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/workexperience" element={<WorkExperience />} />
          {/* Add more Route components for other sections */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
