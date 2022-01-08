import styles from '../styles/Home.module.css';
import Location from '../components/Location';
export default function Home() {
  return (
    <>
      <div className={styles.bkg}>
        <div className={styles.images}>
          <img className={styles.img1} src='/bkg1.jpg' />
          <img className={styles.img2} src='/bkg2.jpeg' />
          <img className={styles.img3} src='/bkg3.jpg' />
        </div>

        <div div className={styles.text}>
          <h1>Bestill time </h1>
          <p>
            Outstanding dental services provided by a top-flight dentist in an
            excellent facility with state of the art equipment, friendly,
            welcoming and capable staff who are all truly
          </p>
        </div>
      </div>
    </>
  );
}
