import styles from './ProjectCard.module.css';

// 1. Definimos la interfaz de las props con TypeScript
export interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    demoUrl?: string;
    repoUrl?: string;
}

export default function ProjectCard({
    title,
    description,
    tags,
    demoUrl = '#',
    repoUrl = '#',
}: ProjectProps) {
    return (
        <div className={styles.projectCard}>
        <div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
            
            <div className={styles.projectTags}>
            {tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                {tag}
                </span>
            ))}
            </div>
        </div>

        <div className={styles.projectLinks}>
            {repoUrl && (
            <a 
                href={repoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.projectLink}
            >
                Go to Profile →
            </a>
            )}
        </div>
        </div>
    );
}