import { useLanguage } from '@/app/context/LanguageContext';
import { CONTENT } from '@/app/components/data/ContentData';
import styles from './TechStack.module.css'; // o importa desde app/page.module.css según tu preferencia

const technologies = [
    "Unboxings & First Impressions",
    "Product Reviews",
    "Sketches de Comedia",
    "Problem-Solution Ads",
];

export default function TechStack() {
  const { language } = useLanguage();
  const { techStack } = CONTENT[language] || CONTENT['es'];

    return (
      <section className={styles.techSection}>
        <h2 className={styles.sectionTitle}>{techStack.sectionTitle}</h2>

        <div className={styles.tickerContainer}>
          <div className={styles.tickerTrack}>
            {/* Primera lista */}
            {techStack.technologies.map((tech, index) => (
              <span key={`tech-1-${index}`} className={styles.techBadge}>
                {tech}
              </span>
            ))}
            {/* Duplicamos la lista para lograr el bucle infinito perfecto */}
            {techStack.technologies.map((tech, index) => (
              <span key={`tech-2-${index}`} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
}