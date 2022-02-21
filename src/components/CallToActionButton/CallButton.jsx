import styles from "./CallButton.module.css";
import Image from "next/image";
export default function CallButton() {
  return (
    <div className={styles.button}>
      <Image
        src="/call_black_24dp.svg"
        height={30}
        width={30}
        className={styles.image}
      />
      97 32 67 24
    </div>
  );
}
