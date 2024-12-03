import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import twoBHK from "../../../../public/Images-new/2BHK-Regular-West-Facing-865sqft-300x190.webp";
import twoBHK1 from "../../../../public/Images-new/2BHK-Regular-East-Facing-865sqft-300x190.webp";
import threeBHK from "../../../../public/Images-new/3bhk6-300x190.webp";
import threeBHK1 from "../../../../public/Images-new/3bhk5-300x190.webp";
import threeBHK2 from "../../../../public/Images-new/3bhk4-300x190.webp";
import threeBHK3 from "../../../../public/Images-new/3bhk3-300x190.webp";
import master from "../../../../public/Images-new/master-1110x1536.webp";
import { Box, IconButton, Modal } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import gsap from "gsap";

if (typeof window !== "undefined") {
  import("gsap/ScrollTrigger").then((ScrollTrigger) => {
    gsap.registerPlugin(ScrollTrigger.ScrollTrigger);
  });
}

const data = [
  {
    id: 6,
    type: "gallery",
    title: "― Gallery ―",
    subTitle: "The World Of Joy",
    containerCol: {
      xs: 12,
    },
    tabCol: {
      xs: 9,
      md: 6,
      xl: 4,
    },
    tabNames: [
      {
        id: 1,
        name: "2BHK",
      },
      {
        id: 2,
        name: "3BHK",
      },
      {
        id: 3,
        name: "Master Plan",
      },
    ],
    sliderCol: {
      xs: 12,
      sm: 10,
    },
  },
];

export default function FloorPlan() {
  const content = data[0];
  const [selectedImgType, setSelectedImgType] = useState([1]);
  const [galleryImgList, setGalleryImgList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = (img) => {
    setSelectedImage(img);
    setOpenModal(true);
  };

  const exteriorImg = [
    { item: twoBHK, alt: "2bhk", title: "2BHK REGULAR – WEST FACING" },
    { item: twoBHK1, alt: "2bhk", title: "2BHK REGULAR – EAST FACING" },
  ];
  const interiorImg = [
    { item: threeBHK, alt: "3bhk", title: "TYPE1-3BHK WEST FACING" },
    { item: threeBHK1, alt: "3bhk", title: "TYPE1-3BHK EAST FACING" },
    { item: threeBHK2, alt: "3bhk", title: "TYPE2-3BHK WEST FACING" },
    { item: threeBHK3, alt: "3bhk", title: "TYPE2-3BHK EAST FACING" },
  ];
  const roofTopImg = [{ item: master, alt: "master", title: "Master Plan" }];

  useEffect(() => {
    const imageMap = { 1: exteriorImg, 2: interiorImg, 3: roofTopImg };
    const allImg = [...exteriorImg, ...interiorImg, ...roofTopImg];
    setGalleryImgList(imageMap[selectedImgType[0]] || allImg);
  }, [selectedImgType]);

  const handleTabChange = (id) => {
    if (selectedImgType[0] === id) return; // Avoid redundant updates
    setGalleryImgList([]);
    setSelectedImgType([id]);
  };

  React.useEffect(() => {
    // GSAP animation to move text from bottom to top
    gsap.fromTo(
      ".navbar-text",
      { y: 50, opacity: 0 }, // Initial state (text starts from below and is invisible)
      {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".navbar-text",
          start: "top 80%",
          end: "bottom 50%",
          toggleActions: "play none none none",
        },
      } // Final state (text moves to its position and becomes visible)
    );
  }, []);

  return (
    <Grid
      id="floorPlan"
      container
      item
      xs={content?.containerCol?.xs}
      sm={content?.containerCol?.sm}
      md={content?.containerCol?.md}
      lg={content?.containerCol?.lg}
      xl={content?.containerCol?.xl}
      sx={{
        paddingY: "60px",
        justifyContent: "center",
      }}
      className="navbar-text"
    >
      <Grid
        container
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          component="h1"
          sx={{
            padding: "10px 0 10px 0",
            fontSize: { xs: "20px", sm: "35px" },
            fontWeight: "bolder",
            background:
              "linear-gradient(90deg, rgba(21,100,53,1) 0%, rgba(0,162,216,1) 50%)",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textTransform: "uppercase",
          }}
        >
          {"Discover the Perfect Layout"}
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          component="h1"
          sx={{
            padding: "3px 0 10px 0",
            fontSize: { xs: "13px", sm: "16px" },
            textAlign: "center",
          }}
        >
          {
            "Experience thoughtfully designed floor plans that cater to modern living needs."
          }
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={content?.tabCol?.xs}
        sm={content?.tabCol?.sm}
        md={content?.tabCol?.md}
        lg={content?.tabCol?.lg}
        xl={content?.tabCol?.xl}
        sx={{
          marginTop: "30px",
          justifyContent: { xs: "space-evenly", sm: "space-between" },
        }}
      >
        {(content?.tabNames || [])?.map((item) => (
          <Button
            key={item?.id}
            onClick={() => handleTabChange(item?.id)}
            sx={{
              height: { xs: "40px", sm: "50px" },
              margin: { xs: "3px 0", sm: 0 },
              background: selectedImgType?.includes(item?.id)
                ? "#0d6efd"
                : "#FFFFFF",
              textTransform: "capitalize",
              color: selectedImgType?.includes(item?.id) ? "#fff" : "#000000",
              fontSize: { xs: "14px", sm: "18px" },
              padding: { xs: "7px 10px", sm: "10px 30px" },
              border: "1px solid #000000",
              borderRadius: "11px",
              ":hover": {
                background: selectedImgType?.includes(item?.id)
                  ? "#0d6efd"
                  : "#FFFFFF",
              },
            }}
            variant="contained"
          >
            {item?.name || ""}
          </Button>
        ))}
      </Grid>

      <Grid
        container
        item
        xs={9}
        gap={3}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {(galleryImgList || [])?.map((val) => (
          <Grid
            key={val.alt}
            container
            item
            xs={12}
            sm={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              border: "1px solid #000000",
              marginTop: "60px",
            }}
          >
            <Grid
              container
              item
              xs={12}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                height: {
                  xs: "200px",
                  sm: "300px",
                },
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                onClick={() => handleOpenModal(val.item)}
                src={val.item}
                alt={val.alt}
                style={{
                  height: "80%",
                  width: "auto",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                sizes="100vw"
              />
            </Grid>
            <Grid
              container
              item
              xs={12}
              display="flex"
              alignItems="center"
              justifyContent="center"
              marginBottom={"20px"}
            >
              <Typography sx={{ display: "block" }}>{val.title}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "80vw",
            height: "80vh",
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            <CloseOutlined fontSize="large" />
          </IconButton>
          <Image
            src={selectedImage}
            alt="image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Modal>
    </Grid>
  );
}

FloorPlan.propTypes = {
  content: PropTypes.object.isRequired,
};
