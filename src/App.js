import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImagePreview from './components/ImagePreview';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [previewImage, setPreviewImage] = useState(null);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
      <ImagePreview previewImage={previewImage} setPreviewImage={setPreviewImage} />
      <Navigation activeSection={activeSection} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <Projects setPreviewImage={setPreviewImage} />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;