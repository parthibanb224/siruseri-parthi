import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";

const myFont = localFont({ src: "../public/assets/IBMPlexSans-Medium.ttf" });

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: [myFont.style.fontFamily, "sans-serif"].join(","),
    },
    h1: {
      fontFamily: [myFont.style.fontFamily, "sans-serif"].join(","),
    },
    p: {
      fontFamily: [myFont.style.fontFamily, "sans-serif"].join(","),
    },
    h3: {
      fontFamily: [myFont.style.fontFamily, "sans-serif"].join(","),
    },
  },
});

export default theme;
