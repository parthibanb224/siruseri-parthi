import React, { useState, useRef, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import exterior1 from "../../../../public/nlpImages/Exterior/Exterior 1.jpg";
import exterior2 from "../../../../public/nlpImages/Exterior/Exterior 2.jpg";
import exterior3 from "../../../../public/nlpImages/Exterior/Exterior 3.jpg";
import exterior4 from "../../../../public/nlpImages/Exterior/Exterior 4.jpg";
import interior1 from "../../../../public/Images-new/interier1.jpg";
import interior2 from "../../../../public/Images-new/interier2.jpg";
import interior3 from "../../../../public/Images-new/interier3.jpg";
import interior4 from "../../../../public/Images-new/interier4.jpg";
import interior5 from "../../../../public/Images-new/interier5.jpg";
import interior6 from "../../../../public/Images-new/interier6.jpg";
import interior7 from "../../../../public/Images-new/interier7.jpg";
import interior8 from "../../../../public/Images-new/interier8.jpg";

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
      xl: 3,
    },
    tabNames: [
      {
        id: 1,
        name: "Exterior",
      },
      {
        id: 2,
        name: "Interior",
      },
      {
        id: 3,
        name: "360°",
      },
    ],
    sliderCol: {
      xs: 12,
      sm: 10,
    },
  },
];

export default function Gallery({}) {
  const content = data[0];
  const [selectedImgType, setSelectedImgType] = useState([1]);
  const sliderRef = useRef();

  const [currentExpIdx, setCurrentExpIdx] = useState(0);

  const [galleryImgList, setGalleryImgList] = useState([]);

  useEffect(() => {
    const exteriorImg = [exterior4, exterior1, exterior2, exterior3];
    const interiorImg = [
      interior5,
      interior6,
      interior7,
      interior8,
      interior1,
      interior2,
      interior3,
      interior4,
    ];

    if (selectedImgType.includes(1)) {
      setGalleryImgList(exteriorImg);
    } else if (selectedImgType.includes(2)) {
      setGalleryImgList(interiorImg);
    }
  }, [selectedImgType]);

  return (
    <Grid
      id="Gallery"
      container
      item
      xs={content?.containerCol?.xs}
      sm={content?.containerCol?.sm}
      md={content?.containerCol?.md}
      lg={content?.containerCol?.lg}
      xl={content?.containerCol?.xl}
      sx={{
        padding: { xs: "30px 0 30px 0", sm: "20px 0 20px 0" },
        justifyContent: "center",
      }}
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
          {"A Perfect Blend"}
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
            padding: "0px 0 10px 0",
            fontSize: { xs: "13px", sm: "16px" },
          }}
        >
          {"Elegant Interiors and Captivating Exteriors Designed for You"}
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
            onClick={() => setSelectedImgType([item?.id])}
            sx={{
              height: { xs: "40px", sm: "50px" },
              margin: { xs: "3px 0", sm: 0 },
              background: selectedImgType?.includes(item?.id)
                ? "#0d6efd"
                : "#FFFFFF",
              textTransform: "capitalize",
              color: selectedImgType?.includes(item?.id) ? "#fff" : "#000000",
              fontSize: { xs: "14px", sm: "18px" },
              border: "1px solid #000000",
              padding: { xs: "7px 10px", sm: "10px 30px" },
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
              // color: currentExpIdx === 0 ? "grey" : "#000000",
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
            overflow: "hidden",
          }}
        >
          {selectedImgType.includes(3) ? (
            <iframe
              title="sitemap"
              src="https://my.matterport.com/show/?m=3n11GCNsTPT"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              onSlideChange={(swiper) => {
                const currIdx = swiper.activeIndex;
                setCurrentExpIdx(currIdx);
              }}
              onSwiper={(sw) => {
                sliderRef.current = sw;
              }}
              modules={[EffectFade, Navigation, Pagination, Autoplay]}
              className="mySwiper"
              style={{ width: "100%", height: "100%" }}
            >
              {(galleryImgList || []).map((item, index) => (
                <SwiperSlide
                  style={{
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                    overflow: "hidden",
                  }}
                  key={index}
                >
                  <Grid
                    container
                    item
                    xs={12}
                    sx={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "20px",
                      position: "relative",
                      overflow: "hidden",
                      zIndex: 0,
                    }}
                  >
                    <Image src={item} sizes="100vw" fill />
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
                          <ArrowForwardIosRoundedIcon
                            sx={{ fontSize: "20px" }}
                          />
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
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
              // color:
              //   currentExpIdx === galleryImgList?.length - 1
              //     ? "grey"
              //     : "#000000",
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
