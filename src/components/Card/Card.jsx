import styles from "./Card.module.scss";
export default function Card({ title, p, img }) {
  return (
    <>
      <div className={styles.card}>
        <div div className={styles.text}>
          <h1> {title}</h1>
          <p>{p}</p>
        </div>
        <div className={styles.image}>
          <img className={styles.img} src={img} alt="bkg" />
        </div>
      </div>
    </>
  );
}
