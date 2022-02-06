import PriceEntry from '../components/priceEntry/PriceEntry';
import priceList from '../data/PriceEntries.json';
import styles from '../styles/priser.module.css';
export default function Priser() {
  return (
    <>
      <h1>Priser </h1>
      <div className={styles.priser}>
        {priceList.map((entry) => (
          <PriceEntry entry={entry}></PriceEntry>
        ))}
      </div>
    </>
  );
}