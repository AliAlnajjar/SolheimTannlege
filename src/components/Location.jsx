import styles from '../styles/Location.module.css';
import Grid from '@mui/material/Grid';

export default function Location() {
  return (
    <div id='finn-oss' className={styles.locationInfo}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Grid item xs={12} className={styles.opningHours}>
            <h3>Åpningstider</h3>
            <p> Mandag-Fredag : 09:30 - 20:00</p>
            <p>
              {' '}
              Lørdag &nbsp;:
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11:00
              - 20:00
            </p>
            <p>
              {' '}
              Søndag :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Kun
              akutt
            </p>
          </Grid>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container Direction='row' xs={12} md={12}>
            <Grid item xs={12} md={12}>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1972.2161207447966!2d5.336902416115316!3d60.37558963373633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf9c1f2247e9b%3A0xf62e421cb6b5d875!2sSolheim%20Tannlegevakt!5e0!3m2!1sen!2sno!4v1641621288609!5m2!1sen!2sno'
                width='100%'
                height='380'
                // style='border:0;'
                allowFullScreen=''
                loading='lazy'
              ></iframe>
            </Grid>
            <Grid item xs={12} md={4}>
              Adresse
              <p>Fjøsangerveien 39, 5054 Bergen</p>
            </Grid>
            <Grid item xs={12} md={4}>
              Parkering
              <p>3 Parkeringsplasser utenfor klinkken </p>
            </Grid>
            <Grid item xs={12} md={4}>
              Transport
              <p>Byban (Danmarksplass bybanestopp)</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

{
  /* <Grid container Direction='row' xs={12} md={9}>
<Grid item xs={12} md={3}></Grid>
<Grid item xs={12} md={3}>
  Adresse
  <p>Fjøsangerveien 39, 5054 Bergen</p>
</Grid>
<Grid item xs={12} md={3}>
  Parkering
  <p>3 Parkeringsplasser utenfor klinkken </p>
</Grid>
<Grid item xs={12} md={3}>
  Transport
  <p>Byban (Danmarksplass bybanestopp)</p>
</Grid>
</Grid> */
}
