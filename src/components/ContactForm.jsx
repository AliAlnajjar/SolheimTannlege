import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../styles/ContactForm.module.css";
import SendIcon from "@mui/icons-material/Send";
export default function ContactForm() {

  // 




  return (
    <div className={styles.form}>
      <h1> Send melding</h1>

      <TextField id="navn" label="For- og etternavn" variant="outlined" />
      <TextField id="telefon" label="Telefon" variant="outlined" />
      <TextField id="Epost" label="Epost" variant="outlined" />
      <TextField
        id="Melding"
        label="Melding"
        variant="outlined"
        multiline
        minRows={4}
      />

      <Button variant="contained" endIcon={<SendIcon />}
        onClick={() => {
          // sendMail();
          location.href = '/api/sendEmail'

        }}
      >
        Send inn
      </Button>
    </div>
  );
}
