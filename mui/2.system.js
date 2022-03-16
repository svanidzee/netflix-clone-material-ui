import * as React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

export default function Example() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
      >
        <Box sx={{ color: "text.secondary" }}>Sessions</Box>
        <Box
          sx={(theme) => ({
            ...theme.typography.body,
            color: theme.palette.primary.main,
          })}
        />

        <Box
          sx={[
            { mr: 2, color: "red" },
            (theme) => ({
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }),
          ]}
        />

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          hide on screens smaller than md
        </Box>
      </Box>
    </ThemeProvider>
  );
}
