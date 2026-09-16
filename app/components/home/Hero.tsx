import Image from 'next/image';
import styles from './Hero.module.css'; // O importa desde tus estilos globales/locales

import { useLanguage } from '@/app/context/LanguageContext';
import { CONTENT } from '@/app/components/data/ContentData';

export default function Hero() {
    const { language } = useLanguage();
    const { hero } = CONTENT[language] || CONTENT['es'];

    return (
        <section className={styles.hero}>
        <div className={styles.heroContent}>
            <h1 className={styles.title}>
            {hero.greeting} <span className={styles.highlight}>{hero.name}</span>
            </h1>
            <h2 className={styles.role}>{hero.role}</h2>
            <p className={styles.bio}>{hero.bio1}</p>
            
            <div className={styles.heroButtons}>
            <a href="#contact" className={styles.btnPrimary}>
                {hero.btnWork}
            </a>
            <a href="#examples_tech" className={styles.btnSecondary}>
                {hero.btnExamples}
            </a>
            </div>
        </div>

        <div className={styles.videoWrapper}>
            <video
            src={hero.introVideo}
            controls
            muted
            loop
            playsInline
            // Propiedades adicionales para navegadores móviles e In-App Browsers:
            webkit-playsinline="true"
            x5-playsinline="true"
            preload="metadata"
            className={styles.introVideo}
            />
        </div>
        </section>
    );
}