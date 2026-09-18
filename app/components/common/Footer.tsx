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
              href="https://tiktok.com/@josemariaugc" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.link}
            >
              José María UGC
            </a>
          </li>
          
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
              JohsemaTech
            </a>
          </li>
          
        </ul>
      </div>
    </footer>
  );
}