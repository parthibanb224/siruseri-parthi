// import React from "react";
// import Image from "next/image";
// import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Box, Grid, styled } from "@mui/material";
// import { useTheme } from "@emotion/react";
// import first from "../../../../public/Images-new/11.jpg";
// import second from "../../../../public/Images-new/22.jpg";
// import sixth from "../../../../public/Images-new/88.jpg";
// import third from "../../../../public/Images-new/44.jpg";
// import fourth from "../../../../public/Images-new/66.jpg";
// import fifth from "../../../../public/Images-new/77.jpg";
// import firstMobile from "../../../../public/Images-new/new-banner-image-1.jpg";
// import secondMobile from "../../../../public/Images-new/1.jpeg";
// import { Swiper, SwiperSlide } from "swiper/react";

// const elevationImages = [
//   { src: first, desktopSrc: firstMobile, alt: "First" },
//   { src: second, desktopSrc: secondMobile, alt: "Second" },
//   { src: sixth, desktopSrc: secondMobile, alt: "Second" },
//   { src: third, desktopSrc: secondMobile, alt: "Second" },
//   { src: fourth, desktopSrc: secondMobile, alt: "Second" },
//   { src: fifth, desktopSrc: secondMobile, alt: "Second" },
// ];

// const MySwiper = styled(Swiper)({
//   position: "relative",

//   "& .swiper-button-next, & .swiper-button-prev": {
//     position: "absolute",
//     top: "50%",
//     transform: "translateY(-50%)",
//     opacity: 0,
//     visibility: "hidden",
//     transition: "opacity 0.3s, visibility 0.3s",
//     color: "lightgrey",
//   },

//   "&:hover .swiper-button-next, &:hover .swiper-button-prev": {
//     opacity: 1,
//     visibility: "visible",
//   },

//   "& .swiper-button-prev": {
//     left: 0,
//   },
// });

// const scrollToView = (target) => {
//   const section = document.querySelector(target);
//   section.scrollIntoView({ behavior: "smooth", block: "start" });
// };

// export default function HeroSection() {
//   const theme = useTheme();
//   return (
//     <Box>
//       <MySwiper
//         className="mySwiper"
//         navigation={true}
//         centeredSlides={true}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[EffectFade, Navigation, Pagination, Autoplay]}
//       >
//         {(elevationImages || [])?.map((image, index) => (
//           <SwiperSlide key={index}>
//             <Grid
//               id="back-to-top-anchor"
//               item
//               container
//               xs={12}
//               sx={{
//                 position: "relative",
//                 width: "100%",
//                 gap: { xs: "20px", md: "0px" },
//               }}
//             >
//               <Grid
//                 item
//                 xs={12}
//                 sx={{
//                   display: { md: "flex", xs: "none" },
//                   width: "100%",
//                   height: `calc(100vh - ${theme.spacing(9.5)})`,
//                 }}
//               >
//                 <Image
//                   onClick={() => scrollToView(`#overview`)}
//                   src={image.src}
//                   alt="banner"
//                   fill
//                   sizes="100vw"
//                   style={{ width: "100%", height: "100%", cursor: "pointer" }}
//                 />
//               </Grid>
//               <Grid
//                 item
//                 xs={12}
//                 sx={{
//                   display: { md: "none", xs: "flex" },
//                   width: "100%", // Ensure parent has width
//                   height: "400px", // Ensure parent has height
//                   overflow: "hidden",
//                 }}
//               >
//                 <Image
//                   onClick={() => scrollToView(`#overview`)}
//                   src={image.desktopSrc}
//                   alt="banner"
//                   fill
//                   sizes="100vw"
//                   style={{ objectFit: "cover", cursor: "pointer" }}
//                 />
//               </Grid>
//             </Grid>
//           </SwiperSlide>
//         ))}
//       </MySwiper>
//     </Box>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box, Grid, IconButton, useMediaQuery } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import Banner1 from "../../../../public/Images-new/11.jpg";
import Banner2 from "../../../../public/Images-new/22.jpg";
import Banner3 from "../../../../public/Images-new/88.jpg";
import Banner4 from "../../../../public/Images-new/44.jpg";
import Banner5 from "../../../../public/Images-new/66.jpg";
import Banner6 from "../../../../public/Images-new/77.jpg";

// Desktop and Mobile Banners
const desktopBanners = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];
const mobileBanners = [Banner1, Banner2, Banner3]; // Example for mobile-specific banners

export default function HomeBannerImage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)"); // Check if the screen is mobile

  // Automatically change slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex + 1) %
          (isMobile ? mobileBanners.length : desktopBanners.length)
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile]);

  // Handle navigation
  const handleNext = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex + 1) %
        (isMobile ? mobileBanners.length : desktopBanners.length)
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0
        ? (isMobile ? mobileBanners.length : desktopBanners.length) - 1
        : prevIndex - 1
    );
  };

  const banners = isMobile ? mobileBanners : desktopBanners;

  return (
    <Grid
      sx={{
        height: { md: "100vh", xs: "60vh" },
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Slide Image */}
      <Grid
        sx={{
          position: "relative",
          width: "100%",
          height: isMobile ? "100%" : "100%", // Adjust for mobile height
        }}
      >
        <Image
          src={banners[currentImageIndex]}
          alt="Banner"
          priority={true}
          fill
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 1s ease-in-out",
          }}
        />
      </Grid>

      {/* Navigation Arrows */}
      {!isMobile && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        >
          <IconButton onClick={handlePrev} sx={{ color: "black" }}>
            <ArrowBackIos />
          </IconButton>
          <IconButton onClick={handleNext} sx={{ color: "black" }}>
            <ArrowForwardIos />
          </IconButton>
        </Box>
      )}

      {/* Dots for Slide Navigation */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {banners.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            sx={{
              width: currentImageIndex === index ? 12 : 10, // Larger active dot
              height: 10,
              borderRadius: "50%",
              backgroundColor: currentImageIndex === index ? "#0e8b4b" : "gray",
              transition: "width 0.3s ease",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Grid>
  );
}
