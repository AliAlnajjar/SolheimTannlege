import styles from '../styles/OpeningHours.module.css';

export default function OpeningHours() {
  return (
    <div className={styles.container}>
      <h1>Åpningstider</h1>
      <ul>
        <li>Mandag-Fredag : 09:30 - 20:00</li>
        <li>Lørdag : 11:00 - 20:00</li>
        <li>Søndag : Kun akutt!</li>
      </ul>
    </div>
  );
}
