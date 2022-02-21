import styles from "./Card.module.scss";
export default function Card() {
  return (
    <div className={styles.card}>
      <div div className={styles.text}>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
      <div className={styles.image}>
        <img className={styles.img} src="/info1.jpeg" alt="bkg" />
      </div>
    </div>
  );
}
