import styles from "./Kampanje.module.scss";
export default function Kampanje() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.kampanjeCard}>
          <h1>
            Profesjonell tannbleking til kun{" "}
            <span className={styles.flashy}>1990,-</span>
          </h1>
          <p>
            Vi har nå kampanje på profesjonell tannbleking til kun 1990kr
            <span className={styles.underlined}>(total verdi på 4000kr)</span>
            Inkludert:
          </p>
          <p>Inkludert:</p>
          <ul>
            <li>Blekingskonsultasjon</li>
            <li>Individuelt tilpasset skinne både til under/og overkjeve</li>
            <li>2 refill gelesprøyter</li>
          </ul>
          <p>
            Tilbudet gjelde både nye og gamle pasienter.&nbsp;
            <span className={styles.bold}>Gjelder til 01.04.22</span>
            <br />
            Kontakte oss for mer informasjon . Vi svarer mer enn gjerne på alle
            spørsmål.
          </p>
        </div>
      </div>
    </>
  );
}
