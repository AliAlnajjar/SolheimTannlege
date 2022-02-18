import styles from "../styles/Layout.module.css";
import { Grid } from "@mui/material";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Grid container spacing={1} justifyContent="center" alignItems="start">
        <Grid item xs={12} md={5}>
          <h1>Solheim tannklinikk</h1>
        </Grid>
        <Grid item xs={12} md={4}>
          <h4>Åpningstider:</h4>
          <p>man-fre&nbsp;: 09:30 - 20:00 </p>
          <p> lørdag &nbsp;&nbsp;&nbsp;:&nbsp; 11:00 &nbsp;- 20:00 </p>
          <p> søndag &nbsp;: &nbsp;Kun akutt </p>
        </Grid>

        <Grid item xs={12} md={3}>
          <h4>Adresse:</h4>
          <p>Fjøsangerveien 39</p>
        </Grid>
      </Grid>
      {/* <ul>
        <li className={styles.logo}>
        </li>
        <li>
          
        </li>
        <li>
          
        </li>
      </ul> */}
    </footer>
  );
}
