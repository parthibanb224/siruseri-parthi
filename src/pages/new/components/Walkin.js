import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
// import Img1 from "../../../../public/Images-new/4-1-768x559.jpg";
// import Img2 from "../../../../public/Images-new/Co-working-Spaces-1-768x432.jpg";
// import Img3 from "../../../../public/Images-new/tower-to-tower.jpg";
// import Img4 from "../../../../public/Images-new/1-4-768x559.jpg";

if (typeof window !== "undefined") {
  import("gsap/ScrollTrigger").then((ScrollTrigger) => {
    gsap.registerPlugin(ScrollTrigger.ScrollTrigger);
  });
}

export default function Walkin() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sectionRef = useRef([]);

  // useEffect(() => {
  //   sectionRef.current.forEach((section, index) => {
  //     const text = section.querySelector(".text");
  //     const image = section.querySelector(".image");

  //     gsap.fromTo(
  //       text,
  //       { x: "-100%", opacity: 0 },
  //       {
  //         x: "0%",
  //         opacity: 1,
  //         duration: 1.5,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: text,
  //           start: "top 80%",
  //           end: "bottom 50%",
  //           toggleActions: "play none none none",
  //         },
  //       }
  //     );

  //     gsap.fromTo(
  //       image,
  //       { x: window.innerWidth, opacity: 0 },
  //       {
  //         x: "0%",
  //         opacity: 1,
  //         duration: 1.5,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: image,
  //           start: "top 80%",
  //           end: "bottom 50%",
  //           toggleActions: "play none none none",
  //         },
  //       }
  //     );
  //   });
  // }, []);

  const sections = [
    {
      imgSrc: "/Images-new/4-1-768x559.jpg",
      title: "45K SQFT COSMO CLUBHOUSE",
      content:
        "An exclusive world-class club house spread over 45,000 Sq. Ft. of land invites you to the world of luxury beyond imagination. The magnificent area with contemporary design, upscale decor and latest indoor amenities is the perfect gateway to a life of fun and joy. The wide range of facilities in the club house ranges from beautiful spacious party hall to a world of indoor games like Table Tennis, Chess, and more.",
      reverse: false,
    },
    {
      imgSrc: "/Images-new/Co-working-Spaces-1-768x432.jpg",
      title: "15K SQFT OF CO-WORKING SPACES",
      content:
        "Experience a new dimension to ‘Working From Home’ at the sprawling Co-working spaces spread over 15,000 Sq.ft. Choose to work from the relaxing green environment in the beautiful landscaped park or scale new heights in your career working from the rooftop co-working spaces. Tailored to meet modern work needs, these co-working spaces balance work with relaxation, fun, and joy, transforming the typical work-from-home scenario into a more enjoyable, stress-free experience.",
      reverse: true,
    },
    {
      imgSrc: "/Images-new/tower-to-tower.jpg",
      title: "24K SQFT TOWER TO TOWER AMENITIES",
      content:
        "Innovation in every aspect of living is what The World of Joy offers you. Enjoy a wide range of games and activities like Shuttle Court, Snake Ladder & Chess Court laid out for you in the area between the towers. A smart usage of space extends beyond the walls of your home, the thoughtful planning adds a new dimension to living here.",
      reverse: false,
    },
    {
      imgSrc: "/Images-new/1-4-768x559.jpg",
      title: "1+ ACRES GREEN PARK",
      content:
        "Embrace a life close to nature in the World of Joy. An exquisite park spread over 1 acre of land consisting of beautiful green manicured lawns, pathways, play areas and professional play ground invites you to lead an active, healthy and wholesome life.",
      reverse: true,
    },
  ];

  return (
    <Grid
      container
      item
      xs={12}
      alignItems="center"
      justifyContent="center"
      sx={{
        padding: "60px 20px",
        backgroundImage: "url('/images/walkway-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "27px", md: "35px" },
          fontWeight: "bold",
          color: "#FFFFFF",
          marginBottom: "10px",
        }}
      >
        150+ NEW GEN AMENITIES
      </Typography>
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <Grid
            ref={(el) => (sectionRef.current[index] = el)}
            container
            item
            xs={12}
            justifyContent="space-between"
            alignItems="center"
            paddingY="50px"
          >
            {isMobile || !section.reverse ? (
              <>
                <Grid
                  className="image"
                  container
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    height: { xs: "250px", sm: "500px" },
                    overflow: "hidden",
                    position: "relative",
                    borderRadius: "30px",
                  }}
                >
                  <Image
                    src={section.imgSrc}
                    alt="Walkway Image"
                    style={{
                      height: "100%",
                      width: "auto",
                      objectFit: "cover",
                      borderRadius: "30px",
                    }}
                    sizes="100vw"
                  />
                </Grid>
                <Grid
                  className="text"
                  container
                  item
                  xs={12}
                  md={5.5}
                  sx={{
                    height: "100%",
                    padding: { md: "0 50px", xs: "0" },
                    borderLeft: { md: "1px solid #FFFFFF", xs: "0" },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: { md: "25px", xs: "18px" },
                      textAlign: "left",
                      marginBottom: "40px",
                      marginTop: { md: 0, xs: "30px" },
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: { md: "20px", xs: "14px" },
                      textAlign: "justify",
                    }}
                  >
                    {section.content}
                  </Typography>
                </Grid>
              </>
            ) : (
              <>
                <Grid
                  className="text"
                  container
                  item
                  xs={12}
                  md={5.5}
                  sx={{
                    height: "100%",
                    padding: { md: "0 50px", xs: "0" },
                    borderRight: { md: "1px solid #FFFFFF", xs: "0" },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: { md: "25px", xs: "18px" },
                      textAlign: "left",
                      marginBottom: "40px",
                      marginTop: { md: 0, xs: "30px" },
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: { md: "20px", xs: "14px" },
                      textAlign: "justify",
                    }}
                  >
                    {section.content}
                  </Typography>
                </Grid>
                <Grid
                  className="image"
                  container
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    height: { xs: "250px", sm: "500px" },
                    overflow: "hidden",
                    position: "relative",
                    borderRadius: "30px",
                  }}
                >
                  <Image
                    src={section.imgSrc}
                    alt="Walkway Image"
                    style={{
                      height: "100%",
                      width: "auto",
                      objectFit: "cover",
                      borderRadius: "30px",
                    }}
                    sizes="100vw"
                  />
                </Grid>
              </>
            )}
          </Grid>
          <Grid
            container
            item
            xs={12}
            sx={{
              borderBottom: "1px solid #FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "60px",
            }}
          />
        </React.Fragment>
      ))}
    </Grid>
  );
}
