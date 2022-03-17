import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

const theme = createTheme({
  components: {
    // global styles
    MuiCssBaseline: {
      styleOverrides: {
        // body: {
        //   padding: 0,
        //   margin: 0,
        //   fontFamily: "Roboto Slab",
        //   // fontFamily: "'M PLUS Rounded 1c'",
        //   backgroundColor: "#141414",
        //   color: "white",
        //   overflowX: "hidden",
        // },
        // WebkitScrollbar: {
        //   width: "0px",
        //   background: "transparent",
        // },
        // a: {
        //   color: "inherit",
        //   textDecoration: "none",
        //   outline: "0px",
        // },
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
    // white
    primary: {
      light: "rgba(255, 255, 255, 1)",
      main: "rgba(243, 244, 246, 1)",
      dark: "rgb(209, 213, 219)",
    },
    // black
    secondary: {
      light: "rgb(0, 0, 0)",
      main: "#181818",
      dark: "rgba(0, 0, 0, 0.6)",
      contrastText: "rgb(17, 24, 39)",
    },
    // red
    error: {
      light: "rgb(220, 38, 38)",
      main: "rgba(185, 28, 28, 1)",
    },
    // green
    success: {
      main: "rgba(110, 231, 183, 1)",
    },
    // grey
    grey: {
      50: "rgb(119, 119, 119)",
      100: "rgb(156, 163, 175)",
      200: "rgba(42, 42, 42, 0.6)",
    },
    // blue
    info: {
      main: "rgba(75, 85, 99, 1)",
      light: "rgb(55, 65, 81)",
    },
    warning: {
      main: "rgba(0, 0, 0, 0.3)",
      light: "rgba(158, 155, 155, 0.3)",
      dark: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
  },
  typography: {
    button: {
      fontSize: "1rem",
    },
    firstLetter: {
      fontSize: "3.75rem",
      lineHeight: 1,
      color: "rgb(220, 38, 38)",
      fontWeight: 800,
      fontFamily: "Roboto Slab",
    },
    series: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      color: "rgb(156, 163, 175)",
      alignSelf: "center",
      fontFamily: "Roboto Slab",
    },
    title: {
      fontSize: "60px",
      lineHeight: "60px",
      fontWeight: 800,
      color: "rgba(255, 255, 255, 1)",
      WebkitTextStroke: "2px rgb(0, 0, 0)",
      fontFamily: "Roboto Slab",
    },
    subTitle: {
      fontSize: "24px",
      lineHeight: "32px",
      color: "rgba(255, 255, 255, 1)",
      WebkitTextStroke: "1px gray",
      fontFamily: "Roboto Slab",
      fontWeight: 600,
    },
    linkName: {
      color: "rgba(255, 255, 255, 1)",
      fontSize: "1rem",
      lineHeight: "1.25rem",
    },
    username: {
      fontSize: "16px",
      textTransform: "none",
      fontFamily: "Roboto Slab",
      fontWeight: "600",
      lineHeight: "20px",
    },
    logoLink: {
      fontWeight: 500,
      fontSize: "1rem",
      color: "rgba(255, 255, 255, 1)",
    },
    navItems: {
      fontSize: "0.875rem",
      fontSize: "1rem",
      lineHeight: "1.25rem",
      listStyle: "none",
    },
    navItem: {
      fontWeight: "600",
      fontSize: "1rem",
    },
  },
});

export default theme;
