import styles from '../../styles/priceEntry/ListItem.module.css';
export default function ListItem(item) {
  console.log(item.price);

  return (
    <div className={styles.item}>
      <div className={styles.text}>
        <div className={styles.title}>{item.item.title}</div>
        <div className={styles.desc}>{item.item.desc}</div>
      </div>
      <div className={styles.price}>{item.item.price}</div>
    </div>
  );
}
