import ContactForm from '../components/ContactForm';
import ContactChannels from '../components/ContactChannels';
import Grid from '@mui/material/Grid';

export default function BestilTime() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ContactChannels />
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </>
  );
}
