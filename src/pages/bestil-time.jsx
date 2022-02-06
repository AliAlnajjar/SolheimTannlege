import ContactForm from '../components/ContactForm';
import ContactChannels from '../components/ContactChannels';
import Grid from '@mui/material/Grid';

export default function BestilTime() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={12} md={5} lg={6}>
          <ContactChannels />
        </Grid>
        <Grid item sm={12} md={7} lg={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </>
  );
}
