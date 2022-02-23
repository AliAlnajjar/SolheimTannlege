import styles from "../styles/Home.module.css";
import Hero from "../components/Hero/Hero";
import ContactForm from "../components/ContactForm";
import ContactChannels from "../components/ContactChannels/ContactChannels";
import Grid from "@mui/material/Grid";
import PriceEntry from "../components/PriceEntry/PriceEntry";
import priceList from "../data/PriceEntries.json";
import Priserstyles from "../styles/priser.module.css";
import Bestilstyles from "../styles/ContactForm.module.css";
import Location from "../components/Location";
import Card from "../components/Card/Card";
import Kampanje from "../components/Kampanje/Kampanje";
import Kampanje2 from "../components/Kampanje/Kampanje2";

export default function Home() {
  return (
    <>
      <Hero />
      <Kampanje />
      <Kampanje2 />
      <div className={styles.cardContainer}>
        <Card
          title="Behandling av tannkjøttsykdom (kronisk periodontitt)"
          p="Periodonti er læren om strukturene som omgir tennene og fester dem i kjevebeinet, og om årsaken til/behandling av sykdomsutvikling i dette vevet. Mens gingivitt er betegnelsen på en mer overfladisk tannkjøttsbetennelse, er periodontitt derimot en betennelsestilstand i selve festeapparatet. Tilstanden er forårsaket av bakterier som- kombinert med bl.a. genetiske og immunologiske faktorer- starter en nedbrytningsprosess i støttevevet rundt tennene. Ubehandlet periodontitt vil med andre ord føre til at tenner løsner i takt med at kjevebeinet gradvis resorberes, og er en av de vanligste årsakene til at tenner går tapt.Behandlingen tar sikte på å stanse festetapet, og utføres ved å fjerne tannstein og bakterier fra tannens overflate både over og under tannkjøttsnivå. En forutsetning for vellykket behandlingsresultat er pasientens egen hjemmehygiene og bruk av hjelpemidler for rengjøring av tennene (tanntråd, mellomromsbørster etc.). Det vil bli gitt grundig og individtilpasset informasjon til den enkelte pasient ved hver behandlingsseanse"
          img="tannrens.jpg"
        />

        <Card
          title="Plastfylling"
          p="Karies i tenner og knekte tenner restaureres med plast materialer som er sterke og estetisk tilfredsstillende. Det er størrelse på karies eller fraktur som avgjør størrelsen på plastfyllinger. Den vanligste årsaken til at en tann bør restaureres med en fylling er karies (hull) i tennene. Når et hull har blitt stort nok til at det har brutt gjennom det ytterste laget på tennene (emaljen), så kan det ikke lenger stoppes ved hjelp av fluor og god munnhygiene. Man må da stoppe hullet ved hjelp av fyllingsterapi, før kariesbakteriene skader nervene som befinner seg innerst i tennene. Dette gjør man ved å borre i tannen og fjerne bakteriene, før man til slutt forsegler kaviteten med en tannfarget fylling. Slik gjenopprettes tannens opprinnelige form og funksjon, og hullet hindres i å vokse seg større.Vi kan i andre tilfeller legge en fylling for å reparere en tann som er knekt, for eksempel på grunn av et slag eller en ulykke, eller vi kan legge fylling av mer estetiske årsaker som å endre tannens form. Vi kan også benytte fyllingsterapi til å bygge opp tenner som er skadet pga. tannslitasje som ved alvorlig tanngnissing (attrisjon) eller syreskader (erosjon)"
          img="Plastfylling.jpg"
        />

        <Card
          title="Rotfylling"
          p="Dersom det er betennelse eller infeksjon i nerven i en tann, er det nødvendig med rotfylling.En rotfylling gjøres i tilfeller der nerven i tannen enten er så skadet at den er i ferd med å dø (irreversibel pulpitt), eller dersom den allerede har dødd (pulpanekrose). Oftest skjer dette på grunn av dype kariesangrep (hull), der bakteriene har fått nå så langt inn i tannen at nerven ikke lenger klarer påkjenningen den har blitt utsatt for over lang tid. En skadet eller død nerve kan også være forårsaket av en ulykke- f.eks. en fraktur som når inn til nerven, eller et kraftig slag mot tannen som forstyrrer blodsirkulasjonen til tannen. Hensikten med rotbehandling er å rense ut og fjerne bløtvevet (nerver/blodkar) inne i tannens rotkanal(er), for så å deretter fylle hulrommet med en rotfylling. På denne måten får man enten hindret bakteriene i å etablere seg her, eller fjernet bakteriene i en allerede infisert tann. Slik forebygges eller behandles utviklingen av apikal periodontitt- en bakterieinfeksjon i kjevebeinet rundt rotspissen på en tann. I sistnevnte tilfelle må behandlingen gjøres over minimum to besøk. Rotbehandling er en metode som gjør at tannen kan bevares framfor å måtte fjernes."
          img="Rotfylling.jpeg"
        />

        <Card
          title="Tanntrekking"
          p="I hovedsak fjernes visdomstenner som ligger feil i kjeven. Dette for å forhindre skade på nabotenner. I tilfeller med stor karies i en tann som ikke lar seg repareres på noen måte, må tannen fjernes.Dersom en tann har så dårlig prognose og/eller er så skadet at den ikke kan behandles med vellykket resultat, så kan fjerning av tannen være et alternativ. Dype kariesangrep og persisterende infeksjoner rundt rotspissen, eller tilbakevendende betennelse i tannkjøttet rundt f.eks. en visdomstann, kan være eksempler på en slik indikasjon. Fjerning av tannen vil da kunne utføres for å forebygge videre problemer, enten i form av smerter og/eller spredning av infeksjon med opphav i tannen. Vi tilbyr både vanlig tannekstraksjon og kirurgisk fjerning av tenner. Hvilke alternativ som er best blir nøye informert om i forkant av eventuell behandling, etter nøye klinisk og røntgenologisk undesøkelse og diagnostikk."
          img="Tanntrekking.jpg"
        />
        <Card
          title="Tannbleking"
          p="Vi anbefaler alle våre pasienter som skal bleke tennene sine å få utført en full undersøkelse inkl. rens og røntgenbilder i forkant av tannblekingen. Dette er for å avdekke eventuelle hull, defekte fyllinger, betennelse i tannkjøtt- eller andre faktorer som gjør at tannbleking bør avventes. På denne måten reduseres sjansen for å gjøre skade på blant annet nervene inni tannen. Man får på en slik forundersøkelse også kartlagt hvor man ligger på fargeskalaen, hvilket resultat man kan forvente å oppnå, og informasjon dersom noe spesielt i den enkeltes tannsett kan påvirke resultatet. Dersom forutsetningene for at bleking kan gjennomføres er oppfylt tar man avtrykk til fremstilling av blekeskinner til både over- og underkjeven. Blekeskinnene får du med deg hjem ved neste besøk, sammen med blekemiddel. Selve blekeprosessen gjennomfører pasienten selv hjemme om natten. Resultatet av tannblekingen holder som regel i 2-3 år, men er helt avhengig av hvor mye misfargende stoffer man inntar. I senere år ved ønske om ny runde tannbleking kan man benytte seg av de samme blekeskinnene bare med nytt blekemiddel. Vi understreker likevel at vi anbefaler å få utført en tannlegeundersøkelse i forkant av hver blekeperiode"
          img="Tannbleking.jpg"
        />
      </div>
      <div className={Bestilstyles.container}>
        <Grid id="bestil-time" container spacing={2}>
          <Grid item xs={12} md={4}>
            <ContactChannels />
          </Grid>
          <Grid item xs={12} md={8}>
            <ContactForm />
          </Grid>
        </Grid>
      </div>

      <Location />
      <div id="priser" className={Priserstyles.priser}>
        <h1>Våre Priser </h1>
        {priceList.map((Entry) => (
          <PriceEntry entry={Entry} key={Entry.id}></PriceEntry>
        ))}
      </div>
    </>
  );
}
