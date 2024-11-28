import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ThankYouPage() {
  useEffect(() => {
    const userName = localStorage.getItem("userName");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");
    console.log(userName, email, phone);

    if (!window.dataLayer) {
      window.dataLayer = [];
    }
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "Google Ads User-provided Data Event",
        enhanced_conversion_data: {
          email,
          phone,
        },
      });
      // localStorage.removeItem("userEmail");
    }
  }, []);
  console.log("deployed thank you page oct 10 2");

  return (
    <Grid
      container
      xs={12}
      sx={{
        justifyContent: "center",
      }}
    >
      <Grid item xs={8} sx={{ marginTop: "12%" }}>
        <Typography
          component="h1"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 0",
            fontSize: "36px",
            fontWeight: "bold",
            color: "#339966",
          }}
        >
          Thank you!
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography
          component="h2"
          sx={{
            textAlign: "center",
            padding: "10px 0",
            fontSize: "14px",
            color: "#333",
          }}
        >
          Thank You For Your Interest in Urbanrise The World Of Joy! Very soon
          one of our associates will get in touch with you and make your dream
          home come true in no time!
        </Typography>
      </Grid>

      <Grid container xs={12} sx={{}} justifyContent="center">
        <Link href="https://urbanrise.in/">Visit Website</Link>
      </Grid>
    </Grid>
  );
}
