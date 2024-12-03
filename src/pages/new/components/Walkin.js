import { Box, Grid, Typography } from "@mui/material";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  import("gsap/ScrollTrigger").then((ScrollTrigger) => {
    gsap.registerPlugin(ScrollTrigger.ScrollTrigger);
  });
}

export default function Walkin() {
  const sections = useRef([]);

  useEffect(() => {
    sections.current.forEach((section, index) => {
      const text = section.querySelector(".text");
      const image = section.querySelector(".image");

      gsap.fromTo(
        text,
        { x: "-100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            end: "bottom 50%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        image,
        { x: window.innerWidth, opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
            end: "bottom 50%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const sectionData = [
    {
      image: "/Images-new/4-1-768x559.jpg",
      title: "45K SQFT COSMO CLUBHOUSE",
      description:
        "An exclusive world-class club house spread over 45,000 Sq. Ft. of land invites you to the world of luxury beyond imagination. The magnificent area with contemporary design, upscale decor and latest indoor amenities is the perfect gateway to a life of fun and joy. The wide range of facilities in the club house ranges from beautiful spacious party hall to a world of indoor games like Table Tennis, Chess, and more.",
      reverse: false,
    },
    {
      image: "/Images-new/Co-working-Spaces-1-768x432.jpg",
      title: "15K SQFT OF CO-WORKING SPACES",
      description:
        "Experience a new dimension to ‘Working From Home’ at the sprawling Co-working spaces spread over 15,000 Sq.ft. Choose to work from the relaxing green environment in the beautiful landscaped park or scale new heights in your career working from the rooftop co-working spaces. Tailored to meet modern work needs, these co-working spaces balance work with relaxation, fun, and joy, transforming the typical work-from-home scenario into a more enjoyable, stress-free experience.",
      reverse: true,
    },
    {
      image: "/Images-new/3-2-768x559.webp",
      title: "24K SQFT TOWER TO TOWER AMENITIES",
      description:
        "Innovation in every aspect of living is what The World of Joy offers you. Enjoy a wide range of games and activities like Shuttle Court, Snake Ladder & Chess Court laid out for you in the area between the towers. A smart usage of space extends beyond the walls of your home, the thoughtful planning adds a new dimension to living here.",
      reverse: false,
    },
    {
      image: "/Images-new/1-4-768x559.jpg",
      title: "1+ ACRES GREEN PARK",
      description:
        "Embrace a life close to nature in the World of Joy. An exquisite park spread over 1 acre of land consisting of beautiful green manicured lawns, pathways, play areas and professional play ground invites you to lead an active, healthy and wholesome life.",
      reverse: true,
    },
  ];

  return (
    <Grid
      sx={{
        // minHeight: "100vh",
        marginTop: { xs: "0px", sm: "50px", md: "50px" },
        overflow: "hidden",
        backgroundImage: "url('/Images-new/walkway-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: { xs: "0px", sm: "90px 10px", md: "90px 10px" },
      }}
    >
      {/* <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "27px", md: "35px" },
          fontWeight: "bold",
          color: "#FFFFFF",
          marginBottom: "20px",
        }}
      >
        150+ NEW GEN AMENITIES
      </Typography> */}

      {sectionData.map((section, index) => (
        <Grid
          key={index}
          ref={(el) => (sections.current[index] = el)}
          sx={{
            display: "flex",
            minHeight: { xs: "fit-content", sm: "80vh", md: "80vh" },
            padding: "20px",
            width: "100%",
            flexDirection: {
              xs: "column", // Stack vertically for mobile
              sm: index % 2 === 0 ? "row" : "row-reverse", // Row or row-reverse for larger screens
            },
          }}
        >
          {/* Image Section */}
          <Grid
            sx={{
              width: { xs: "100%", sm: "60%" }, // Full width on mobile
            }}
            className="image"
          >
            <Grid
              sx={{
                height: "100%",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", sm: "80%" },
                  height: { xs: "300px", sm: "100%" }, // Set a specific height for mobile
                  transition: "transform 0.3s ease-in-out",
                }}
                className="image-box"
              >
                <Image
                  src={section?.image}
                  alt="Feature"
                  priority={true}
                  fill
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover", // Ensures the image covers the container
                    borderRadius: "20px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          {/* Text Section */}
          <Grid
            sx={{
              width: { xs: "100%", sm: "35%" }, // Full width on mobile
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: { xs: "20px", sm: 0 }, // Add spacing for mobile
            }}
            className="text"
          >
            <Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "20px", sm: "22px", md: "22px" },
                  fontStyle: "italic",
                  letterSpacing: "1px",
                  fontFamily: "cursive",
                  textAlign: { xs: "center", sm: "left" }, // Center text on mobile
                  fontWeight: "bold",
                }}
              >
                {section.title}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "white",
                  marginTop: { xs: "20px", sm: "30px", md: "30px" },
                  letterSpacing: "1px",
                  textAlign: { xs: "justify", sm: "justify" }, // Center text on mobile
                  fontSize: { xs: "16px", sm: "18px", md: "18px" },
                }}
              >
                {section.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
