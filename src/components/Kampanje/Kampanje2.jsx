import styles from "./Kampanje.module.scss";
export default function Kampanje() {
  return (
    <>
      <div className={styles.container2}>
        <div className={styles.kampanjeCard}>
          <h1>
            Komplett tannlegeundersøkelse til kun &nbsp;
            <span className={styles.flashy}>490,-</span>
          </h1>
          <p>
            Komplett tannlegeundersøkelse med rens, fjerning av tannstein,
            røntgenbilder og AirFlow behandling til kun 490,-&nbsp;
            <span className={styles.underlined}>(total verdi kr 1450,-)</span>
          </p>
          <p>Inkludert i undersøkelsen:</p>
          <ul>
            <li>
              Vi undersøker tennene og tannkjøttet ditt grundig for alle synlige
              skader og sykdommer.
            </li>
            <li>
              Sammen går vi gjennom funnene fra undersøkelsen slik at du får
              full oversikt over din tannhelse. Vi gir deg råd til hvordan du
              kan opprettholde eller oppnå god tannhelse og et pent smil!
            </li>
            <li>
              Vi renser tennene dine med Airflow som gir tennene en glatt,
              polert følelse, fjerner tannstein og misfargning, slik at du får
              et enda finere smil.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
