import styles from './ExpertiseCard.module.css';

export interface ExpertiseProps {
    videoSrc: string;
    title?: string;
}

export default function ExpertiseCard({ videoSrc, title }: ExpertiseProps) {
    return (
        <div id="examples_tech" className={styles.cardContainer}>
            <div className={styles.videoWrapper}>
                <video
                    src={videoSrc}
                    controls
                    playsInline
                    className={styles.videoElement}
                />
            </div>
            {title && <p className={styles.videoTitle}>{title}</p>}
        </div>
    );
}