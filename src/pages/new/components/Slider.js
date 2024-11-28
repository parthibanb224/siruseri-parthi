"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Elevetion1 from "../../../../public/Images-new/Slide1.jpg";
import Elevetion2 from "../../../../public/Images-new/Slide2.jpg";
import Elevetion3 from "../../../../public/Images-new/Slide3.jpg";
import Elevetion4 from "../../../../public/Images-new/1-768x559.webp";
import Elevetion5 from "../../../../public/Images-new/Slide5.jpg";
import Elevetion from "../../../../public/Images-new/Slide4.jpg";

export default function Slideshow() {
  const slides = [
    {
      text: "REIMAGINING & REINVENTING",
      image: Elevetion1,
      content: "LUXURY LIVING FOR YOUR CONVENIENCE",
      content2: [
        <Typography sx={{ fontSize: "18px", mb: 2 }} key="1" variant="body1">
          🔷 <strong>Furnished Apartments:</strong> Discover the pinnacle of
          comfort with thoughtfully furnished residences, complete with
          climate-controlled living spaces, stylishly fitted wardrobes, and a
          state-of-the-art modular kitchen, tailored for modern living.
        </Typography>,
        <Typography sx={{ fontSize: "18px", mb: 2 }} key="2" variant="body1">
          🔷 <strong>Air-conditioned Apartments:</strong> Enjoy unparalleled
          ease with pre-fitted, high-performance air-conditioning systems that
          provide a seamless, luxurious cooling experience from the moment you
          step inside.
        </Typography>,
      ],
    },
    {
      text: "REIMAGINING & REINVENTING",
      image: Elevetion3,
      content: "INFRASTRUCTURE WITH SMART FLOOD PREVENTION SYSTEMS",
      content2: [
        <Typography sx={{ fontSize: "18px", mb: 2 }} key="1" variant="body1">
          🔷 <strong>Landfill Project Area:</strong> The project area is raised
          by a minimum of 1 meter above the approach road level to prevent
          flooding.
        </Typography>,
        <Typography sx={{ fontSize: "18px", mb: 2 }} key="2" variant="body1">
          🔷 <strong>Flood Barriers:</strong> Barriers are installed at main
          entrance and basement entry points to prevent water from entering the
          community.
        </Typography>,
        <Typography sx={{ fontSize: "18px", mb: 2 }} key="3" variant="body1">
          🔷 <strong>Vehicle & Generator Safety:</strong> These measures ensure
          that vehicles and diesel generators remain safe and operational during
          power failures and flood situations.
        </Typography>,
      ],
    },
    {
      text: "REIMAGINING & REINVENTING",
      image: Elevetion4,
      content: "ROOFTOP SPACES FOR A CLEANER, GREENER LIFESTYLE",
      content2: [
        <Typography sx={{ fontSize: "18px", mb: 2 }} key="1" variant="body1">
          🔷 Tackling the problem of dirty and neglected building rooftops,
          we’ve transformed these unused areas into 75,000 sqft of premium
          rooftop amenities.
        </Typography>,
        <Typography sx={{ fontSize: "18px", mb: 2 }} key="2" variant="body1">
          🔷 Designed to prevent water leakage and enhance the living
          experience, these spaces now feature leisure, fitness, and social
          areas, along with green zones for a healthier lifestyle.
        </Typography>,
        <Typography sx={{ fontSize: "18px", mb: 2 }} key="3" variant="body1">
          🔷 Our innovative solution not only ensures a cleaner environment but
          also adds tremendous value to the community, making the rooftops a
          vibrant, functional part of daily life.
        </Typography>,
      ],
    },
    {
      text: "REIMAGINING & REINVENTING",
      image: Elevetion2,
      content:
        "SPACES THROUGH SUSTAINABLE PRACTICES AND ENVIRONMENTAL INTELLIGENCE",
      content2: [
        <Typography sx={{ fontSize: "18px", mb: 2 }} key="1" variant="body1">
          🔷 <strong>100% Solar Power Generation:</strong> Solar panels power
          the entire community, eliminating electricity bills and ensuring
          uninterrupted power supply.
        </Typography>,
        <Typography sx={{ fontSize: "18px", mb: 2 }} key="2" variant="body1">
          🔷 <strong>Organic Waste Management:</strong> All organic waste is
          transformed into nutrient-rich manure, promoting eco-friendly waste
          disposal.
        </Typography>,
        <Typography sx={{ fontSize: "18px", mb: 2 }} key="3" variant="body1">
          🔷 <strong>IGBC Gold Certification:</strong> Enhanced construction
          with cooler paints, advanced glass for temperature control, and
          superior materials for better heat resistance.
        </Typography>,
        <Typography sx={{ fontSize: "18px", mb: 2 }} key="4" variant="body1">
          🔷 <strong>Water-Saving Fixtures:</strong> Low-flow fixtures
          significantly reduce water consumption without compromising comfort.
        </Typography>,
      ],
    },
    {
      text: "REIMAGINING & REINVENTING",
      image: Elevetion,
      content: "YOUR CHILDREN’S FUTURE AND SAFETY",
      content2: [
        <Typography sx={{ fontSize: "18px", mb: 2 }} key="1" variant="body1">
          🔷 <strong>Urbanrise Genius:</strong> Balancing work and family can be
          challenging. Most working parents face difficulty in providing support
          to enhance their child’s skills. Urbanrise Genius is our dedicated
          learning centre within the community for tuition, dance, music, art
          cookery classes and more – helping your child thrive, without you ever
          having to worry.
        </Typography>,
      ],
    },
    {
      text: "REIMAGINING & REINVENTING",
      image: Elevetion5,
      content: "LOCATION CHOICES FOR DEVELOPING APARTMENT COMMUNITIES",
      content2: [
        <Typography sx={{ fontSize: "18px", mb: 2 }} key="1" variant="body1">
          🔷 Locations with abundant water bodies & high groundwater tables.
        </Typography>,
        <Typography sx={{ fontSize: "18px", mb: 2 }} key="2" variant="body1">
          🔷 Located near Asia’s largest IT hub, SIPCOT IT Park in Siruseri, and
          surrounded by the expansive 3,500-acre Karanai Forest.
        </Typography>,
        <Typography sx={{ fontSize: "18px", mb: 2 }} key="3" variant="body1">
          🔷 Pristine environments with superior air quality for a healthier
          lifestyle.
        </Typography>,
        <Typography sx={{ fontSize: "18px", mb: 2 }} key="4" variant="body1">
          🔷 Well-connected to the city via OMR, Outer Ring Road, and upcoming
          metro developments, providing easy access to key commercial and
          residential areas.
        </Typography>,
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNextSlide();
    }, 8000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <Box sx={{ width: "85%" }}>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "26px" },
              textAlign: "center",
              fontWeight: "bold",
              background:
                "linear-gradient(90deg, rgba(21,100,53,1) 0%, rgba(0,162,216,1) 50%)",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Reimagining and Reinventing Everyday Living with Luxury,
            Sustainability, and Innovation
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              textAlign: "center",
              letterSpacing: "1px",
            }}
          >
            Where Modern Comfort Meets Intelligent Living
          </Typography>
        </Box>
      </Box>

      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          padding: { xs: "20px", md: "40px 120px" },
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: { xs: 800, md: 500 },
            position: "relative",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {slides.map((slide, index) => (
            <Box
              key={index}
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                transition: "transform 1.5s ease",
                transform: `translateX(${(index - currentSlide) * 100}%)`,
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "50%" },
                  height: "100%",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", md: "50%" },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: { xs: "10px", md: "20px" },
                }}
              >
                <Typography
                  sx={{
                    mb: 1,
                    letterSpacing: ".5px",
                    color: "#355F2E",
                    fontSize: "40px",
                  }}
                >
                  {slide.text}
                </Typography>
                <Typography
                  sx={{ mb: 3, fontSize: "15px", letterSpacing: ".3px" }}
                >
                  {slide.content}
                </Typography>
                <Box>
                  {slide.content2.map((point, pointIndex) => (
                    <div key={pointIndex} sx={{ fontSize: "18px", mb: 2 }}>
                      {point}
                    </div>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        {/* Navigation Buttons */}
        <IconButton
          onClick={handlePrevSlide}
          sx={{
            position: "absolute",
            top: "50%",
            left: { xs: "10px", md: "40px" }, // Visible on mobile and desktop
            transform: "translateY(-50%)",
            zIndex: 20, // Ensure it appears above other elements
            color: "white",
            background: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              background: "rgba(0, 0, 0, 0.7)",
            },
          }}
        >
          <ArrowBackIos />
        </IconButton>
        <IconButton
          onClick={handleNextSlide}
          sx={{
            position: "absolute",
            top: "50%",
            right: { xs: "10px", md: "40px" }, // Visible on mobile and desktop
            transform: "translateY(-50%)",
            zIndex: 20, // Ensure it appears above other elements
            color: "white",
            background: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              background: "rgba(0, 0, 0, 0.7)",
            },
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Grid>
    </>
  );
}
