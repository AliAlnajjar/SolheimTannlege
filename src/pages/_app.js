import "../styles/globals.css";
import Layout from "../components/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      light: "#e9f8f4",
      main: "#007272",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1.3rem",
          height: "3.8rem",
          borderRadius: "1.5rem",
        },
      },
    },
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple!
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1.2rem",
          // height: '3.8rem',
          borderRadius: "1.2rem",
          backgroundColor: "#f7fcfa",
          color: "#033049",
        },
      },
    },
  },
});

function App({ Component, pageProps }) {
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}
export default App;
