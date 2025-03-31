import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Project from './pages/Project';
import Objectives from './pages/Objectives';
import Team from './pages/Team';
import Activities from './pages/Activities';
import News from './pages/News';

const App = () => {
  return (
    <Router basename="/cultureforheritage">
      <div className="min-h-screen bg-gradient-to-br from-primary-100 via-secondary-200 to-primary-200">
        <div className="fixed inset-0 bg-gradient-to-b from-white/20 to-white/40 backdrop-blur-sm" />
        <div className="relative">
          <Navbar />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24 sm:pt-28">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/40 backdrop-blur-md rounded-2xl shadow-soft border border-white/40 p-6 sm:p-8">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/project" element={<Project />} />
                  <Route path="/objectives" element={<Objectives />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/activities" element={<Activities />} />
                  <Route path="/news" element={<News />} />
                </Routes>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
