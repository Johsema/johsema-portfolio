import Image from 'next/image';
import styles from './Hero.module.css'; // O importa desde tus estilos globales/locales

export default function Hero() {
    return (
        <section className={styles.hero}>
        <div className={styles.heroContent}>
            <h1 className={styles.title}>
            Hi, I&apos;m <span className={styles.highlight}>José María</span>
            </h1>
            <h2 className={styles.title2}>
                UGC Creator & Tech Storyteller
            </h2>
            <p className={styles.subtitle}>
            Specializing in tech, gadget reviews, and engaging storytelling. I create content that feels like an authentic recommendation from a tech-savvy friend — not a forced ad — because every video is rooted in real hands-on experience, real routines, and relatable context. </p>
            <p className={styles.subtitle}>Combining tech unboxings with clear narrative and humor, I understand exactly what makes users stop scrolling, watch until the end, and take action. Every video is built on strategy: an irresistible hook, real problem-solving, dynamic pacing, and a CTA that actually converts.</p>
            <div className={styles.heroButtons}>
            <a 
                href="mailto:johsematech@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.btnPrimary}
            >
                📲 Let's Work
            </a>
            <a href="#examples_tech" className={styles.btnSecondary}>
                View UGC Examples
            </a>
            </div>
        </div>
        
        <div className={styles.imageWrapper}>
            <Image 
            src="/Josema.png" 
            alt="Foto de perfil de José María" 
            width={450} 
            height={550} 
            loading="eager"
            className={styles.profileImage} 
            />
            <div className={styles.imageOverlay}></div>
        </div>
        </section>
    );
}