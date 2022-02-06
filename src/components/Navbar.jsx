import styles from '../styles/Layout.module.css';
import Link from 'next/link';

import Button from './Button';
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logobar}>
        <ul className={styles.logo}>
          <li>
            <img src='/logo.svg' height={48} width={48} />
          </li>
          <li>
            <h1>Solheim tannklinikk</h1>
          </li>
        </ul>

        <ul className={styles.language}>
          <li>
            <Button />
          </li>
        </ul>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href='/bestil-time'>
              <a> Bestil time</a>
            </Link>
          </li>
          <li>
            <Link href='/priser'>
              <a> Priser</a>
            </Link>
          </li>
          <li>
            <Link href='/tjenester'>
              <a> Tjenester</a>
            </Link>
          </li>
          <li>
            <Link href='/kontakt-oss'>
              <a> Kontakt oss</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
