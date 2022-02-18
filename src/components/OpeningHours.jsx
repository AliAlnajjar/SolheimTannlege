import styles from "../styles/OpeningHours.module.css";
import Grid from "@mui/material/Grid";

export default function OpeningHours() {
  return (
    <div className={styles.container}>
      <Grid container justifyContent="center" alignItems="center" spacing={0}>
        <Grid item xs={12} md={3}>
          <Grid item xs={12} md={2}>
            <h1>Åpningstider</h1>
          </Grid>
        </Grid>

        <Grid item xs={12} md={9}>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} md={4}>
              Mandag-Fredag : 09:30 - 20:00
            </Grid>
            <Grid item xs={12} md={4}>
              Lørdag : 11:00 - 20:00
            </Grid>
            <Grid item xs={12} md={4}>
              Søndag : Kun akutt
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
