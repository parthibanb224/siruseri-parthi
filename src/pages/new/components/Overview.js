import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import Img1 from "../../../../public/Images-new/Elevation1.jpg";
import Img2 from "../../../../public/Images-new/igbc.png";

if (typeof window !== "undefined") {
  import("gsap/ScrollTrigger").then((ScrollTrigger) => {
    gsap.registerPlugin(ScrollTrigger.ScrollTrigger);
  });
}

export default function Overview() {
  useEffect(() => {
    // GSAP Animations
    const image = document.querySelector("#image");
    const textSection = document.querySelector("#text-section");

    // Animate the image from left to right
    gsap.fromTo(
      image,
      { x: -500, opacity: 0 }, // starting position (left off-screen, transparent)
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: image,
          start: "top 80%",
          end: "bottom 50%",
          toggleActions: "play none none none",
        },
      } // end position (normal, visible)
    );

    // Animate text section from bottom to top
    gsap.fromTo(
      textSection,
      { y: 200, opacity: 0 }, // starting position (bottom, transparent)
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: textSection,
          start: "top 80%",
          end: "bottom 50%",
          toggleActions: "play none none none",
        },
      } // end position (normal, visible)
    );
  }, []);
  return (
    <Grid
      id="overview"
      container
      item
      xs={12}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ paddingY: { md: "70px", xs: "40px" } }}
    >
      <Grid
        container
        item
        xs={6}
        id="text-section"
        sx={{ position: "relative" }}
      >
        <Grid
          container
          item
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            display: { xs: "none", md: "flex" },
            height: { xs: "35px", sm: "450px" },
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={Img1}
            alt="logo"
            style={{
              height: "100%",
              width: "auto",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            sizes="100vw"
          />
        </Grid>
        <Grid
          container
          item
          xs={3.5}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            display: { xs: "none", md: "flex" },
            height: { xs: "35px", sm: "100px" },
            overflow: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Image
            src={Img2}
            alt="logo"
            style={{
              height: "100%",
              width: "auto",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            sizes="100vw"
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={11}
        md={5.5}
        id="image"
        flexDirection="column"
        spacing={2}
      >
        <Grid container item xs={12} marginBottom="30px">
          <Typography
            sx={{
              fontSize: { xs: "22px", md: "28px" },
              marginBottom: "30px",
              fontWeight: "bold",
              background:
                "linear-gradient(90deg, rgba(21,100,53,1) 0%, rgba(0,162,216,1) 50%)",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Urbanrise The World of Joy: Where Luxury Meets Nature
          </Typography>
          <Typography
            sx={{
              textAlign: "justify",
              marginBottom: "10px",
            }}
          >
            Discover modern living redefined at Urbanrise The World of Joy,
            located in Chennai's thriving OMR corridor. Strategically set near
            SIPCOT IT Park in Siruseri and surrounded by the serene 3,500-acre
            Karanai Forest, this premium gated community offers IGBC-certified
            2BHK and 3BHK apartments.
          </Typography>{" "}
          <Typography
            sx={{
              textAlign: "justify",
              marginBottom: "10px",
            }}
          >
            With lush greenery, vast open spaces, air-conditioned interiors,
            wardrobes, and modular kitchens, these furnished homes are designed
            for unparalleled comfort and eco-friendly living.
          </Typography>{" "}
          <Typography
            sx={{
              textAlign: "justify",
              marginBottom: "7px",
            }}
          >
            Welcome to a lifestyle where every element is thoughtfully
            reimagined for your convenience.
          </Typography>{" "}
        </Grid>
        <Grid container item xs={12} spacing={5}>
          <Grid container item xs={6} md={3} spacing={1}>
            <Grid container item xs={12} justifyContent={"center"}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                150+
              </Typography>{" "}
            </Grid>
            <Grid container item xs={12} justifyContent={"center"}>
              <Typography>Amenities</Typography>{" "}
            </Grid>
          </Grid>
          <Grid container item xs={6} md={3} spacing={1}>
            <Grid container item xs={12} justifyContent={"center"}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                1 Acre
              </Typography>{" "}
            </Grid>
            <Grid container item xs={12} justifyContent={"center"}>
              <Typography>Green Park</Typography>{" "}
            </Grid>
          </Grid>
          <Grid container item xs={6} md={3} spacing={1}>
            <Grid container item xs={12} justifyContent={"center"}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                75,000 Sq.ft
              </Typography>{" "}
            </Grid>
            <Grid container item xs={12} justifyContent={"center"}>
              <Typography>Roof Top</Typography>{" "}
            </Grid>
          </Grid>
          <Grid container item xs={6} md={3} spacing={1}>
            <Grid container item xs={12} justifyContent={"center"}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                45,000 Sq.ft
              </Typography>{" "}
            </Grid>
            <Grid container item xs={12} justifyContent={"center"}>
              <Typography>Clubhouse</Typography>{" "}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
