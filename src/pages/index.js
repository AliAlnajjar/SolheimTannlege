import styles from "../styles/Home.module.css";
// import Location from '../components/Location';
import CallButton from "../components/CallButton";
import Link from "next/Link";
import ContactForm from "../components/ContactForm";
import ContactChannels from "../components/ContactChannels";
import Grid from "@mui/material/Grid";

import PriceEntry from "../components/priceEntry/PriceEntry";
import priceList from "../data/PriceEntries.json";
import Priserstyles from "../styles/priser.module.css";

import Location from "../components/Location";
import OpeningHours from "../components/OpeningHours";

export default function Home() {
  return (
    <>
      <div className={styles.bkg}>
        <div className={styles.images}>
          <img className={styles.img1} src="/bkg1.jpg" alt="bkg" />
          <img className={styles.img2} src="/bkg2.jpeg" alt="bkg" />
          <img className={styles.img3} src="/bkg3.jpg" alt="bkg" />
        </div>

        <div div className={styles.text}>
          <Link href="#bestil-time">
            <a>
              <h1>Bestill time </h1>
            </a>
          </Link>
        </div>
      </div>
      <Grid id="bestil-time" container spacing={2}>
        <Grid item xs={12} md={6}>
          <ContactChannels />
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactForm />
        </Grid>
      </Grid>

      <Location />
      <div id="priser">
        <h1>Våre Priser </h1>
        <div className={Priserstyles.priser}>
          {priceList.map((Entry) => (
            <PriceEntry entry={Entry} key={Entry.id}></PriceEntry>
          ))}
        </div>
      </div>
    </>
  );
}
