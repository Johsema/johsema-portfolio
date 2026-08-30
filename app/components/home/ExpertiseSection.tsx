import ExpertiseCard, { ExpertiseProps } from './ExpertiseCard';
import styles from './ExpertiseSection.module.css';

interface ExpertiseSectionProps {
    sectionTitle: string;
    items: ExpertiseProps[];
}

export default function ExpertiseSection({ sectionTitle, items }: ExpertiseSectionProps) {
    return (
        <section className={styles.areasSection}>
            <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
            <div className={styles.grid}>
                {items.map((item, index) => (
                    <ExpertiseCard key={index} {...item} />
                ))}
            </div>
        </section>
    );
}

