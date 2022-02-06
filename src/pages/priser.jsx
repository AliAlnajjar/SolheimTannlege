import PriceEntry from '../components/priceEntry/PriceEntry';
import priceList from '../data/PriceEntries.json';
import styles from '../styles/priser.module.css';
export default function Priser() {
  return (
    <>
      <h1>Våre Priser </h1>
      <div className={styles.priser}>
        {priceList.map((Entry) => (
          <PriceEntry entry={Entry} key={Entry.id}></PriceEntry>
        ))}
      </div>
    </>
  );
}
