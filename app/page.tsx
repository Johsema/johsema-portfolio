'use client';
import Link from 'next/link';

import { useLanguage } from './context/LanguageContext';
import { CONTENT } from './components/data/ContentData';

import Navbar from './components/common/Navbar';
import styles from './page.module.css';
import Hero from './components/home/Hero';
import TechStack from './components/home/TechStack';
import ExpertiseSection from './components/home/ExpertiseSection';
import FeaturedProjects from './components/home/FeaturedProjects';
import ContactSection from './components/home/ContactSection';

export default function Home() {
  const { language } = useLanguage();
  const content = CONTENT[language]; // Obtiene 'es' o 'en'
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Presentación Principal */}
        <Hero />
        {/* Stack Tecnológico */}
        <TechStack />

        {/* Seccion 1: Contenido Tech */}
        <ExpertiseSection 
          sectionTitle={content.techSectionTitle}
          items={content.techVideos} 
          />
        
        <FeaturedProjects />
        
        <ContactSection />
      </main>
    </>
  );
}