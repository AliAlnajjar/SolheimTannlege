import styles from '../styles/Home.module.css';
import Location from '../components/Location';
export default function Home() {
  return (
    <>
      <div className={styles.bkg}>
        <div className={styles.images}>
          <img className={styles.img1} src='/bkg1.jpg' alt='bkg' />
          <img className={styles.img2} src='/bkg2.jpeg' alt='bkg' />
          <img className={styles.img3} src='/bkg3.jpg' alt='bkg' />
        </div>

        <div div className={styles.text}>
          <h1>Bestill time </h1>
        </div>
      </div>
    </>
  );
}
