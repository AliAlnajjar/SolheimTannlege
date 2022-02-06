import styles from '../styles/Layout.module.css';
import Link from 'next/link';

import CallButton from './CallButton';
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logobar}>
        <ul className={styles.logo}>
          <li>
            <Link href='/'>
              <a>
                <img src='/logo.svg' height={48} width={48} />
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>
                <h1>Solheim tannklinikk</h1>
              </a>
            </Link>
          </li>
        </ul>

        <ul className={styles.language}>
          <li>
            <Link href='tel:4797326724'>
              <a>
                <CallButton />
              </a>
            </Link>
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
            <Link href='/tjenester'>
              <a> Tjenester</a>
            </Link>
          </li>
          <li>
            <Link href='/priser'>
              <a> Priser</a>
            </Link>
          </li>
          <li>
            <Link href='/finn-oss'>
              <a> Finn oss</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
