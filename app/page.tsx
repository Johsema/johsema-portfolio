import Link from 'next/link';
import Navbar from './components/common/Navbar';
import styles from './page.module.css';
import Hero from './components/home/Hero';
import TechStack from './components/home/TechStack';
import ExpertiseSection from './components/home/ExpertiseSection';
import FeaturedProjects from './components/home/FeaturedProjects';
import ContactSection from './components/home/ContactSection';

import { TECH_VIDEOS, BEAUTY_VIDEOS } from './components/data/ContentData';

export default function Home() {
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
          sectionTitle="Tech & Unboxings" 
          items={TECH_VIDEOS} 
          />

        {/* Seccion 2: Contenido de Belleza */}
        <ExpertiseSection 
          sectionTitle="Parfums & Personal Care" 
          items={BEAUTY_VIDEOS} 
        />
        
        <FeaturedProjects />
        
        <ContactSection />
      </main>
    </>
  );
}