import React, { useState, useRef, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import exterior from "../../../public/nlpImages/Exterior/Exterior.jpg";
import exterior1 from "../../../public/nlpImages/Exterior/Exterior 1.jpg";
import exterior2 from "../../../public/nlpImages/Exterior/Exterior 2.jpg";
import exterior3 from "../../../public/nlpImages/Exterior/Exterior 3.jpg";
import exterior4 from "../../../public/nlpImages/Exterior/Exterior 4.jpg";
import interior from "../../../public/nlpImages/Interior/Interior.jpg";
import interior1 from "../../../public/nlpImages/Interior/Interior 1.jpg";
import interior2 from "../../../public/nlpImages/Interior/Interior 2.jpg";
import interior3 from "../../../public/nlpImages/Interior/Interior 3.jpg";
import roofTop from "../../../public/nlpImages/RoofTop/Rooftop.jpg";
import roofTop3 from "../../../public/nlpImages/RoofTop/Rooftop3.jpg";
import roofTop4 from "../../../public/nlpImages/RoofTop/Rooftop 4.jpg";
import roofTop5 from "../../../public/nlpImages/RoofTop/Roof top 5.jpg";
import towerToTower from "../../../public/nlpImages/Tower_to_tower/Tower to tower.jpg";
import towerToTower1 from "../../../public/nlpImages/Tower_to_tower/Tower to tower 1.jpg";
import towerToTower2 from "../../../public/nlpImages/Tower_to_tower/Tower to tower 2.jpg";
import towerToTower3 from "../../../public/nlpImages/Tower_to_tower/Tower to tower 3.jpg";
import towerToTower4 from "../../../public/nlpImages/Tower_to_tower/Tower to tower 4.jpg";

export default function Gallery({ content }) {
  const [selectedImgType, setSelectedImgType] = useState([0]);
  const sliderRef = useRef();

  const [currentExpIdx, setCurrentExpIdx] = useState(0);

  const [galleryImgList, setGalleryImgList] = useState([]);

  useEffect(() => {
    const exteriorImg = [exterior, exterior1, exterior2, exterior3, exterior4];
    const interiorImg = [interior, interior1, interior2, interior3];
    const roofTopImg = [roofTop, roofTop3, roofTop4, roofTop5];
    const towerToTowerImg = [
      towerToTower,
      towerToTower1,
      towerToTower2,
      towerToTower3,
      towerToTower4,
    ];

    if (selectedImgType.includes(1)) {
      setGalleryImgList(exteriorImg);
    } else if (selectedImgType.includes(2)) {
      setGalleryImgList(interiorImg);
    } else if (selectedImgType.includes(3)) {
      setGalleryImgList(towerToTowerImg);
    } else if (selectedImgType.includes(4)) {
      setGalleryImgList(roofTopImg);
    } else {
      const allImg = [
        ...exteriorImg,
        ...interiorImg,
        ...roofTopImg,
        ...towerToTowerImg,
      ];
      setGalleryImgList(allImg);
    }
  }, [selectedImgType]);

  return (
    <Grid
      container
      item
      xs={content?.containerCol?.xs}
      sm={content?.containerCol?.sm}
      md={content?.containerCol?.md}
      lg={content?.containerCol?.lg}
      xl={content?.containerCol?.xl}
      sx={{
        padding: { xs: "0px 0 50px 0", sm: "0px 0 20px 0" },
        justifyContent: "center",
      }}
    >
      <Grid
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
            padding: "30px 0 10px 0",
            fontSize: { xs: "14px", sm: "20px" },
            fontWeight: "bolder",
            color: "#644A00",
          }}
        >
          {content?.title || ""}
        </Typography>
      </Grid>
      <Grid
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
            fontSize: { xs: "20px", sm: "36px" },
            fontWeight: "bold",
            color: "#000000",
          }}
        >
          {content?.subTitle || ""}
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
          background: "#134465",
          borderRadius: "14px",
          padding: "10px 20px",
          justifyContent: { xs: "space-evenly", sm: "space-between" },
        }}
      >
        {(content?.tabNames || [])?.map((item) => (
          <Button
            key={item?.id}
            onClick={() => setSelectedImgType([item?.id])}
            sx={{
              height: { xs: "40px", sm: "50px" },
              margin: { xs: "3px 0", sm: 0 },
              background: selectedImgType?.includes(item?.id)
                ? "#FAB900"
                : "black",
              textTransform: "capitalize",
              color: selectedImgType?.includes(item?.id)
                ? "#000000"
                : "#ffffff",
              fontSize: { xs: "14px", sm: "18px" },
              padding: { xs: "7px 10px", sm: "10px 30px" },
              borderRadius: "11px",
              ":hover": {
                background: selectedImgType?.includes(item?.id)
                  ? "#FAB900"
                  : "#185A86",
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
        xs={content?.sliderCol?.xs}
        sm={content?.sliderCol?.sm}
        md={content?.sliderCol?.md}
        lg={content?.sliderCol?.lg}
        xl={content?.sliderCol?.xl}
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          marginTop: "30px",
          position: "relative",
          // border: "1px solid black",
        }}
      >
        <Grid
          item
          xs={1}
          justifyContent="flex-start"
          alignItems="center"
          sx={{
            height: "100%",
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Grid
            sx={{
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              background: "rgba(249, 184, 0, 0.7) !important",
              olor: currentExpIdx === 0 ? "grey" : "#000000",
              cursor: "pointer",
            }}
            onClick={() => sliderRef?.current?.slidePrev()}
          >
            <ArrowBackIosRoundedIcon sx={{ fontSize: "20px" }} />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={11}
          sm={10}
          sx={{
            height: { xs: "250px", sm: "550px" },
            zIndex: 0,
          }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            onSlideChange={(swiper) => {
              const currIdx = swiper.activeIndex;
              setCurrentExpIdx(currIdx);
            }}
            onSwiper={(sw) => {
              sliderRef.current = sw;
            }}
            className="mySwiper"
            style={{ width: "100%", height: "100%" }}
          >
            {(galleryImgList || []).map((item, index) => (
              <SwiperSlide
                style={{ width: "100%", height: "100%", zIndex: 0 }}
                key={index}
              >
                <Grid
                  item
                  xs={12}
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "20px",
                    position: "relative",
                    overflow: "hidden",
                    zIndex: 0,
                  }}
                >
                  <Image
                    fill
                    src={item}
                    sizes="100vw"
                    alt="location"
                    style={{ zIndex: 0 }}
                  />
                  <Grid
                    container
                    item
                    xs={12}
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      justifyContent: "space-between",
                      display: { xs: "flex", sm: "none" },
                    }}
                  >
                    <Grid
                      item
                      xs={1}
                      display="flex"
                      justifyContent="flex-start"
                      alignItems="center"
                      sx={{
                        height: "100%",
                      }}
                    >
                      <Button
                        onClick={() => sliderRef?.current?.slidePrev()}
                        disabled={currentExpIdx === 0}
                        sx={{
                          background: "rgba(249, 184, 0, 0.7) !important",
                          color: currentExpIdx === 0 ? "grey" : "#000000",
                          boxShadow: "none !important",
                          borderRadius: "50% !important",
                          height: "60px",
                          width: "40px",
                        }}
                        variant="contained"
                      >
                        <ArrowBackIosRoundedIcon sx={{ fontSize: "20px" }} />
                      </Button>
                    </Grid>
                    <Grid
                      item
                      xs={1}
                      display="flex"
                      justifyContent="flex-end"
                      alignItems="center"
                      sx={{
                        height: "100%",
                      }}
                    >
                      <Button
                        onClick={() => sliderRef?.current?.slideNext()}
                        disabled={currentExpIdx === galleryImgList.length - 1}
                        style={{
                          background: "rgba(249, 184, 0, 0.7)",
                          color:
                            currentExpIdx === galleryImgList.length - 1
                              ? "grey"
                              : "#000000",
                          boxShadow: "none",
                          height: "60px",
                          width: "40px",
                          borderRadius: "50%",
                          // border: "1px solid #000000",
                        }}
                        variant="contained"
                      >
                        <ArrowForwardIosRoundedIcon sx={{ fontSize: "20px" }} />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        <Grid
          item
          xs={1}
          justifyContent="flex-end"
          alignItems="center"
          sx={{
            height: "100%",
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Grid
            sx={{
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              background: "rgba(249, 184, 0, 0.7) !important",
              olor: currentExpIdx === 0 ? "grey" : "#000000",
              cursor: "pointer",
            }}
            onClick={() => sliderRef?.current?.slideNext()}
          >
            <ArrowForwardIosRoundedIcon sx={{ fontSize: "20px" }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
Gallery.propTypes = {
  content: PropTypes.object.isRequired,
};
