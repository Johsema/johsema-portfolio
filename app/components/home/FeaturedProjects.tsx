import ProjectCard, { ProjectProps } from './ProjectCard';
import styles from './FeaturedProjects.module.css';

// 2. Arreglo con la información de los proyectos (fácil de editar o ampliar)
const PROJECTS_DATA: ProjectProps[] = [
    {
        title: '📱 JohsemaTech / Tech Videos',
        description: 'TikTok channel featuring tech reviews and unboxing videos.',
        tags: ['tech_content', 'tiktok', 'review', 'unboxing'],
        repoUrl: 'https://www.tiktok.com/@johsematech',
    },
    {
        title: '🍇 Lic. Parfum / Parfum Videos',
        description: 'A space where I post reviews and analyses of perfumes and personal care products.',
        tags: ['parfum', 'personal_care', 'catalog', 'review',],
        repoUrl: 'https://www.tiktok.com/@lic.parfum',
    },

    {
        title: '📸 Johsema / Vlogs',
        description: 'A space where I publish my personal blog posts, adapting them with a cinematic touch, comedy, and whatever else comes to mind.',
        tags: ['vlogs', 'comedia', 'films', 'storytelling'],
        repoUrl: 'https://www.tiktok.com/@johsema',
    },
];

export default function FeaturedProjects() {
    return (
        <section id="projects" className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>Social Medias</h2>
        <div className={styles.grid}>
            {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={index} {...project} />
            ))}
        </div>
        </section>
    );
}