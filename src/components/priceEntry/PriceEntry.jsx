import styles from '../../styles/priceEntry/PriceEntry.module.css';
import Header from './Header';
import ListItem from './ListItem';
export default function PriceEntry({ entry }) {
  return (
    <div className={styles.entry}>
      <Header title={entry.title}></Header>
      {entry.list.map((item) => (
        <ListItem list={item}></ListItem>
      ))}
    </div>
  );
}
