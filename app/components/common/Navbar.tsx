import Link from 'next/link';
import styles from './Navbar.module.css';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          &lt;Johsema <span className={styles.barraName}>/</span>&gt;
        </Link>
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <button 
        onClick={toggleLanguage} 
        className={styles.langBtn}
        aria-label="Cambiar idioma"
      >
        <span className={styles.flag}>
          {language === 'es' ? '🇪🇸' : '🇺🇸'}
        </span>
        <span className={styles.langText}>
          {language === 'es' ? 'ES' : 'EN'}
        </span>
      </button>
            </li>
            <li><Link href="/" className={styles.link}>Home</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}