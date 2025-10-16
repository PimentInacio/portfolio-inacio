
import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import type { Project } from './types';
import { PROJECTS } from './constants';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <Header />
      <main className="container mx-auto px-6">
        <HomeSection onContactClick={() => setContactModalOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection projects={PROJECTS} onProjectClick={setSelectedProject} />
        <ContactSection />
      </main>
      <Footer />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </>
  );
}

export default App;
