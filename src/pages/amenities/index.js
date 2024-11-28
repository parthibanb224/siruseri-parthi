import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Dialog from "@mui/material/Dialog";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";

import { LoadingButton } from "@mui/lab";
import CallIcon from "@mui/icons-material/Call";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DownloadIcon from "@mui/icons-material/Download";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import { Navigation, Pagination, Autoplay } from "swiper";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import DomainRoundedIcon from "@mui/icons-material/DomainRounded";
import layoutData from "./layout.json";
import useForm from "../../useForm";

// swiper js
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/autoplay";

// Contact Logos

// exterior images
import exterior1 from "../../../public/nlpImages/Exterior/Exterior6.jpeg";
import exterior2 from "../../../public/nlpImages/Exterior/Exterior7.jpeg";
import exterior3 from "../../../public/nlpImages/Exterior/Exterior 3.jpg";
import exterior4 from "../../../public/nlpImages/Exterior/Exterior 4.jpg";

// interior images
import interior from "../../../public/nlpImages/Interior/Interior4.jpeg";
import interior1 from "../../../public/nlpImages/Interior/Interior5.jpeg";
import interior2 from "../../../public/nlpImages/Interior/Interior6.jpeg";
import interior3 from "../../../public/nlpImages/Interior/Interior7.jpeg";

// rooftop images
import roofTop from "../../../public/nlpImages/RoofTop/Rooftop.jpg";
import roofTop3 from "../../../public/nlpImages/RoofTop/Rooftop3.jpg";
import roofTop4 from "../../../public/nlpImages/RoofTop/Rooftop 4.jpg";
import roofTop5 from "../../../public/nlpImages/RoofTop/Roof top 5.jpg";

// tower to tower images
import towerToTower from "../../../public/nlpImages/Tower_to_tower/Tower to tower.jpg";
import towerToTower1 from "../../../public/nlpImages/Tower_to_tower/Tower to tower 1.jpg";
import towerToTower2 from "../../../public/nlpImages/Tower_to_tower/Tower to tower 2.jpg";
import towerToTower3 from "../../../public/nlpImages/Tower_to_tower/Tower to tower 3.jpg";
import towerToTower4 from "../../../public/nlpImages/Tower_to_tower/Tower to tower 4.jpg";

import wojLogo from "../../../public/nlpImages/TWOJ_logo.webp";

import urbanriseLogo from "../../../public/nlpImages/urbanrise_logo.webp";

// Amenities Images

// accessibilityConvenience
import accessibilityConvenience1 from "../../../public/nlpImages/accessibilityConvenience/accessibilityConvenience1.jpg";
import accessibilityConvenience1Mb from "../../../public/nlpImages/accessibilityConvenience/accessibilityConvenience1Mb.jpg";
import accessibilityConvenience2 from "../../../public/nlpImages/accessibilityConvenience/accessibilityConvenience2.jpg";
import accessibilityConvenience2Mb from "../../../public/nlpImages/accessibilityConvenience/accessibilityConvenience2Mb.jpg";
import accessibilityConvenience3 from "../../../public/nlpImages/accessibilityConvenience/accessibilityConvenience3.jpg";
import accessibilityConvenience3Mb from "../../../public/nlpImages/accessibilityConvenience/accessibilityConvenience3Mb.jpg";
import accessibilityConvenience4 from "../../../public/nlpImages/accessibilityConvenience/accessibilityConvenience4.jpg";
import accessibilityConvenience4Mb from "../../../public/nlpImages/accessibilityConvenience/accessibilityConvenience4Mb.jpg";

// Fun Frolic imagaes
import funfrolic1 from "../../../public/nlpImages/funFrolic/funFrolic1.jpg";
import funfrolic1Mb from "../../../public/nlpImages/funFrolic/funFrolic1Mb.jpg";
import funfrolic2 from "../../../public/nlpImages/funFrolic/funFrolic2.jpg";
import funfrolic2Mb from "../../../public/nlpImages/funFrolic/funFrolic2Mb.jpg";
import funfrolic3 from "../../../public/nlpImages/funFrolic/funFrolic3.jpg";
import funfrolic3Mb from "../../../public/nlpImages/funFrolic/funFrolic3Mb.jpg";

// Mental ExercisesRejuvenation Images

import mentalExercisesRejuvenation1 from "../../../public/nlpImages/mentalExercisesRejuvenation/mentalExercisesRejuvenation1.jpg";
import mentalExercisesRejuvenation1Mb from "../../../public/nlpImages/mentalExercisesRejuvenation/mentalExercisesRejuvenation1Mb.jpg";
import mentalExercisesRejuvenation2 from "../../../public/nlpImages/mentalExercisesRejuvenation/mentalExercisesRejuvenation2.jpg";
import mentalExercisesRejuvenation2Mb from "../../../public/nlpImages/mentalExercisesRejuvenation/mentalExercisesRejuvenation2Mb.jpg";
import mentalExercisesRejuvenation3 from "../../../public/nlpImages/mentalExercisesRejuvenation/mentalExercisesRejuvenation3.jpg";
import mentalExercisesRejuvenation3Mb from "../../../public/nlpImages/mentalExercisesRejuvenation/mentalExercisesRejuvenation3Mb.jpg";

// Entertainment Images
import entertainment1 from "../../../public/nlpImages/entertainment/entertainment1.jpg";
import entertainment1Mb from "../../../public/nlpImages/entertainment/entertainment1Mb.jpg";
import entertainment2 from "../../../public/nlpImages/entertainment/entertainment2.jpg";
import entertainment2Mb from "../../../public/nlpImages/entertainment/entertainment2Mb.jpg";
import entertainment3 from "../../../public/nlpImages/entertainment/entertainment3.jpg";
import entertainment3Mb from "../../../public/nlpImages/entertainment/entertainment3Mb.jpg";

// Banner Image
import db from "../../../public/nlpImages/db.png";
import mb from "../../../public/nlpImages/mb.png";

// Construction Images
import construction1 from "../../../public/nlpImages/construction/construction1.png";
import construction2 from "../../../public/nlpImages/construction/construction2.png";
import construction3 from "../../../public/nlpImages/construction/construction3.png";
import construction4 from "../../../public/nlpImages/construction/construction4.png";
import construction5 from "../../../public/nlpImages/construction/construction5.png";
import construction6 from "../../../public/nlpImages/construction/construction6.png";
import construction7 from "../../../public/nlpImages/construction/construction7.png";
import construction8 from "../../../public/nlpImages/construction/construction8.png";

// Physical Excercise Images
import physicalExercises1 from "../../../public/nlpImages/physicalExercises/physicalExercises1.jpg";
import physicalExercises1Mb from "../../../public/nlpImages/physicalExercises/physicalExercises1Mb.jpg";
import physicalExercises2 from "../../../public/nlpImages/physicalExercises/physicalExercises2.jpg";
import physicalExercises2Mb from "../../../public/nlpImages/physicalExercises/physicalExercises2Mb.jpg";
import physicalExercises3 from "../../../public/nlpImages/physicalExercises/physicalExercises3.jpg";
import physicalExercises3Mb from "../../../public/nlpImages/physicalExercises/physicalExercises3Mb.jpg";
import physicalExercises4 from "../../../public/nlpImages/physicalExercises/physicalExercises4.jpg";
import physicalExercises4Mb from "../../../public/nlpImages/physicalExercises/physicalExercises4Mb.jpg";

// Safety Images
import safety1 from "../../../public/nlpImages/safety/safety1.jpg";
import safety1Mb from "../../../public/nlpImages/safety/safety1Mb.jpg";
import safety2 from "../../../public/nlpImages/safety/safety2.jpg";
import safety2Mb from "../../../public/nlpImages/safety/safety2Mb.jpg";
import safety3 from "../../../public/nlpImages/safety/safety3.jpg";
import safety3Mb from "../../../public/nlpImages/safety/safety3Mb.jpg";
import safety4 from "../../../public/nlpImages/safety/safety4.jpg";
import safety4Mb from "../../../public/nlpImages/safety/safety4Mb.jpg";

// Social Hangouts Images
import socialHangouts1 from "../../../public/nlpImages/socialHangouts/socialHangouts1.jpg";
import socialHangouts1Mb from "../../../public/nlpImages/socialHangouts/socialHangouts1Mb.jpg";
import socialHangouts2 from "../../../public/nlpImages/socialHangouts/socialHangouts2.jpg";
import socialHangouts2Mb from "../../../public/nlpImages/socialHangouts/socialHangouts2Mb.jpg";
import socialHangouts3 from "../../../public/nlpImages/socialHangouts/socialHangouts3.jpg";
import socialHangouts3Mb from "../../../public/nlpImages/socialHangouts/socialHangouts3Mb.jpg";
import socialHangouts4 from "../../../public/nlpImages/socialHangouts/socialHangouts4.jpg";
import socialHangouts4Mb from "../../../public/nlpImages/socialHangouts/socialHangouts4Mb.jpg";

// Learning Engagement Image
import learningAndEngagement1 from "../../../public/nlpImages/learningAndEngagement/learningAndEngagement1.jpg";
import learningAndEngagement1Mb from "../../../public/nlpImages/learningAndEngagement/learningAndEngagement1Mb.jpg";
import learningAndEngagement2 from "../../../public/nlpImages/learningAndEngagement/learningAndEngagement2.jpg";
import learningAndEngagement2Mb from "../../../public/nlpImages/learningAndEngagement/learningAndEngagement2Mb.jpg";
import learningAndEngagement3 from "../../../public/nlpImages/learningAndEngagement/learningAndEngagement3.jpg";
import learningAndEngagement3Mb from "../../../public/nlpImages/learningAndEngagement/learningAndEngagement3Mb.jpg";
import learningAndEngagement4 from "../../../public/nlpImages/learningAndEngagement/learningAndEngagement4.jpg";
import learningAndEngagement4Mb from "../../../public/nlpImages/learningAndEngagement/learningAndEngagement4Mb.jpg";

// Sports Image
import sports1 from "../../../public/nlpImages/activeSportsGames/activeSportsGames1.jpg";
import sports1Mb from "../../../public/nlpImages/activeSportsGames/activeSportsGames1Mb.jpg";
import sports2 from "../../../public/nlpImages/activeSportsGames/activeSportsGames2.jpg";
import sports2Mb from "../../../public/nlpImages/activeSportsGames/activeSportsGames2Mb.jpg";
import sports3 from "../../../public/nlpImages/activeSportsGames/activeSportsGames3.jpg";
import sports3Mb from "../../../public/nlpImages/activeSportsGames/activeSportsGames3Mb.jpg";
import sports4 from "../../../public/nlpImages/activeSportsGames/activeSportsGames4.jpg";
import sports4Mb from "../../../public/nlpImages/activeSportsGames/activeSportsGames4Mb.jpg";
import sports5 from "../../../public/nlpImages/activeSportsGames/activeSportsGames5.jpg";
import sports5Mb from "../../../public/nlpImages/activeSportsGames/activeSportsGames5Mb.jpg";
import sports6 from "../../../public/nlpImages/activeSportsGames/activeSportsGames6.jpg";
import sports6Mb from "../../../public/nlpImages/activeSportsGames/activeSportsGames6Mb.jpg";
import sports7 from "../../../public/nlpImages/activeSportsGames/activeSportsGames7.jpg";
import sports7Mb from "../../../public/nlpImages/activeSportsGames/activeSportsGames7Mb.jpg";
import sports8 from "../../../public/nlpImages/activeSportsGames/activeSportsGames8.jpg";
import sports8Mb from "../../../public/nlpImages/activeSportsGames/activeSportsGames8Mb.jpg";

const themeColors = {
  primary: "#AF2226",
  secondary: "#DF2127",
  surprise: "#FAB900",
};

const themeRef = {
  borderRadius: "0px 25px 0px 15px",
};

export default function Template({
  lpImg,
  lpImgXs,
  lpImgSize,
  lpImgXsSize,
  pageProps,
}) {
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [enqText, setEnqText] = useState(null);
  const [, setIsVisible] = useState(false);

  const [navSwitch, setNavSwitch] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNavSwitch(!window.pageYOffset > 0);
    });
  }, []);

  const listenToScroll = () => {
    const heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Urbanrise</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container flexDirection="column" sx={{ position: "relative" }}>
        {(layoutData || []).map((item) => {
          switch (item.type) {
            case "navBar":
              return (
                <Navbar
                  key={item.id}
                  content={item}
                  pageProps={pageProps}
                  navSwitch={navSwitch}
                  setOpenEnquiry={setOpenEnquiry}
                />
              );

            case "bannerImg":
              return (
                <Grid xs={12} component="section" sx={{}}>
                  <BannerImg
                    lpImg={lpImg}
                    lpImgXs={lpImgXs}
                    lpImgSize={lpImgSize}
                    lpImgXsSize={lpImgXsSize}
                    pageProps={pageProps}
                    content={item}
                  />
                </Grid>
              );
            case "walkthrough":
              return (
                <Box component="section" id="Videos" sx={{ width: "100%" }}>
                  <WalkThrough key={item.id} content={item} />
                </Box>
              );

            case "amenities":
              return (
                <Box component="section" id="Amenities" sx={{ width: "100%" }}>
                  <Amenties
                    key={item.id}
                    setOpenEnquiry={setOpenEnquiry}
                    content={item}
                  />
                </Box>
              );
            case "projectHighlights":
              return (
                <Box component="section" id="Highlights" sx={{ width: "100%" }}>
                  <ProjectHighlights key={item.id} content={item} />
                </Box>
              );

            case "gallery":
              return (
                <Box component="section" id="Gallery" sx={{ width: "100%" }}>
                  <Gallery
                    key={item.id}
                    setOpenEnquiry={setOpenEnquiry}
                    content={item}
                  />
                </Box>
              );

            case "location":
              return (
                <Box component="section" id="Location" sx={{ width: "100%" }}>
                  <LocationAdvantages key={item.id} content={item} />
                </Box>
              );

            case "downloads":
              return (
                <Box component="section" id="Contact" sx={{ width: "100%" }}>
                  <LandingPage
                    key={layoutData[1].id}
                    content={layoutData[1]}
                    contactDetails={item?.contactDetails}
                  />
                </Box>
              );

            case "contactDetails":
              return <Footer />;

            default:
              return null;
          }
        })}
        <Grid
          container
          item
          xs={12}
          sx={{
            justifyContent: { xs: "center", md: "flex-end" },
            zIndex: "100",
          }}
        >
          <Contact setOpenEnquiry={setOpenEnquiry} pageProps={pageProps} />
        </Grid>
        <EnquiryFormPopup
          openEnquiry={openEnquiry}
          setOpenEnquiry={setOpenEnquiry}
          text={enqText}
          setEnqText={setEnqText}
        />
      </Grid>
    </>
  );
}
Template.propTypes = {
  lpImg: PropTypes.object.isRequired,
  lpImgXs: PropTypes.object.isRequired,
  lpImgSize: PropTypes.object.isRequired,
  lpImgXsSize: PropTypes.object.isRequired,
  pageProps: PropTypes.object.isRequired,
};
function Navbar({ content, pageProps, navSwitch, setOpenEnquiry }) {
  const [drawerState, setDrawerState] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");
  const navRef = useRef();
  const scrollToView = (target) => {
    const section = document.querySelector(target?.replace(/\s/g, ""));
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <AppBar
      ref={navRef}
      sx={{
        width: navSwitch ? "95%" : "100%",
        position: navSwitch ? "absolute" : "fixed",
        top: navSwitch ? { md: "10px", xs: "3px" } : "0",
        left: navSwitch ? "2.5%" : "0",
        background: navSwitch ? "#fff" : "#fff",
        boxShadow: navSwitch
          ? "none"
          : "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        borderRadius: navSwitch ? themeRef?.borderRadius : "none",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="100%"
        sx={{
          display: "flex",
          alignItems: "center",

          padding: { xs: "0px 0px 0px 5px", md: "0px" },
          boxShadow: "0 0 15px #000000",
          height: { xs: navSwitch ? "40px" : "48px", md: "80px" },
        }}
      >
        <Grid
          container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Grid
            container
            item
            xs={6}
            sm={2}
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            sx={{
              height: { xs: "35px", sm: "60px" },
              overflow: "hidden",
              position: "relative",
              // marginLeft:'10px'
            }}
          >
            <Image
              src={urbanriseLogo}
              alt="logo"
              style={{
                height: "100%",
                width: "auto",
                objectFit: "cover",
              }}
              sizes="100vw"
            />
            <Image
              src={wojLogo}
              alt="logo"
              style={{
                height: "100%",
                width: "auto",
                objectFit: "cover",
              }}
              sizes="100vw"
            />
          </Grid>
          <Grid
            container
            item
            xs={1}
            sm={5}
            sx={{ visibility: { xs: "hidden", md: "visible" } }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexGrow: "1",
                gap: "10px",
              }}
            >
              {(content?.sections || []).map((item) => (
                <Typography
                  key={item}
                  onClick={() => {
                    scrollToView(`#${item}`);
                    setSelectedSection(item);
                  }}
                  sx={{
                    fontSize: "15px",
                    color: navSwitch
                      ? themeColors?.primary
                      : themeColors?.primary,

                    fontWeight: selectedSection === item ? "bold" : "none",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    borderRadius: "10px",
                  }}
                >
                  {item || ""}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Button
            variant="contained"
            sx={{
              width: "150px",
              backgroundColor: themeColors?.primary,
              fontWeight: "600",
              display: { xs: "none", md: "block" },
              borderRadius: "0px 15px 0px 10px",
              fontSize: "15px",
              ":hover": {
                backgroundColor: themeColors?.primary,
              },
            }}
            onClick={() => setOpenEnquiry(true)}
          >
            ENQUIRE NOW
          </Button>
          <Grid
            container
            item
            xs={2}
            alignItems="center"
            paddingLeft="0"
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              position: "relative",
              width: "100%",
              height: "100px",
            }}
          >
            <PhoneIcon
              sx={{
                color: navSwitch
                  ? themeColors?.secondary
                  : themeColors?.secondary,
              }}
            />
            <Typography
              component="p"
              sx={{
                color: navSwitch
                  ? themeColors?.primary
                  : themeColors?.secondary,
                marginLeft: "10px",
              }}
            >
              {pageProps?.phoneNo || "+91 9718355555"}
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={1}
            alignItems="center"
            paddingRight="5px"
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                justifyContent: "center",
                // color: "#ffffff",
              }}
            >
              <IconButton
                onClick={() => setDrawerState(!drawerState)}
                size="small"
                edge="start"
                color="#000"
                aria-label="menu"
              >
                <MenuIcon sx={{ fontSize: navSwitch ? "20px" : "30px" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <NavbarDrawer
        drawerState={drawerState}
        setDrawerState={setDrawerState}
        sectionNames={content?.sections}
      />
    </AppBar>
  );
}
Navbar.propTypes = {
  content: PropTypes.object.isRequired,
  pageProps: PropTypes.object.isRequired,
};

function NavbarDrawer({ drawerState, setDrawerState, sectionNames }) {
  const [selectedSection, setSelectedSection] = useState("");

  const scrollToView = (target) => {
    const section = document.querySelector(target?.replace(/\s/g, ""));
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Collapse
      in={drawerState}
      sx={{
        width: "100%",
      }}
    >
      <Grid
        container
        item
        rowSpacing={5}
        padding="15px"
        sx={{
          background: "rgba(0, 0, 0, 0.9)",
          marginTop: "0",
          zIndex: "100",
        }}
      >
        {(sectionNames || [])?.map((item) => (
          <Grid
            item
            key={item}
            sm={12}
            xs={12}
            display="flex"
            justifyContent="center"
            style={{ padding: "10px" }}
          >
            <Typography
              onClick={() => {
                scrollToView(`#${item}`);
                setDrawerState(false);
                setSelectedSection(item);
              }}
              sx={{
                fontSize: 14,
                padding: "10px 20px",
                textTransform: "capitalize",
                width: "fit-content",
                background: selectedSection === item ? "#006CB5" : "none",
                color: "#fff",
                borderRadius: "10px",
                ":hover": {
                  color: "#8a7007",
                },
              }}
            >
              {item || ""}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Collapse>
  );
}
NavbarDrawer.propTypes = {
  drawerState: PropTypes.bool.isRequired,
  setDrawerState: PropTypes.func.isRequired,
  sectionNames: PropTypes.array.isRequired,
};

function LandingPage({ content, contactDetails }) {
  const {
    userData,
    errorMsgs,
    isLoading,
    setUserData,
    setIsDirty,
    submitForm,
  } = useForm();

  const logos = {
    locationLogo: (
      <LocationOnIcon
        sx={{ color: "#fff", fontSize: { xs: "1.8rem", md: "2.8rem" } }}
      />
    ),
    mailLogo: (
      <MarkunreadIcon
        sx={{ color: "#fff", fontSize: { xs: "1.8rem", md: "2.8rem" } }}
      />
    ),
    callLogo: (
      <CallIcon
        sx={{ color: "#fff", fontSize: { xs: "1.8rem", md: "2.8rem" } }}
      />
    ),
  };
  return (
    <Grid
      container
      item
      xs={12}
      sm={content?.containerCol?.sm}
      md={content?.containerCol?.md}
      lg={content?.containerCol?.lg}
      xl={content?.containerCol?.xl}
      sx={{
        background: "#05070bed",
        position: "relative",
        height: { md: "38rem", xs: "45rem" },
        marginTop: "4rem",
      }}
    >
      <Grid
        container
        item
        md={5}
        xs={12}
        sx={{
          justifyContent: "center",
          marginLeft: { md: "15rem", xs: "5px" },
          padding: "2rem 0px",
          marginTop: { xs: "32rem", md: "0px" },
        }}
      >
        {(contactDetails || []).map((contact) => {
          return (
            <ContactList
              logo={logos[contact?.logo]}
              title={contact?.title}
              content={contact?.content}
            />
          );
        })}
      </Grid>

      <Box
        sx={{
          width: { md: "40%", xs: "97%" },
          height: {},
          backgroundColor: themeColors?.primary,
          borderRadius: "0px 50px 0px 50px",
          position: "absolute",
          top: { md: "80px", xs: "40px" },
          left: { xs: "5px", md: "50%" },
          right: { xs: "5px", md: "20px" },
          bottom: { md: "40px", xs: "230px" },
        }}
      >
        <Grid
          container
          item
          xs={content?.containerCol?.md}
          sm={content?.containerCol?.sm}
          md={content?.containerCol?.md}
          lg={content?.containerCol?.lg}
          xl={content?.containerCol?.xl}
          alignItems="center"
          sx={{
            // background: content?.style?.containerBg,

            paddingLeft: { xs: 0, sm: "50px" },
            justifyContent: { xs: "center", sm: "left" },
            position: "absolute",
            width: "100%",
          }}
        >
          <Grid
            container
            item
            xs={content?.innerContainerCol?.xs}
            sm={content?.innerContainerCol?.sm}
            md={content?.innerContainerCol?.md}
            lg={content?.innerContainerCol?.lg}
            xl={content?.innerContainerCol?.xl}
            display="flex"
            justifyContent="space-between"
            sx={{
              borderRadius: "24px",
              height: { xs: "100%", sm: "100%" },
            }}
          >
            <Grid
              container
              item
              xs={12}
              sx={{
                borderRadius: "20px",
                justifyContent: "center",
                alignContent: "flex-start",
                display: { xs: "flex" },
                paddingBottom: "50px",
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  height: "10px",
                }}
              />
              <Grid item xs={12}>
                <Typography
                  component="h1"
                  sx={{
                    padding: "30px 0 10px 0",
                    fontSize: "32px",
                    fontWeight: "bold",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  Contact Us
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    color: "#fff",
                    textAlign: "center",
                    fontSize: "18px",
                    marginBottom: "10px",
                  }}
                />
              </Grid>
              <Grid container item xs={11} justifyContent="flex-start">
                <Grid container item xs={12} style={{ margin: "20px 0" }}>
                  <Grid
                    item
                    xs={12}
                    style={{
                      margin: "10px 0 0 0",
                    }}
                  >
                    <TextField
                      type="text"
                      id="outlined-basi01"
                      value={userData.userName}
                      error={!!errorMsgs.userName}
                      helperText={errorMsgs?.userName || ""}
                      onBlur={() => {
                        setIsDirty((d) => ({
                          ...d,
                          userName: true,
                        }));
                      }}
                      onChange={(e) => {
                        setUserData({
                          ...userData,
                          userName: e.target.value || "",
                        });
                      }}
                      placeholder="Name"
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root .MuiInputBase-input": {
                          background: "rgba(0, 0, 0, 0.04)",
                          borderRadius: "9px",
                        },
                        "& .MuiFormHelperText-root": {
                          fontSize: "12px",
                        },
                        "& .MuiInputBase-root": {
                          backgroundColor: "white",
                        },
                      }}
                      InputProps={{
                        sx: {
                          height: "50px",
                        },
                      }}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ margin: "20px 0" }}>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      id="outlined-basic02"
                      value={userData.phoneNo}
                      error={!!errorMsgs.phoneNo}
                      helperText={errorMsgs?.phoneNo || ""}
                      onBlur={() => {
                        setIsDirty((d) => ({
                          ...d,
                          phoneNo: true,
                        }));
                      }}
                      onChange={(e) => {
                        setUserData({
                          ...userData,
                          phoneNo: e.target.value || "",
                        });
                      }}
                      placeholder="Phone number"
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root .MuiInputBase-input": {
                          background: "rgba(0, 0, 0, 0.04)",
                        },
                        "& .MuiFormHelperText-root": {
                          fontSize: "12px",
                        },
                        "& .MuiInputBase-root": {
                          backgroundColor: "white",
                        },
                      }}
                      InputProps={{
                        sx: {
                          height: "50px",
                        },
                      }}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ margin: "20px 0" }}>
                  <Grid item xs={12}>
                    <TextField
                      type="email"
                      id="outlined-basic03"
                      value={userData.email}
                      error={!!errorMsgs.email}
                      helperText={errorMsgs?.email || ""}
                      onBlur={() => {
                        setIsDirty((d) => ({
                          ...d,
                          email: true,
                        }));
                      }}
                      onChange={(e) => {
                        setUserData({
                          ...userData,
                          email: e.target.value || "",
                        });
                      }}
                      placeholder="Email"
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root .MuiInputBase-input": {
                          background: "rgba(0, 0, 0, 0.04)",
                        },
                        "& .MuiFormHelperText-root": {
                          fontSize: "12px",
                        },
                        "& .MuiInputBase-root": {
                          backgroundColor: "white",
                        },
                      }}
                      InputProps={{
                        sx: {
                          height: "50px",
                        },
                      }}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ paddingTop: "10px", textAlign: "center" }}
                >
                  <LoadingButton
                    onClick={() => submitForm()}
                    style={{
                      height: "50px",
                      background: "#cfe7ff",
                      textTransform: "capitalize",
                      color: "#272727",
                      fontWeight: "bold",
                      fontSize: "18px",
                      backgroundColor: themeColors?.secondary,
                      color: "#fff",
                    }}
                    loading={isLoading}
                    variant="contained"
                  >
                    Submit
                  </LoadingButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
LandingPage.propTypes = {
  content: PropTypes.object.isRequired,
};
function ContactList({ logo, title, content }) {
  return (
    <Grid
      container
      item
      xs={6}
      md={12}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Grid
        item
        xs={2}
        md={3}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {logo}
      </Grid>
      <Grid iotem md={9} xs={9} component="div">
        <Typography
          component="h1"
          sx={{
            textTransform: "uppercase",
            padding: "7px 0 0 0",
            margin: "0px 0 0 0",
            fontWeight: "700",
            fontSize: { md: "22px", xs: "16px" },
            color: "rgba(255,255,255,1)",
          }}
        >
          {title}
        </Typography>
        <Typography
          component="p"
          sx={{
            lineHeight: "26px",
            textAlign: "justify",
            fontSize: { md: "18px!important", xs: "14px" },
            color: "rgba(255,255,255,1)",
          }}
        >
          {content}
        </Typography>
      </Grid>
    </Grid>
  );
}

function PriceDetails({ content, setOpenEnquiry }) {
  return (
    <About paraGraph={content?.paraGraph} setOpenEnquiry={setOpenEnquiry} />
  );
}
PriceDetails.propTypes = {
  content: PropTypes.object.isRequired,
  setOpenEnquiry: PropTypes.func.isRequired,
};

function About({ paraGraph, setOpenEnquiry }) {
  return (
    <Grid
      container
      xs={12}
      sx={{ justifyContent: "center", margion: "3rem 0px" }}
    >
      <Grid
        item
        xs={11}
        md={4.5}
        sx={{
          height: { md: "25rem", xs: "15rem" },
          position: "relative",
          overflow: "hidden",
          borderRadius: "0px 45px 0px 25px",
        }}
      >
        <Image fill src={exterior4} />
      </Grid>
      <Grid container item md={4.5} xs={12} sx={{}}>
        <Grid container item xs={12}>
          <Header text="The World of Joy" />
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="p"
            sx={{
              padding: { md: "0px 2rem", xs: "0px 1.5rem" },
              fontSize: "18px",
              lineHeight: "32px",
              textAlign: "justify",
              fontWeight: "500",
            }}
          >
            {paraGraph}
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sx={{ dispaly: "flex", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            onClick={() => setOpenEnquiry(true)}
            sx={{
              backgroundColor: themeColors?.surprise,
              color: "#000",
              height: { md: "2.5rem", xs: "1.8rem" },
              margin: "1rem 0px",
              ":hover": {
                backgroundColor: themeColors?.surprise,
              },
            }}
          >
            Download Brochure
            <DownloadIcon sx={{ marginLeft: "6px", fontSize: "1.6rem" }} />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
About.propTypes = {
  paraGraph: PropTypes.string.isRequired,
};

function Amenties({ content, setOpenEnquiry }) {
  const [selectedImgType, setSelectedImgType] = useState([0]);
  const [galleryImgList, setGalleryImgList] = useState([]);

  useEffect(() => {
    const accessibilityConvenienceImg = [
      {
        lg: accessibilityConvenience1,
        mb: accessibilityConvenience1Mb,
      },
      {
        lg: accessibilityConvenience2,
        mb: accessibilityConvenience2Mb,
      },
      {
        lg: accessibilityConvenience3,
        mb: accessibilityConvenience3Mb,
      },
      {
        lg: accessibilityConvenience4,
        mb: accessibilityConvenience4Mb,
      },
    ];
    const funFrolicImg = [
      {
        lg: funfrolic1,
        mb: funfrolic1Mb,
      },
      {
        lg: funfrolic2,
        mb: funfrolic2Mb,
      },
      {
        lg: funfrolic3,
        mb: funfrolic3Mb,
      },
    ];
    const mentalExercisesRejuvenationImg = [
      {
        lg: mentalExercisesRejuvenation1,
        mb: mentalExercisesRejuvenation1Mb,
      },
      {
        lg: mentalExercisesRejuvenation2,
        mb: mentalExercisesRejuvenation2Mb,
      },
      {
        lg: mentalExercisesRejuvenation3,
        mb: mentalExercisesRejuvenation3Mb,
      },
    ];
    const entertainmentImg = [
      {
        lg: entertainment1,
        mb: entertainment1Mb,
      },
      {
        lg: entertainment2,
        mb: entertainment2Mb,
      },
      {
        lg: entertainment3,
        mb: entertainment3Mb,
      },
    ];
    const physicalExercisesImg = [
      {
        lg: physicalExercises1,
        mb: physicalExercises1Mb,
      },
      {
        lg: physicalExercises2,
        mb: physicalExercises2Mb,
      },
      {
        lg: physicalExercises3,
        mb: physicalExercises3Mb,
      },
      {
        lg: physicalExercises4,
        mb: physicalExercises4Mb,
      },
    ];
    const safetyImg = [
      {
        lg: safety1,
        mb: safety1Mb,
      },

      {
        lg: safety2,
        mb: safety2Mb,
      },

      {
        lg: safety3,
        mb: safety3Mb,
      },
      {
        lg: safety4,
        mb: safety4Mb,
      },
    ];
    const socialHangoutsImg = [
      {
        lg: socialHangouts1,
        mb: socialHangouts1Mb,
      },
      {
        lg: socialHangouts2,
        mb: socialHangouts2Mb,
      },
      {
        lg: socialHangouts3,
        mb: socialHangouts3Mb,
      },
      {
        lg: socialHangouts4,
        mb: socialHangouts4Mb,
      },
    ];
    const sportsImg = [
      {
        lg: sports1,
        mb: sports1Mb,
      },
      {
        lg: sports2,
        mb: sports2Mb,
      },
      {
        lg: sports3,
        mb: sports3Mb,
      },
      {
        lg: sports4,
        mb: sports4Mb,
      },
      {
        lg: sports5,
        mb: sports5Mb,
      },
      {
        lg: sports6,
        mb: sports6Mb,
      },
      {
        lg: sports7,
        mb: sports7Mb,
      },
      {
        lg: sports8,
        mb: sports8Mb,
      },
    ];
    const learningAndEngagementImg = [
      {
        lg: learningAndEngagement1,
        mb: learningAndEngagement1Mb,
      },
      {
        lg: learningAndEngagement2,
        mb: learningAndEngagement2Mb,
      },
      {
        lg: learningAndEngagement3,
        mb: learningAndEngagement3Mb,
      },
      {
        lg: learningAndEngagement4,
        mb: learningAndEngagement4Mb,
      },
    ];
    if (selectedImgType[0] === 1) {
      // sports
      setGalleryImgList([...sportsImg]);
    } else if (selectedImgType[0] === 2) {
      setGalleryImgList([
        ...mentalExercisesRejuvenationImg,
        ...physicalExercisesImg,
      ]);
    } else if (selectedImgType[0] === 3) {
      setGalleryImgList([...funFrolicImg]);
    } else if (selectedImgType[0] === 4) {
      setGalleryImgList([...socialHangoutsImg]);
    } else if (selectedImgType[0] === 5) {
      setGalleryImgList([...accessibilityConvenienceImg]);
    } else if (selectedImgType[0] === 6) {
      // Learning & Eng
      setGalleryImgList([...learningAndEngagementImg]);
    } else if (selectedImgType[0] === 7) {
      setGalleryImgList([...safetyImg]);
    } else if (selectedImgType[0] === 8) {
      setGalleryImgList([...entertainmentImg]);
    } else {
      // Entertiment
      setGalleryImgList([
        ...accessibilityConvenienceImg,
        ...funFrolicImg,
        ...mentalExercisesRejuvenationImg,
        ...entertainmentImg,
        ...sportsImg,
        ...safetyImg,
        ...learningAndEngagementImg,
        ...socialHangoutsImg,
      ]);
    }
  }, [selectedImgType]);

  const swiperRef = useRef(null);

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
        padding: { xs: "50px 0px 5px 0", md: "20px 0 0px 0" },
        justifyContent: "center",
      }}
    >
      <Header text="Unlimited Sandhosam" subText="With 150+ Unique Amenities" />

      <Grid
        container
        item
        xs={12}
        sx={{ justifyContent: "center", gap: "1rem" }}
      >
        <Grid container item xs={12} sx={{ justifyContent: "center" }}>
          <Grid
            container
            item
            md={8}
            xs={12}
            sx={{
              justifyContent: "center",
              gap: { xs: "20px", md: "1rem" },
              flexWrap: "wrap",
            }}
          >
            {content?.amenitiesBtns.map((amenitieBtn) => {
              return (
                <Button
                  variant="contained"
                  onClick={() => {
                    console.log(swiperRef.current);
                    setSelectedImgType([amenitieBtn?.id]);
                  }}
                  sx={{
                    background: selectedImgType?.includes(amenitieBtn?.id)
                      ? themeColors?.secondary
                      : themeColors?.primary,
                    textTransform: "capitalize",
                    color: selectedImgType?.includes(amenitieBtn?.id)
                      ? "#000"
                      : "#ffffff",
                    fontSize: { xs: "14px", sm: "18px" },
                    padding: { xs: "7px 10px", sm: "10px 30px" },
                    borderRadius: "11px",
                    ":hover": {
                      background: selectedImgType?.includes(amenitieBtn?.id)
                        ? themeColors?.secondary
                        : themeColors?.primary,
                    },
                  }}
                >
                  {amenitieBtn?.name}
                </Button>
              );
            })}
          </Grid>
        </Grid>

        <Grid
          container
          item
          sx={{
            height: {
              xs: "250px",
              sm: "700px",
              borderRadius: themeRef?.borderRadius,
              overflow: "hidden",
              width: "1400px",
            },
            display: { xs: "none", md: "block" },
          }}
        >
          <Swiper
            key={galleryImgList.length}
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 1000 }}
            pagination={{ clickable: true }}
            style={{ width: "100%", height: "100%" }}
          >
            {(galleryImgList || []).map((img, i) => {
              return img ? (
                <SwiperSlide
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Grid
                    container
                    sx={{
                      height: "100%",
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <Image
                      fill
                      src={img?.lg}
                      alt={`swiperImg+${i}`}
                      style={{ objectFit: "cover" }}
                    />
                  </Grid>
                </SwiperSlide>
              ) : null;
            })}
          </Swiper>
        </Grid>
        <Grid
          item
          md={0}
          xs={11}
          sx={{
            height: {
              xs: "250px",
              sm: "700px",
              borderRadius: themeRef?.borderRadius,
              overflow: "hidden",
            },
            display: { xs: "block", md: "none" },
          }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 500 }}
            pagination={{ clickable: true }}
            style={{ width: "100%", height: "100%" }}
          >
            {(galleryImgList || []).map((img) => {
              return img ? (
                <SwiperSlide
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <Grid
                    container
                    sx={{
                      height: "100%",
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <Image fill src={img?.mb} alt="" />
                  </Grid>
                </SwiperSlide>
              ) : null;
            })}
          </Swiper>
        </Grid>
        <Grid container item xs={10}>
          <EnquireBtn text="Visit Site" setOpenEnquiry={setOpenEnquiry} />
        </Grid>
      </Grid>
    </Grid>
  );
}
Amenties.propTypes = {
  content: PropTypes.object.isRequired,
};
function Gallery({ content, setOpenEnquiry }) {
  const [selectedImgType, setSelectedImgType] = useState([0]);
  const sliderRef = useRef();

  const [currentExpIdx, setCurrentExpIdx] = useState(0);

  const [galleryImgList, setGalleryImgList] = useState([]);

  useEffect(() => {
    const exteriorImg = [exterior4, exterior1, exterior2, exterior3];
    const interiorImg = [interior3, interior, interior1, interior2];
    const roofTopImg = [roofTop, roofTop3, roofTop4, roofTop5];
    const towerToTowerImg = [
      towerToTower,
      towerToTower1,
      towerToTower2,
      towerToTower3,
      towerToTower4,
    ];
    const constructionImg = [
      construction1,
      construction2,
      construction3,
      construction4,
      construction5,
      construction6,
      construction7,
      construction8,
    ];
    if (selectedImgType.includes(1)) {
      setGalleryImgList(exteriorImg);
    } else if (selectedImgType.includes(2)) {
      setGalleryImgList(interiorImg);
    } else if (selectedImgType.includes(3)) {
      setGalleryImgList(constructionImg);
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
        padding: { xs: "10px 0 10px 0", md: "50px 0 30px 0" },
        justifyContent: "center",
      }}
    >
      <Header
        text="Image Gallery"
        subText=" Joy Home At A Glance
        "
        noGap={true}
      />
      <Grid
        container
        item
        xs={content?.tabCol?.xs}
        sm={content?.tabCol?.sm}
        md={content?.tabCol?.md}
        lg={content?.tabCol?.lg}
        xl={content?.tabCol?.xl}
        sx={{
          marginTop: { md: "30px", xs: "5px" },
          borderRadius: "14px",
          padding: { md: "10px 20px", xs: "0px 0px" },
          justifyContent: { xs: "space-evenly", sm: "center" },
          gap: "1rem",
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
                ? themeColors?.secondary
                : themeColors?.primary,
              textTransform: "capitalize",
              color: selectedImgType?.includes(item?.id) ? "#000" : "#ffffff",
              fontSize: { xs: "14px", sm: "18px" },
              padding: { xs: "7px 10px", sm: "10px 30px" },
              borderRadius: "11px",
              ":hover": {
                background: selectedImgType?.includes(item?.id)
                  ? themeColors?.secondary
                  : themeColors?.primary,
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
        sx={{ margin: "25px 0px", position: "relative" }}
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
          <Button
            onClick={() => sliderRef?.current?.slidePrev()}
            disabled={currentExpIdx === 0}
            sx={{
              background: "rgba(249, 184, 0, 0.7) !important",
              color: currentExpIdx === 0 ? "grey" : "#000000",
              boxShadow: "none !important",
              borderRadius: "50% !important",
              height: "80px",
              aspectRatio: "1/1",
              border: "1px solid #000000",
            }}
            variant="contained"
          >
            <ArrowBackIosRoundedIcon sx={{ fontSize: "50px" }} />
          </Button>
        </Grid>
        <Grid
          container
          item
          xs={11}
          sm={10}
          sx={{
            height: { xs: "250px", sm: "800px" },
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
                style={{ width: "100%", height: "100%" }}
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
                  }}
                >
                  <Image
                    fill
                    src={item}
                    style={{ objectFit: "cover" }}
                    sizes="100vw"
                    alt="location"
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
                          border: "1px solid #000000",
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
                          border: "1px solid #000000",
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
              height: "80px",
              borderRadius: "50%",
              aspectRatio: "1/1",
              border: "1px solid #000000",
            }}
            variant="contained"
          >
            <ArrowForwardIosRoundedIcon sx={{ fontSize: "50px" }} />
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={content?.sliderCol?.xs}
        sm={content?.sliderCol?.sm - 2}
        md={content?.sliderCol?.md - 2}
        lg={content?.sliderCol?.lg}
        xl={content?.sliderCol?.xl}
      >
        <EnquireBtn text="Check Price" setOpenEnquiry={setOpenEnquiry} />
      </Grid>
    </Grid>
  );
}

Gallery.propTypes = {
  content: PropTypes.object.isRequired,
};

const facilitiesList = (data) => {
  return (
    <>
      {(data || []).map((item) => (
        <Grid
          key={item}
          item
          xs={12}
          display="flex"
          justifyContent="space-between"
          padding=" 0px 15px "
          backgroundColor="#f7f7f7"
          boxShadow="0 8px 8px -6px rgba(0, 0, 0, 0.3)"
        >
          <Typography
            variant="p"
            sx={{
              color: "#333333",
              fontSize: { xs: "12px", sm: "16px" },
              padding: "12px 0px",
              fontWeight: "300",
              lineHeight: "24px",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {item || ""}
          </Typography>
        </Grid>
      ))}
    </>
  );
};

function LocationAdvantages({ content }) {
  const [isFacilitiesEnabled] = useState(true);
  const [isOpenedFacilities, setIsOpenedFacilities] = useState([]);

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
        padding: { xs: "5px 0", sm: "10px 0 30px 0" },
        justifyContent: "center",
      }}
    >
      <Header
        text="Prime Location "
        subText=" Joy Home Is Convenientny Situated"
      />

      <Grid
        container
        item
        xs={content?.subContainerCol?.xs}
        sm={content?.subContainerCol?.sm}
        md={content?.subContainerCol?.md}
        lg={content?.subContainerCol?.lg}
        xl={content?.subContainerCol?.xl}
        sx={{
          justifyContent: "center",
          marginTop: { xs: "0px", md: "50px" },
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            height: "30rem",
            borderRadius: themeRef?.borderRadius,
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7780.500587181455!2d80.202401!3d12.8270962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b2c2fa92a95%3A0x7513c77caf9ef2f0!2sUrbanrise%20The%20World%20of%20Joy!5e0!3m2!1sen!2sin!4v1696397969166!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="jewelOfChennaiMap"
          />
        </Grid>
        <Grid
          container
          item
          xs={content?.facilitiesCol?.xs}
          sm={content?.facilitiesCol?.sm}
          md={content?.facilitiesCol?.md}
          lg={content?.facilitiesCol?.lg}
          xl={content?.facilitiesCol?.xl}
          sx={{
            justifyContent: "center",
            height: "fit-content",
            paddingTop: { xs: "20px", sm: 0 },
          }}
        >
          {(content?.facilities || []).map((item) => (
            <Grid
              container
              key={item?.facility}
              item
              xs={12}
              sm={10}
              onClick={() => {
                if (isFacilitiesEnabled && isOpenedFacilities[0] === item?.id) {
                  setIsOpenedFacilities([]);
                } else {
                  setIsOpenedFacilities([item?.id]);
                }
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                // padding: { xs: "5px 10px", sm: "5px 10px" },
                cursor: "pointer",

                height: "fit-content",
                background: themeColors?.primary,
                marginBottom: "25px",
              }}
            >
              <Grid
                item
                xs={10}
                ms={11}
                display="flex"
                alignItems="center"
                sx={{ padding: "1.5rem 1rem" }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#fff",

                    fontSize: { xs: "14px", sm: "16px" },
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  {item?.facility || ""}
                </Typography>
              </Grid>
              <Grid
                item
                xs={2}
                ms={1}
                sx={{
                  display: "flex",
                  color: "#fff",
                  fontWeight: "600",
                }}
                justifyContent="start"
                alignItems="center"
                padding="10px 0px 10px 10px"
              >
                <KeyboardArrowDownIcon
                  sx={{
                    fontSize: {
                      xs: "24px",
                      sm: "35px",
                      transform: isOpenedFacilities?.includes(item.id)
                        ? "rotate(180deg)"
                        : "none",
                      transition: "transform 0.3s ease-in-out",
                    },
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: isOpenedFacilities?.includes(item.id)
                    ? "flex"
                    : "none",
                  flexDirection: "column",
                  color: "#fff",
                }}
              >
                {facilitiesList(item?.listAndTime)}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
LocationAdvantages.propTypes = {
  content: PropTypes.object.isRequired,
};
function ProjectHighlights({ content }) {
  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="center"
      sx={{
        background: `url(/nlpImages/features_bg.png)`,
        backgroundSize: "cover",
        padding: { xs: "30px 0 0 0", sm: "50px 0 30px 0" },
      }}
    >
      <Grid
        container
        item
        xs={content?.containerCol?.xs}
        sm={content?.containerCol?.sm}
        md={content?.containerCol?.md}
        lg={content?.containerCol?.lg}
        xl={content?.containerCol?.xl}
        sx={{
          alignItems: "center",
          gap: { md: "1rem", xs: "10px" },
          flexDirection: { md: "row", xs: "row-reverse" },
        }}
      >
        <Grid container item sx={{ display: { xs: "block", md: "none" } }}>
          <Header
            text="Project Highlights"
            subText=" Unique Features Of Joy home"
            noGap={true}
          />
        </Grid>
        <Grid
          container
          item
          xs={content?.imgCol?.xs}
          sm={content?.imgCol?.sm}
          sx={{
            position: "relative",
            margin: { xs: "50px 0", md: "0px 0" },
            justifyContent: { xs: "center" },
            paddingRight: { xs: "0", sm: "0px" },
          }}
        >
          <Box
            sx={{
              background: "#F9B800",
              aspectRatio: "1/1",
              height: { xs: "245px", sm: "550px" },
              position: "relative",
              top: 0,
              // border: "10px solid #ffffff",
              borderRadius: "0px 45px 0px 25px",
              overflow: "hidden",
            }}
          >
            <Image fill src={exterior4} style={{ objectFit: "cover" }} />
          </Box>
        </Grid>
        <Grid
          container
          item
          xs={content?.highlightsCol?.xs}
          sm={content?.highlightsCol?.sm - 1}
          md={content?.highlightsCol?.md - 2}
          lg={content?.highlightsCol?.lg - 2}
          xl={content?.highlightsCol?.xl - 2}
          sx={{
            alignContent: "flex-start",
          }}
        >
          <Grid container item sx={{ display: { xs: "none", md: "block" } }}>
            <Header
              text="Project Highlights"
              subText="Unique Features"
              noGap={true}
            />
          </Grid>

          <Grid container item xs={12} sx={{ justifyContent: "center" }}>
            <Box component="ul" sx={{ listStyle: "none", padding: "0" }}>
              {(content?.highLights || [])?.map((hl) => (
                <Typography
                  key={hl}
                  component="li"
                  sx={{
                    fontSize: { xs: "14px", sm: "20px" },
                    color: "#000000",
                    paddingBottom: "30px",

                    ":before": {
                      content: '"✓"',
                      color: "#644A00",
                      paddingRight: "10px",
                    },
                  }}
                >
                  {hl || ""}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
ProjectHighlights.propTypes = {
  content: PropTypes.object.isRequired,
};
function WalkThrough({ content }) {
  const [selectedImgType, setSelectedImgType] = useState([0]);
  const [selectedVideo, setSlectedVideo] = useState(
    "https://player.vimeo.com/video/871823280"
  );
  const [autoplay, setAutoplay] = useState(0);
  useEffect(() => {
    console.log(selectedImgType);

    if (selectedImgType[0] === 0) {
      setSlectedVideo("https://player.vimeo.com/video/871823280");
    } else if (selectedImgType[0] === 1) {
      setSlectedVideo("https://player.vimeo.com/video/787904048");
    } else if (selectedImgType[0] === 2) {
      setSlectedVideo("https://www.youtube.com/embed/D6z4W1LVBEM");
    } else if (selectedImgType[0] === 3) {
      setSlectedVideo("https://www.youtube.com/embed/9oFrIOwZKU0");
    } else if (selectedImgType[0] === 4) {
      setSlectedVideo("https://www.youtube.com/embed/sWzVQqlFjVo");
    } else if (selectedImgType[0] === 5) {
      setSlectedVideo("https://www.youtube.com/embed/PfppmW7bMxU");
    } else {
      setSlectedVideo("https://www.youtube.com/embed/h3JL0rrAOoo");
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
        backgroundSize: "cover",
        padding: { xs: "50px 0 10px 0", sm: "100px 0" },
        justifyContent: "center",
        marginTop: { xs: "0rem", md: "0px" },
      }}
      onMouseEnter={() => setAutoplay(1)}
      onMouseLeave={() => setAutoplay(0)}
    >
      <Header
        text="Sandosham Never Ends At "
        minText="The World Of Joy"
        subText="Watch & Explore"
        noGap={true}
      />
      <Typography
        componet="p"
        sx={{
          padding: "2px 0 0px 0",

          fontSize: { xs: "20px", sm: "28px" },
          textAlign: "center",
          letterSpacing: "0",
          marginBottom: "0px",
          fontWeight: "800",
          color: themeColors?.primary,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        Your Joy Home
      </Typography>
      <Grid
        container
        item
        md={8}
        xs={12}
        sx={{
          gap: "1rem",
          flexWrap: "wrap",
          marginTop: "10px",

          borderRadius: "14px",
          padding: "10px 20px",
          justifyContent: { xs: "space-evenly", sm: "center" },
          alignItems: "center",
        }}
      >
        {(content?.tabNames || [])?.map((item) => (
          <Button
            key={item?.id}
            onClick={() => setSelectedImgType([item?.id])}
            sx={{
              background: selectedImgType?.includes(item?.id)
                ? themeColors?.secondary
                : themeColors?.primary,
              textTransform: "capitalize",
              color: selectedImgType?.includes(item?.id) ? "#000" : "#ffffff",
              fontSize: { xs: "14px", sm: "18px" },
              padding: { xs: "7px 10px", sm: "10px 30px" },
              borderRadius: "11px",
              ":hover": {
                background: selectedImgType?.includes(item?.id)
                  ? themeColors?.secondary
                  : themeColors?.primary,
              },
              height: { xs: "40px", sm: "50px" },
            }}
          >
            {item?.name || ""}
          </Button>
        ))}
      </Grid>
      <Grid
        container
        item
        xs={content?.videoCol?.xs}
        sm={content?.videoCol?.sm}
        md={content?.videoCol?.md}
        lg={content?.videoCol?.lg}
        xl={content?.videoCol?.xl}
        sx={{
          justifyContent: "center",
          marginTop: { md: "50px", xs: "0px" },
          position: "relative",
          height: { xs: "180px", sm: "650px" },
          borderRadius: { xs: "16px", sm: "48px" },
          overflow: "hidden",
        }}
      >
        <iframe
          src={`${selectedVideo}?autoplay=${autoplay}&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
          title="all amenities WOJ serisuri video-58 lakhs"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
      </Grid>
    </Grid>
  );
}
WalkThrough.propTypes = {
  content: PropTypes.object.isRequired,
};

function ContactDetails({ content }) {
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
        background: "#000000",
        padding: { xs: "20px 10px 50px 10px", sm: "50px" },
      }}
    >
      <Grid container item xs={12} justifyContent="space-between">
        <Grid container item xs={12} sm={5}>
          <Grid
            item
            xs={3}
            sx={{
              position: "relative",
              height: { xs: "60px", sm: "100px" },
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <Image
              fill
              src={wojLogo}
              style={{ objectFit: "cover" }}
              alt="location map"
              sizes="100vw"
            />
          </Grid>
          <Grid
            item
            xs={9}
            sm={8}
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            sx={{ paddingRight: { xs: 0, sm: "30px" } }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "14px", sm: "24px" },
                fontWeight: "bolder",
                color: "#ffffff",
                borderBottom: "3px solid #ffffff",
                width: "fit-content",
              }}
            >
              {content?.title || ""}
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "14px", sm: "20px" },
                color: "#F9B800",
                paddingTop: "20px",
              }}
            >
              {content?.companyName || ""}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ paddingTop: "40px" }}>
            <Typography
              component="p"
              sx={{
                fontSize: { xs: "14px", sm: "20px" },
                color: "#E4E4E4",
              }}
            >
              {content?.address || ""}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={3}
          justifyContent="flex-end"
          alignContent="space-between"
        >
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="flex-end"
            sx={{ padding: { xs: "20px 0", sm: 0 } }}
          >
            <EmailRoundedIcon
              sx={{ color: "#F9B800", paddingRight: "10px", fontSize: "30px" }}
            />
            <Typography
              component="p"
              sx={{
                fontSize: { xs: "14px", sm: "20px" },
                color: "#ffffff",
              }}
            >
              {content?.email || ""}
            </Typography>
          </Grid>
          <Button
            sx={{
              background: "#F9B800",
              color: "#000000",
              borderRadius: "9px",
              textTransform: "none",
              height: "fit-content",
              padding: "10px 30px",
              fontWeight: "bolder",
              fontSize: { xs: "14px", sm: "20px" },
              ":hover": {
                background: "#F9B800",
              },
            }}
            variant="contained"
          >
            <Typography
              component="a"
              target="_blank"
              href={content?.directionBtnUrl}
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#000000",
                textDecoration: "none",
                fontWeight: "bolder",
              }}
            >
              <NearMeRoundedIcon
                sx={{ fontSize: "30px", paddingRight: "10px" }}
              />
              {content?.directionBtn || ""}
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ margin: "30px 0", height: { xs: "185px", sm: "300px" } }}
      >
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7780.500587181455!2d80.202401!3d12.8270962!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a525b2c2fa92a95%3A0x7513c77caf9ef2f0!2sUrbanrise%20The%20World%20of%20Joy%20SURVEY%20NO.117%2F2%20Siruseri%2C%20Tamil%20Nadu%20603103!3m2!1d12.8270962!2d80.202401!5e0!3m2!1sen!2sin!4v1690797014899!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Grid>
    </Grid>
  );
}
ContactDetails.propTypes = {
  content: PropTypes.object.isRequired,
};

function Contact({ setOpenEnquiry }) {
  return (
    <Grid
      container
      item
      xs={12}
      sm={6}
      sx={{
        position: "fixed",
        bottom: 0,
        right: { xs: 0, sm: 50 },
        width: "100%",
        justifyContent: { xs: "space-between", md: "flex-end" },
        alignItems: "flex-end",
      }}
    >
      <Grid
        item
        xs={6}
        width="100%"
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <Button
          onClick={() => window.open("tel:+91 9718355555")}
          sx={{
            width: "95%",
            height: { xs: "48px", sm: "70px" },
            background: themeColors?.primary,
            color: "#ffffff",
            fontSize: { xs: "14px", sm: "16px" },
            borderWidth: "3px 3px 0 3px",
            borderStyle: "solid",
            borderColor: "#ffffff",
            borderTopLeftRadius: { xs: "17px", sm: "29px" },
            borderTopRightRadius: { xs: "17px", sm: "29px" },
            marginRight: "20px",
            padding: "6px 6px",
            ":hover": {
              background: "#003152",
            },
          }}
          variant="contained"
        >
          <CallIcon
            sx={{
              paddingLeft: { xs: "5px", sm: "10px" },
              fontSize: { xs: "20px", sm: "30px" },
              fontWeight: "bolder",
            }}
          />{" "}
          <Typography
            component="span"
            sx={{
              paddingLeft: { xs: "5px", sm: "10px" },
              fontSize: { xs: "14px", sm: "24px" },
              fontWeight: "bolder",
            }}
          >
            CALL NOW
          </Typography>
        </Button>
      </Grid>
      <Grid container item xs={6} justifyContent="center" width="100%">
        <Button
          onClick={() => setOpenEnquiry(true)}
          sx={{
            width: "95%",
            height: "48px",
            display: { xs: "flex", sm: "none" },
            justifyContent: "center",
            background: "#F9B800",
            color: "#000000",
            fontWeight: "bolder",
            fontSize: "14px",
            borderTopLeftRadius: "17px",
            borderTopRightRadius: "17px",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            padding: "0 10px",
            ":hover": {
              background: "#F9B800",
            },
          }}
          variant="contained"
        >
          ENQUIRE NOW
        </Button>
      </Grid>
    </Grid>
  );
}
Contact.propTypes = {
  setOpenEnquiry: PropTypes.func.isRequired,
};

function Footer() {
  return (
    <Grid
      container
      xs={12}
      sx={{ width: "100%", backgroundColor: "#0b0d12eb", padding: "20px 0" }}
    >
      {/* Button here */}

      <Grid item xs={12} sx={{ margin: "5px 0px" }}>
        <Typography
          component="p"
          sx={{
            padding: { md: "0px 90px", xs: "0px 2px" },
            color: "#fff",
            textAlign: "center",
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          Disclaimer &quot;I authorize The World of Joy and its representatives
          to Call, SMS, Email or WhatsApp me about their products and offers.
          This consent overrides any registration for DNC / NDNC.&quot;
        </Typography>
      </Grid>

      <Grid xs={12}>
        <Typography
          component="p"
          sx={{ color: "#fff", textAlign: "center", margin: "5px 0px" }}
        >
          © 2023 Urbanrise The World Of Joy | All Rights Reserved |
          No.TN/35/Building/0397/2023 | www.rera.tn.gov.in
        </Typography>
      </Grid>
    </Grid>
  );
}

function EnquiryFormPopup({
  openEnquiry,
  setOpenEnquiry,
  text,
  setEnqText,
  theme,
}) {
  const {
    userData,
    errorMsgs,
    isLoading,
    setUserData,
    setIsDirty,
    submitForm,
  } = useForm();

  const onClose = () => {
    setOpenEnquiry(false);
    setEnqText(null);
  };
  return (
    <Dialog
      open={openEnquiry}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        background: "rgba(0, 0, 0, 0.88)",
        height: "100vh",
        ".MuiDialog-paper": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: { xs: "17px", sm: "24px" },
          background: "black",
          maxWidth: { xs: "md", sm: "25%" },
          height: { md: "55%", xs: "50%" },
          width: "100%",
          "::-webkit-scrollbar": {
            display: "none",
          },
        },
      }}
    >
      <Grid container item xs={12} width="100%">
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "15%",
            background: theme || themeColors?.primary,
            position: "relative",
          }}
        >
          <Typography
            component="h1"
            sx={{
              textAlign: "center",
              width: "100%",
              color: "#fff",
              fontSize: { xs: "14px", sm: "24px" },
              padding: { xs: "0 10px", sm: "0 30px" },
              fontWeight: "bolder",
              border: "2px ",
            }}
          >
            {text || "ENQUIRE NOW"}
          </Typography>
          <CloseRoundedIcon
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 5,
              top: 5,
              fontSize: { xs: "25px", sm: "30px" },
              fontWeight: "bold",
              cursor: "pointer",
            }}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          sx={{
            height: "85%",
            transition: "height 1s ease-in-out",
            background: "#ffffff",
          }}
        >
          <Grid container item justifyContent="center" xs={12}>
            <Grid
              item
              xs={10}
              style={{
                margin: "30px 0 0 0",
              }}
            >
              <TextField
                type="text"
                id="outlined-basi01"
                value={userData.userName}
                error={!!errorMsgs.userName}
                helperText={errorMsgs?.userName || ""}
                onBlur={() => {
                  setIsDirty((d) => ({
                    ...d,
                    userName: true,
                  }));
                }}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    userName: e.target.value || "",
                  });
                }}
                placeholder="Name"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root .MuiInputBase-input": {
                    background: "rgba(0, 0, 0, 0.04)",
                    borderRadius: "9px",
                    padding: { xs: "10px", sm: "12px 10px" },
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "12px",
                  },
                }}
                InputProps={{
                  sx: {
                    height: { xs: "40px", sm: "50px" },
                  },
                }}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container item justifyContent="center" xs={12}>
            <Grid
              item
              xs={10}
              style={{
                margin: "10px 0 0 0",
              }}
            >
              <TextField
                type="text"
                id="outlined-basic02"
                value={userData.phoneNo}
                error={!!errorMsgs.phoneNo}
                helperText={errorMsgs?.phoneNo || ""}
                onBlur={() => {
                  setIsDirty((d) => ({
                    ...d,
                    phoneNo: true,
                  }));
                }}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    phoneNo: e.target.value || "",
                  });
                }}
                placeholder="Phone number"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root .MuiInputBase-input": {
                    background: "rgba(0, 0, 0, 0.04)",
                    padding: { xs: "10px", sm: "12px 10px" },
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "12px",
                  },
                }}
                InputProps={{
                  sx: {
                    height: { xs: "40px", sm: "50px" },
                  },
                }}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container item justifyContent="center" xs={12}>
            <Grid
              item
              xs={10}
              style={{
                margin: "10px 0 0 0",
              }}
            >
              <TextField
                type="email"
                id="outlined-basic03"
                value={userData.email}
                error={!!errorMsgs.email}
                helperText={errorMsgs?.email || ""}
                onBlur={() => {
                  setIsDirty((d) => ({
                    ...d,
                    email: true,
                  }));
                }}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    email: e.target.value || "",
                  });
                }}
                placeholder="Email"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root .MuiInputBase-input": {
                    background: "rgba(0, 0, 0, 0.04)",
                    padding: { xs: "10px", sm: "12px 10px" },
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "12px",
                  },
                }}
                InputProps={{
                  sx: {
                    height: { xs: "40px", sm: "50px" },
                  },
                }}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item xs={10} style={{ paddingTop: "20px" }}>
            <LoadingButton
              onClick={() => submitForm()}
              sx={{
                width: "100%",
                height: { xs: "40px", sm: "50px" },
                background: theme || themeColors?.primary,
                textTransform: "capitalize",
                color: "#fff",
                fontWeight: "bold",
                fontSize: { xs: "14px", sm: "18px" },
                ":hover": {
                  backgroundColor: theme || themeColors?.primary,
                },
              }}
              loading={isLoading}
              variant="contained"
            >
              Submit
            </LoadingButton>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
}
function BannerImg() {
  return (
    <Grid
      item
      xs={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "hidden",
          height: { md: "100vh", xs: "100vh" },
          width: "100%",
        }}
      />
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          position: "absolute",
          height: { md: "170vh", xs: "125vh" },
          top: "0px",
          left: "0px",
          right: "0px",
          zIndex: "-1",
        }}
      >
        <Box
          component="div"
          sx={{
            width: "100%",
            height: "100%",
            display: { xs: "none", md: "block" },
          }}
        >
          <Image
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={db}
          />
        </Box>
        <Box
          component="div"
          sx={{
            width: "100%",
            height: "100%",
            display: { xs: "block", md: "none" },
          }}
        >
          <Image
            style={{ width: "100%", height: "100%", objectFit: "contained" }}
            src={mb}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
BannerImg.propTypes = {};

function Downloads({ content, setOpenEnquiry }) {
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
        background: `url(/nlpImages/downloads_bg.png)`,
        backgroundSize: "cover",
        justifyContent: "center",
        marginBottom: "3rem",
      }}
    >
      <Grid
        container
        item
        xs={12}
        sx={{
          width: "100%",
          height: "100%",
          background: "#df212770",
          padding: { xs: "10px", sm: "50px" },
        }}
      >
        <Grid
          item
          xs={content?.titleCol?.xs}
          sm={content?.titleCol?.sm}
          md={content?.titleCol?.md}
          lg={content?.titleCol?.lg}
          xl={content?.titleCol?.xl}
          sx={{ borderBottom: { xs: "2px solid #000000", sm: "none" } }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "20px", sm: "40px" },
              fontWeight: "bolder",
              color: "#000000",
              padding: { xs: "20px 0", sm: 0 },
            }}
          >
            {content?.title || ""}
          </Typography>
        </Grid>
        <Grid
          item
          xs={content?.linkContainerCol?.xs}
          sm={content?.linkContainerCol?.sm}
          md={content?.linkContainerCol?.md}
          lg={content?.linkContainerCol?.lg}
          xl={content?.linkContainerCol?.xl}
          sx={{
            borderLeft: { xs: "none", sm: "2px solid #000000" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={content?.linkCol?.xs}
            sm={content?.linkCol?.sm}
            md={content?.linkCol?.md}
            lg={content?.linkCol?.lg}
            xl={content?.linkCol?.xl}
            sx={{
              width: "100%",
              border: "2px solid #ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "22px",
              padding: { xs: "20px", sm: "15px" },
              background: "#000000",
              margin: { xs: "20px 0", sm: "0 30px" },
            }}
          >
            <DescriptionRoundedIcon
              sx={{ color: "#ffffff", fontSize: "40px" }}
            />
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "16px", sm: "20px" },
                color: "#ffffff",
                padding: "10px 0",
              }}
            >
              Brouchure
            </Typography>
            <Typography
              component="a"
              onClick={() => setOpenEnquiry(true)}
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                color: "#F9B800",
                borderBottom: "1px solid #F9B800",
                cursor: "pointer",
              }}
            >
              Click here
            </Typography>
          </Grid>

          <Grid
            xs={content?.linkCol?.xs}
            sm={content?.linkCol?.sm}
            md={content?.linkCol?.md}
            lg={content?.linkCol?.lg}
            xl={content?.linkCol?.xl}
            sx={{
              width: "100%",
              border: "2px solid #ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "22px",
              padding: { xs: "20px", sm: "15px" },
              background: "#000000",
              margin: { xs: "20px 0", sm: "0 30px" },
            }}
          >
            <DomainRoundedIcon sx={{ color: "#ffffff", fontSize: "40px" }} />
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "16px", sm: "20px" },
                color: "#ffffff",
                padding: "10px 0",
              }}
            >
              Floor plan
            </Typography>
            <Typography
              component="a"
              onClick={() => setOpenEnquiry(true)}
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                color: "#F9B800",
                borderBottom: "1px solid #F9B800",
                cursor: "pointer",
              }}
            >
              Click here
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
Downloads.propTypes = {
  content: PropTypes.object.isRequired,
  setOpenEnquiry: PropTypes.func.isRequired,
};
EnquiryFormPopup.propTypes = {
  openEnquiry: PropTypes.bool.isRequired,
  setOpenEnquiry: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  setEnqText: PropTypes.func.isRequired,
};
function Header({ text, subText, clr, subClr, noGap, minText }) {
  return (
    <Grid
      item
      xs={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {minText ? (
        <>
          <Typography
            component="h3"
            sx={{
              padding: "0px 0 2px 0",
              fontSize: { xs: "25px", md: "28px" },
              textAlign: "center",
              letterSpacing: "0",
              marginBottom: minText ? "0px" : "5px",
              fontWeight: "400",
              color: clr || themeColors?.primary,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {text}
          </Typography>
          <Typography
            component="h3"
            sx={{
              padding: "0px 0 0px 0",
              fontSize: { xs: "25px", md: "28px" },
              textAlign: "center",
              letterSpacing: "0",
              marginBottom: minText ? "0px" : "5px",
              fontWeight: "400",
              color: clr || themeColors?.primary,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {minText}
          </Typography>
        </>
      ) : null}
      <Typography
        component="h1"
        sx={{
          fontSize: { xs: "27px", md: "34px" },
          textAlign: "center",
          letterSpacing: "0",
          marginBottom: "2px",
          fontWeight: "530",
          color: subClr || "#0b0d12eb",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: minText ? "45px" : "0px",
        }}
      >
        {minText ? subText : text}
      </Typography>

      <Typography
        component="h1"
        sx={{
          padding: noGap ? "2px 0 0px 0" : "2px 0 30px 0",

          fontSize: { xs: "18px", md: "28px" },
          textAlign: "center",
          letterSpacing: "0",
          marginBottom: minText ? "0px" : "5px",
          fontWeight: "800",
          color: clr || themeColors?.primary,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          //
        }}
      >
        {minText ? null : subText}
      </Typography>
    </Grid>
  );
}
function EnquireBtn({ text, setOpenEnquiry }) {
  return (
    <Grid item xs={12} sx={{ display: "flex", justifyContent: "right" }}>
      <Button
        variant="contained"
        onClick={() => setOpenEnquiry(true)}
        sx={{
          width: "150px",
          backgroundColor: themeColors?.surprise,
          fontWeight: "600",
          display: { xs: "none", md: "block" },
          borderRadius: "0px 15px 0px 10px",
          fontSize: "15px",
          color: "#000",
          ":hover": {
            backgroundColor: themeColors?.surprise,
          },
        }}
      >
        {text}
      </Button>
    </Grid>
  );
}
