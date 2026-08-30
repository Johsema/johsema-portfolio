import styles from './TechStack.module.css'; // o importa desde app/page.module.css según tu preferencia

const technologies = [
    "Unboxings & First Impressions",
    "Product Reviews",
    "Sketches de Comedia",
    "Problem-Solution Ads",
];

export default function TechStack() {
    return (
        <section className={styles.techSection}>
      <h2 className={styles.sectionTitle}>Types of Videos</h2>

      <div className={styles.tickerContainer}>
        <div className={styles.tickerTrack}>
          {/* Primera lista */}
          {technologies.map((tech, index) => (
            <span key={`tech-1-${index}`} className={styles.techBadge}>
              {tech}
            </span>
          ))}
          {/* Duplicamos la lista para lograr el bucle infinito perfecto */}
          {technologies.map((tech, index) => (
            <span key={`tech-2-${index}`} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
    );
}