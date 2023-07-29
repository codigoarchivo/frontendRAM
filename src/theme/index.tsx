import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#73BBC9",
    },
    secondary: {
      main: "#080202",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
