import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";

const myFont = localFont({ src: "../public/assets/IBMPlexSans-Medium.ttf" });

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ["sans-serif"].join(","),
    },
    h1: {
      fontFamily: ["sans-serif"].join(","),
    },
    p: {
      fontFamily: ["sans-serif"].join(","),
    },
    h3: {
      fontFamily: ["sans-serif"].join(","),
    },
  },
});

export default theme;
