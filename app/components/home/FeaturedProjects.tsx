import ProjectCard, { ProjectProps } from './ProjectCard';
import styles from './FeaturedProjects.module.css';
import { useLanguage } from '@/app/context/LanguageContext';
import { CONTENT } from '@/app/components/data/ContentData';

export default function FeaturedProjects() {
    const { language } = useLanguage();
    const { featuredProjects } = CONTENT[language] || CONTENT['es'];
    return (
        <section id="projects" className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>{featuredProjects.sectionTitle}</h2>
        <div className={styles.grid}>
            {featuredProjects.projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
            ))}
        </div>
        </section>
    );
}