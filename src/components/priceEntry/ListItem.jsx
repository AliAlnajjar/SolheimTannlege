import styles from '../../styles/priceEntry/ListItem.module.css';
export default function ListItem(list) {
  return (
    <div className={styles.item}>
      <div className={styles.text}>
        <div className={styles.title}>{list.list.title}</div>
        <div className={styles.desc}>{list.list.desc}</div>
      </div>
      <div className={styles.price}>{list.list.price}</div>
    </div>
  );
}
