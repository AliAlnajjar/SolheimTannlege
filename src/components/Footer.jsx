import styles from '../styles/Layout.module.css';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li className={styles.logo}>
          <h1>SolheimTannklinikk</h1>
        </li>
        <li>
          Åpningstider
          <p>mand-fre: 09:00 - 19:00 </p>
          <p>lørdag : 09:00 - 19:00 </p>
          <p>søndag : 09:00 - 19:00 </p>
        </li>
        <li>
          Adresse:
          <p>Fjøsangervien 39</p>
        </li>
      </ul>
    </footer>
  );
}
