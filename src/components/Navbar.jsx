import styles from '../styles/Layout.module.css';
import Image from 'next/image';
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
            <Image src='/no.svg' height={20} width={30} />
          </li>
          <li>
            <Image src='/Eng.svg' height={30} width={30} />
          </li>
          <li>
            <Image src='/Ar.svg' height={30} width={30} />
          </li>
        </ul>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li> Bestil time</li>
          <li> priser</li>
          <li> Tjenester</li>
          <li> åpningstider</li>
          <li> finn oss</li>
        </ul>
      </nav>
    </header>
  );
}
