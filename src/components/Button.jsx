import styles from '../styles/Button.module.css';
import Image from 'next/image';
export default function Button() {
  return (
    <div>
      <button className={styles.button}>
        <Image
          src='/call_black_24dp.svg'
          height={30}
          width={30}
          className={styles.image}
        />
        97 32 67 24
      </button>
    </div>
  );
}
