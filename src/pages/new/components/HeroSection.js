// import React from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Box, Grid, styled } from "@mui/material";
// import { useTheme } from "@emotion/react";
// import Banner1 from "../../../../public/Images-new/Banners/TWOJ Banner 1- Size 1.png";
// import Banner2 from "../../../../public/Images-new/Banners/TWOJ Banner 2- Size 1.png";
// import Banner3 from "../../../../public/Images-new/Banners/TWOJ Banner 3- Size 1.png";
// import Banner4 from "../../../../public/Images-new/Banners/TWOJ Banner 4- Size 1.png";
// import Banner5 from "../../../../public/Images-new/Banners/TWOJ Banner 5- Size 1.jpg";
// import Banner6 from "../../../../public/Images-new/Banners/TWOJ Banner 6- Size 1.jpg";

// import BannerMobile1 from "../../../../public/Images-new/Banners/TWOJ Banner 1- Size 2.png";
// import BannerMobile2 from "../../../../public/Images-new/Banners/TWOJ Banner 2- Size 2.png";
// import BannerMobile3 from "../../../../public/Images-new/Banners/TWOJ Banner 3- Size 2.png";
// import BannerMobile4 from "../../../../public/Images-new/Banners/TWOJ Banner 4- Size 2.png";
// import BannerMobile5 from "../../../../public/Images-new/Banners/TWOJ Banner 5- Size 2.png";
// import BannerMobile6 from "../../../../public/Images-new/Banners/TWOJ Banner 6- Size 2.png";

// const elevationImages = [
//   { src: Banner1, desktopSrc: BannerMobile1, alt: "First" },
//   { src: Banner2, desktopSrc: BannerMobile2, alt: "Second" },
//   { src: Banner3, desktopSrc: BannerMobile3, alt: "Second" },
//   { src: Banner4, desktopSrc: BannerMobile4, alt: "Second" },
//   { src: Banner5, desktopSrc: BannerMobile5, alt: "Second" },
//   { src: Banner6, desktopSrc: BannerMobile6, alt: "Second" },
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
//                   height: { md: "750px", xs: "300px" },
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
//                 container
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

import Banner1 from "../../../../public/Images-new/Set-1/1.jpg";
import Banner2 from "../../../../public/Images-new/Set-1/2.jpg";
import Banner3 from "../../../../public/Images-new/Set-1/3.jpg";
import Banner4 from "../../../../public/Images-new/Set-1/4.jpg";
import Banner5 from "../../../../public/Images-new/Set-1/5.jpg";
import Banner6 from "../../../../public/Images-new/Set-1/6.jpg";

import BannerMobile1 from "../../../../public/Images-new/Set-1/1mob.jpg";
import BannerMobile2 from "../../../../public/Images-new/Set-1/2mob.jpg";
import BannerMobile3 from "../../../../public/Images-new/Set-1/3mob.jpg";
import BannerMobile4 from "../../../../public/Images-new/Set-1/4mob.jpg";
import BannerMobile5 from "../../../../public/Images-new/Set-1/5mob.jpg";
import BannerMobile6 from "../../../../public/Images-new/Set-1/6mob.jpg";

// Desktop and Mobile Banners
const desktopBanners = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];
const mobileBanners = [
  BannerMobile1,
  BannerMobile2,
  BannerMobile3,
  BannerMobile4,
  BannerMobile5,
  BannerMobile6,
]; // Example for mobile-specific banners

export default function HeroSection() {
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
      container
      item
      xs={12}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Slide Image */}
      <Grid
        container
        sx={{
          position: "relative",
          width: "100%",
          height: { md: "100vh", xs: "400px" },
          overflow: "hidden",
        }}
      >
        <Image
          src={banners[currentImageIndex]}
          alt="Banner"
          priority={true}
          fill
          sizes="100vw"
          // style={{
          //   width: "100%",
          //   height: "100%",
          //   objectFit: "cover",
          //   transition: "opacity 1s ease-in-out",
          // }}
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
          <IconButton onClick={handlePrev} sx={{ color: "#fff" }}>
            <ArrowBackIos />
          </IconButton>
          <IconButton onClick={handleNext} sx={{ color: "#fff" }}>
            <ArrowForwardIos />
          </IconButton>
        </Box>
      )}

      {/* Dots for Slide Navigation */}
      <Box
        sx={{
          position: "absolute",
          bottom: { md: 20, xs: -20 },
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
              height: { md: 10, xs: 5 },
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
