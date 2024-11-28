import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PioneersSection from "./Pioneer";

export default function AboutUrbanrise() {
  return (
    <Grid sx={{ minHeight: "80vh", padding: "20px 50px" }}>
      <Box>
        <Typography
          sx={{
            fontSize: "18px",
            marginTop: "20px",
            marginBottom: "20px",
            width: "fit-content",
            // border: "1px solid black",
            padding: " 6px 10px",
            borderRadius: "20px",
            background:
              "linear-gradient(90deg, rgba(21, 100, 53, 1) 0%, rgba(0, 162, 216, 1) 50%, rgba(0, 134, 179, 1) 100%)",
            color: "white",
            fontWeight: "bold",
          }}
        >
          About Urbanrise
        </Typography>

        <Typography
          sx={{
            fontSize: "38px",
            width: "80%",
            letterSpacing: "2px",
            lineHeight: "60px",
            background:
              "linear-gradient(90deg, rgba(21,100,53,1) 0%, rgba(0,162,216,1) 50%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            backgroundSize: "200%",
            backgroundPosition: "center",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          LARGEST REAL ESTATE DEVELOPER
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            letterSpacing: "1px",
            fontFamily: "sans-serif",
            fontWeight: "500",
          }}
        >
          IN SOUTH INDIA
        </Typography>
      </Box>
      <Box
        sx={{
          //   border: "1px solid black",
          width: "100%",
          fontSize: "18px",
          marginTop: "30px",
        }}
      >
        <Typography
          sx={{ fontSize: "17px", letterSpacing: ".5px", textAlign: "justify" }}
        >
          Urbanrise is South India’s largest real estate developer, recognized
          for its pathbreaking and quality residential projects across South
          India. Backed by the renowned Alliance Group, Urbanrise has delivered
          over 15,000+ homes and has 72 million square feet under development.
          Driven by a passion for growth and sustainability, our projects are
          not just about creating homes but building communities that foster a
          sense of belonging. With a commitment to integrity and reliability,
          Urbanrise ensures timely delivery, meeting and exceeding home buyer
          expectations.
        </Typography>
      </Box>
      <PioneersSection />
    </Grid>
  );
}
