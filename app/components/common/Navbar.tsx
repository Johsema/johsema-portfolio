import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          &lt;Johsema <span className={styles.barraName}>/</span>&gt;
        </Link>
        <nav>
          <ul className={styles.navLinks}>
            <li><Link href="/" className={styles.link}>Home</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}