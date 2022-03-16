import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const defaultTheme = createTheme();

const theme = createTheme({
  components: {
    // global styles
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          padding: 0,
          margin: 0,
          fontFamily: "Roboto Slab",
          // fontFamily: "'M PLUS Rounded 1c'",
          backgroundColor: "#141414",
          color: "white",
          overflowX: "hidden",
        },
        WebkitScrollbar: {
          width: "0px",
          background: "transparent",
        },
        a: {
          color: "inherit",
          textDecoration: "none",
          outline: "0px",
        },
      },
    },
    MuiButton: {
      // default
      styleOverrides: {
        root: {
          // fontSize: "1rem",
          color: "red",
        },
      },

      // variant
      variants: [
        {
          props: { variant: "dashed" },
          style: {
            textTransform: "none",
            border: `2px dashed ${defaultTheme.palette.primary.main}`,
            color: defaultTheme.palette.primary.main,
          },
        },
      ],
    },
  },
  palette: {
    primary: {
      main: red.A400,
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    button: {
      fontSize: "1rem",
    },
  },
});

export default theme;
