import styles from "../styles/Home.module.css";
import Hero from "../components/Hero/Hero";
import ContactForm from "../components/ContactForm";
import ContactChannels from "../components/ContactChannels/ContactChannels";
import Grid from "@mui/material/Grid";
import PriceEntry from "../components/PriceEntry/PriceEntry";
import priceList from "../data/PriceEntries.json";
import Priserstyles from "../styles/priser.module.css";
import Location from "../components/Location";
import Card from "../components/Card/Card";

// import { useState } from "react";
// import Script from "next/script";

export default function Home() {
  // const [stripe, setStripe] = useState(null);

  return (
    <>
      <Hero />
      <Card />
      <Grid id="bestil-time" container spacing={2}>
        <Grid item xs={12} md={6}>
          <ContactChannels />
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactForm />
        </Grid>
      </Grid>

      <Location />
      <div id="priser" className={Priserstyles.priser}>
        <h1>Våre Priser </h1>
        {priceList.map((Entry) => (
          <PriceEntry entry={Entry} key={Entry.id}></PriceEntry>
        ))}
      </div>

      {/* <Script
        id="google-js"
        src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"
        onLoad={() => {}}
      /> */}
    </>
  );
}
