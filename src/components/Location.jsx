import styles from "../styles/Location.module.css";
import Grid from "@mui/material/Grid";

export default function Location() {
  return (
    <div id="finn-oss" className={styles.locationInfo}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={3}>
          <Grid item xs={12}>
            Adresse
            <p>Fjøsangerveien 39, 5054 Bergen</p>
          </Grid>
          <Grid item xs={12}>
            Parkering
            <p>3 Parkeringsplasser utenfor klinkken </p>
          </Grid>
          <Grid item xs={12}>
            Transport
            <p>Byban (Danmarksplass bybanestopp)</p>
          </Grid>
          <Grid item xs={12}>
            Åpningstider
            <p> Mandag-Fredag : 09:30 - 20:00</p>
            <p> Lørdag : 11:00 - 20:00</p>
            <p> Søndag : Kun akutt</p>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1972.2161207447966!2d5.336902416115316!3d60.37558963373633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf9c1f2247e9b%3A0xf62e421cb6b5d875!2sSolheim%20Tannlegevakt!5e0!3m2!1sen!2sno!4v1641621288609!5m2!1sen!2sno"
            width="100%"
            height="450"
            // style='border:0;'
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Grid>
      </Grid>
    </div>
  );
}
