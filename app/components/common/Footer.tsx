import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.copyright}>
          © {currentYear} — Johsema, built with React, Next.js & PNPM.
        </p>

        <ul className={styles.links}>
          <li>
            <a 
              href="https://tiktok.com/@johsema" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.link}
            >
              Johsema
            </a>
          </li>

          <li>
            <a 
              href="https://tiktok.com/@johsematech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.link}
            >
              Johsematech
            </a>
          </li>
          
          <li>
            <a 
              href="https://tiktok.com/@lic.parfum" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.link}
            >
              Lic. Parfum
            </a>
          </li>
          
        </ul>
      </div>
    </footer>
  );
}