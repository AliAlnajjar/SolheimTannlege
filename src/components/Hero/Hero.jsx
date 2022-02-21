import styles from "./Hero.module.scss";
import Link from "next/Link";
export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.images}>
        <img className={styles.img1} src="/bkg1.jpg" alt="bkg" />
        <img className={styles.img2} src="/bkg2.jpg" alt="bkg" />
      </div>

      <div div className={styles.callToAction}>
        <h1>Profesjonell og trygg tannbehandling</h1>

        <Link href="#bestil-time">
          <a>
            <h2>Bestill time </h2>
          </a>
        </Link>
      </div>
    </div>
  );
}
