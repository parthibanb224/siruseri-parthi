import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Toolbar } from "@mui/material";
// import CallIcon from "@mui/icons-material/Call";
import dynamic from "next/dynamic";
import layoutData from "../layout.json";
// exterior images
// import exterior3 from "../../public/images/The-World-of-Joy-Siruseri.webp";
import exterior3 from "../../public/images/desktopBanner.jpg";
import mobileBanner from "../../public/images/mobileBanner.jpg";

// interior images

// rooftop images

import lpImgXs from "../../public/nlpImages/lpImg_xs.webp";
import urbanriseAndWojLogo from "../../public/images/urbanriseWoj.jpg";

import PriceDetails from "./PriceDetails";
import Contact from "./Contact";
import useForm from "../useForm";
import "swiper/css";
import "swiper/css/pagination";

const NavbarDrawer = dynamic(() => import("../components/NLP/NavbarDrawer"));
const Enquire = dynamic(() => import("../components/NLP/Enquire"), {
  ssr: false,
});
const Overview = dynamic(() => import("../components/NLP/Overview"), {
  ssr: false,
});
const ProjectHighlights = dynamic(
  () => import("../components/NLP/ProjectHighlights"),
  { ssr: false }
);
const Amenties = dynamic(() => import("../components/NLP/Amenties"), {
  ssr: false,
});
const Gallery = dynamic(() => import("../components/NLP/Gallery"), {
  ssr: false,
});
const LocationAdvantages = dynamic(
  () => import("../components/NLP/LocationAdvantages"),
  { ssr: false }
);
const Downloads = dynamic(() => import("../components/NLP/Downloads"), {
  ssr: false,
});
const ContactDetails = dynamic(() =>
  import("../components/NLP/ContactDetails")
);
const EnquiryFormPopup = dynamic(
  () => import("../components/NLP/EnquiryFormPopup"),
  { ssr: false }
);
const WalkThrough = dynamic(() => import("../components/NLP/WalkThrough"), {
  ssr: false,
});

export const getUtmParams = (pageQueryParams) => {
  const source = pageQueryParams?.utm_source || "Direct Traffic";
  const medium = pageQueryParams?.utm_medium;
  const campaign = pageQueryParams?.utm_campaign;
  const content = pageQueryParams?.utm_content;
  const ad = pageQueryParams?.utm_ad;

  return {
    source,
    medium,
    campaign,
    content,
    // ad,
  };
};
const sources = {
  text: "Google-Text",
  desc: "Google-DG",
  dsp: "Google-Dsp",
  ad: "Youtube-Ads",
  fbAd: "Facebook-Ads",
  tbl: "Taboola",
  abpNadu: "ABP-Nadu",
  jioAds: "Jiocinema-Ads",
  inShortAds: "Inshorts-Ads",
  adgebra: "Adgebra",
  toi: "Verified leads - TOI",
};
export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("+91 8750911020");
  const [stickyEnquireBtn, setStickyEnquireBtn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const pageQueryParams = router?.query;

    const urlParams = getUtmParams(pageQueryParams);
    if (urlParams?.source === sources?.dsp) {
      setPhoneNumber("+91 8750613040");
    } else if (urlParams?.source === sources?.text) {
      setPhoneNumber("+91 8750911020");
    } else if (urlParams?.source === sources?.desc) {
      setPhoneNumber("+91 8750183040");
    } else if (urlParams?.source === sources?.ad) {
      setPhoneNumber("+91 8377071020");
    } else if (urlParams?.source === sources?.fbAd) {
      setPhoneNumber("+91 8375953040");
    } else if (urlParams?.source === sources?.tbl) {
      setPhoneNumber("");
    } else if (urlParams?.source === sources?.abpNadu) {
      setPhoneNumber("+91 8376961020");
    } else if (urlParams?.source === sources?.jioAds) {
      setPhoneNumber("+91 8750112050");
    } else if (urlParams?.source === sources?.inShortAds) {
      setPhoneNumber("+91 8585941020");
    } else if (urlParams?.source === sources?.adgebra) {
      setPhoneNumber("+91 8750112050");
    } else if (urlParams?.source === sources?.toi) {
      setPhoneNumber("+91 9718655555");
    }
  }, [router?.query]);
  const [openEnquiry, setOpenEnquiry] = useState(false);

  return (
    <>
      <Head>
        <title>The World of Joy</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container flexDirection="column" sx={{ position: "relative" }}>
        {(layoutData || []).map((item) => {
          switch (item.type) {
            case "navBar":
              return (
                <Navbar
                  phoneNumber={phoneNumber}
                  key={item.id}
                  content={item}
                />
              );
            case "landingPage":
              return (
                <>
                  <LandingPage key={item.id} content={item} />
                  {/* <Enquire key={item.id + 5} content={item} /> */}
                </>
              );
            case "overview":
              return (
                <Box component="section" id="Overview" sx={{ width: "100%" }}>
                  <Overview key={item.id} content={item} />
                </Box>
              );
            case "priceDetails":
              return (
                <Box
                  component="section"
                  id="PriceDetails"
                  sx={{ width: "100%" }}
                >
                  <PriceDetails
                    key={item.id}
                    content={item}
                    setOpenEnquiry={setOpenEnquiry}
                  />
                </Box>
              );

            case "projectHighlights":
              return (
                <Box
                  component="section"
                  id="ProjectHighlights"
                  sx={{ width: "100%" }}
                >
                  <ProjectHighlights key={item.id} content={item} />
                </Box>
              );
            case "amenities":
              return (
                <Box component="section" id="Amenities" sx={{ width: "100%" }}>
                  <Amenties key={item.id} content={item} />
                </Box>
              );
            case "gallery":
              return (
                <Box component="section" id="Gallery" sx={{ width: "100%" }}>
                  <Gallery key={item.id} content={item} />
                </Box>
              );
            case "location":
              return (
                <Box
                  component="section"
                  id="LocationAdvantages"
                  sx={{ width: "100%" }}
                >
                  <LocationAdvantages key={item.id} content={item} />
                </Box>
              );
            case "walkthrough":
              return (
                <Box
                  component="section"
                  id="WalkthroughVideo"
                  sx={{ width: "100%" }}
                >
                  <WalkThrough key={item.id} content={item} />
                </Box>
              );
            case "downloads":
              return (
                <Downloads
                  key={item.id}
                  content={item}
                  setOpenEnquiry={setOpenEnquiry}
                />
              );
            case "contactDetails":
              return <ContactDetails key={item.id} content={item} />;
            default:
              return null;
          }
        })}
        <Grid
          container
          item
          xs={12}
          justifyContent="flex-end"
          sx={{
            height: {
              xs: "fit-content",
              sm: stickyEnquireBtn ? "200px" : "0px",
            },
            overflow: "hidden",
          }}
        >
          <Contact phoneNumber={phoneNumber} setOpenEnquiry={setOpenEnquiry} />
        </Grid>
        <EnquiryFormPopup
          openEnquiry={openEnquiry}
          setOpenEnquiry={setOpenEnquiry}
        />
      </Grid>
    </>
  );
}

function Navbar({ content, phoneNumber }) {
  const [drawerState, setDrawerState] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");
  const scrollToView = (target) => {
    const section = document.querySelector(target?.replace(/\s/g, ""));
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const initialMessages = [
    `Furnished & AIR-Conditioned Homes - AC in Living & Bedrooms, Modular Kitchen & Wardrobes in All Bedrooms`,
  ];

  const [messages, setMessages] = useState(initialMessages);

  const createInfiniteMessages = () => {
    const infiniteMessages = [];
    const repeatCount = 100;

    for (let i = 0; i < repeatCount; i++) {
      infiniteMessages.push(...initialMessages);
    }

    return infiniteMessages;
  };

  useEffect(() => {
    setMessages(createInfiniteMessages());
  }, []);
  return (
    <>
      <AppBar
        sx={{ width: "100%", boxShadow: "none", backgroundColor: "#0f1c2e" }}
      >
        <Container
          maxWidth="100%"
          sx={{
            display: "flex",
            alignItems: "center",
            // background: content?.style?.bgColor,
            padding: 0,
            boxShadow: "0 0 15px #000000",
            height: { xs: "50px", sm: "65px" },
            backgroundColor: "#0f1c2e",
          }}
        >
          <Grid
            container
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Grid container item xs={3} sm={1}>
              <Image
                src={urbanriseAndWojLogo}
                alt="logo"
                width={250}
                height={50}
                priority
                style={{ cursor: "pointer" }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
            </Grid>
            <Grid
              container
              item
              xs={8}
              sm={9}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  marginLeft: "100px",
                }}
              >
                {(content?.sections || []).map((item) => (
                  <Typography
                    key={`${item}Nav-item`}
                    onClick={() => {
                      scrollToView(`#${item}`);
                      setSelectedSection(item);
                    }}
                    sx={{
                      fontSize: "16px",
                      color: content?.style?.textColor,
                      background: selectedSection === item ? "#006CB5" : "none",
                      fontWeight: selectedSection === item ? "bold" : "none",
                      padding: "5px 10px",
                      textTransform: "capitalize",
                      cursor: "pointer",
                      borderRadius: "10px",
                      ":hover": {
                        color:
                          selectedSection === item
                            ? ""
                            : content?.style?.btnBgColor,
                      },
                    }}
                  >
                    {item || ""}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid
              sx={{
                border: "2px solid #F9B800",
                padding: "8px",
                borderRadius: "5px",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Typography sx={{ color: "white" }}>{phoneNumber}</Typography>
            </Grid>
            <Grid
              container
              item
              xs={1}
              alignItems="center"
              paddingLeft="0"
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
                  color: "#ffffff",
                }}
              >
                <IconButton
                  onClick={() => setDrawerState(!drawerState)}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </AppBar>

      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#6a6c7a",
          color: "black",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: { xs: "50px", sm: "65px" },
          boxShadow: "none",
          marginBottom: "100px",
          overflow: "hidden",
        }}
      >
        <Toolbar sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              width: "100%",
              animation: "scroll 1500s linear infinite",
            }}
          >
            {messages.map((message, index) => (
              <Grid
                key={index}
                sx={{
                  display: "flex",
                }}
              >
                &nbsp;&nbsp;
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#ff8383",
                    letterSpacing: "1px",
                  }}
                >
                  Limited Period Offer : &nbsp;
                </Typography>
                <Typography sx={{ color: "yellow" }}>
                  {message}&nbsp;&nbsp;😍
                </Typography>
              </Grid>
            ))}
          </Box>
        </Toolbar>

        {/* Add CSS for animation */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>
      </AppBar>

      <NavbarDrawer
        drawerState={drawerState}
        setDrawerState={setDrawerState}
        sectionNames={content?.sections}
      />
    </>
  );
}
Navbar.propTypes = {
  content: PropTypes.object.isRequired,
  phoneNumber: PropTypes.string.isRequired,
};
function LandingPage({ content }) {
  return (
    <Grid container xs={12}>
      <Grid item xs={12} sx={{ display: { xs: "none", md: "block" } }}>
        <LandingPageDestop content={content} />
      </Grid>
      <Grid item xs={12} sx={{ display: { xs: "block", md: "none" } }}>
        <LandingPageMobile content={content} />
      </Grid>
    </Grid>
  );
}
function LandingPageDestop({ content }) {
  const {
    userData,
    errorMsgs,
    isLoading,
    setUserData,
    setIsDirty,
    submitForm,
  } = useForm();
  const [enquireFormOpen, setEnquireFormOpen] = useState(false);
  return (
    <Grid
      container
      item
      xs={content?.containerCol?.xs}
      sm={content?.containerCol?.sm}
      md={content?.containerCol?.md}
      lg={content?.containerCol?.lg}
      xl={content?.containerCol?.xl}
      sx={{ marginTop: { xs: "50px", sm: "100px" } }}
    >
      <Box
        sx={{
          width: "100%",
          position: "relative",
          height: { xs: "800px", md: "88vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sx={{ display: { xs: "none", sm: "block" } }}>
          <Image fill src={exterior3} alt="landingpage" />
        </Grid>

        {/* <Grid
          container
          item
          xs={content?.containerCol?.xs}
          sm={content?.containerCol?.sm}
          md={content?.containerCol?.md}
          lg={content?.containerCol?.lg}
          xl={content?.containerCol?.xl}
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            top: "10%",
            zIndex: 1,
            marginRight: "70%",
          }}
        >
          <Grid
            sx={{
              width: "250px",
              zIndex: 1,
            }}
          >
            <BlinkingText />
          </Grid>
        </Grid> */}
      </Box>
    </Grid>
  );
}
function LandingPageMobile({ content }) {
  const {
    userData,
    errorMsgs,
    isLoading,
    setUserData,
    setIsDirty,
    submitForm,
  } = useForm();
  return (
    <Grid
      container
      item
      xs={content?.containerCol?.xs}
      sm={content?.containerCol?.sm}
      md={content?.containerCol?.md}
      lg={content?.containerCol?.lg}
      xl={content?.containerCol?.xl}
    >
      <Box
        sx={{
          width: "100%",
          position: "relative",
          height: { xs: "420px", md: "100vh" },
          marginTop: { xs: "80px" },
        }}
      >
        <Grid item xs={12} sx={{ display: { xs: "block", sm: "none" } }}>
          <Image
            fill
            src={mobileBanner}
            alt="landingpageXs"
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            priority
          />
        </Grid>
        {/* <Grid
          container
          item
          xs={content?.containerCol?.xs}
          sm={content?.containerCol?.sm}
          md={content?.containerCol?.md}
          lg={content?.containerCol?.lg}
          xl={content?.containerCol?.xl}
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            top: "80%",
            zIndex: 1,
            marginRight: "5%",
          }}
        >
          <Grid sx={{ width: "180px" }}>
            <BlinkingText />
          </Grid>
        </Grid> */}
      </Box>
    </Grid>
  );
}
LandingPage.propTypes = {
  content: PropTypes.object.isRequired,
};
export const facilitiesList = (data) => {
  return (
    <>
      {(data || []).map((item) => (
        <Grid
          key={`${item}facilitie`}
          item
          xs={12}
          display="flex"
          justifyContent="space-between"
          paddingTop="20px"
        >
          <Typography
            variant="p"
            sx={{
              color: "#000000",
              fontSize: { xs: "12px", sm: "18px" },
            }}
          >
            {item || ""}
          </Typography>
        </Grid>
      ))}
    </>
  );
};
