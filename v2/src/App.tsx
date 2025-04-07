import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import GraphicsArts from './pages/GraphicsArts';
import InteriorCrafts from './pages/InteriorCrafts';
import Technology from './pages/Technology';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen pt-16 md:pt-20">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <GraphicsArts />
              <InteriorCrafts />
              <Technology />
              <Contact />
            </>
          } />
          <Route path="/graphics-arts" element={<GraphicsArts />} />
          <Route path="/interior-crafts" element={<InteriorCrafts />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
