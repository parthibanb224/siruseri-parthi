import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Image from "next/image";
import {
  PhonelinkLockOutlined,
  WifiCalling3Rounded,
} from "@mui/icons-material";
// import Logo from "../../../../public/images/logoNew.png";
import Logo from "../../../../public/Images-new/logo.jpg";
// import Logo from "../../../../public/Images-new/logo-removebg.png";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Fab, Fade, Grid, Slide, useScrollTrigger } from "@mui/material";
import PropTypes from "prop-types";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import NavbarDrawer from "./NavbarDrawer";
import gsap from "gsap";

// function ScrollTop(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   const handleClick = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector(
//       "#back-to-top-anchor"
//     );

//     if (anchor) {
//       anchor.scrollIntoView({
//         block: "center",
//       });
//     }
//   };

//   return (
//     <Fade in={trigger}>
//       <Box
//         onClick={handleClick}
//         role="presentation"
//         sx={{
//           position: "fixed",
//           bottom: 46,
//           right: 26,
//           zIndex: 2,
//           borderRadius: "50%",
//           boxShadow:
//             "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
//         }}
//       >
//         {children}
//       </Box>
//     </Fade>
//   );
// }

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? "#FFFFFF" : "#ffffff3d",
      transition: "background-color 0.3s",
    },
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const pages = [
  { name: "Overview", id: "overview" },
  { name: "Amenities", id: "amenities" },
  { name: "Price", id: "price" },
  { name: "FloorPlan", id: "floorPlan" },
  { name: "Gallery", id: "Gallery" },
  { name: "Location", id: "locationmap" },
];

function Navbar({ setOpenEnquiry, props }) {
  const [drawerState, setDrawerState] = React.useState(false);

  const scrollToView = (target) => {
    const section = document.querySelector(target);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    // if (isMobile === true) {
    //   handleMenuClose();
    // }
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    // GSAP animation to move text from bottom to top
    gsap.fromTo(
      ".navbar-text",
      { y: 50, opacity: 0 }, // Initial state (text starts from below and is invisible)
      { y: 0, opacity: 1, duration: 3, ease: "power3.out" } // Final state (text moves to its position and becomes visible)
    );
  }, []);

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar
          sx={{ backgroundColor: "white", color: "black" }}
          position="fixed"
          elevation={0}
        >
          <Container
            maxWidth="100%"
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 0,
              height: { xs: "50px", sm: "75px" },
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
                xs={4}
                sm={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  height: { xs: "40px", sm: "45px" },
                  overflow: "hidden",
                  position: "relative",
                  paddingLeft: "20px",
                }}
              >
                <Image
                  src={Logo}
                  alt="logo"
                  style={{
                    height: "100%",
                    width: "auto",
                    objectFit: "cover",
                  }}
                  className="navbar-text"
                  sizes="100vw"
                />
              </Grid>
              <Grid
                container
                item
                xs={7}
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
                  {(pages || []).map((item) => (
                    <Typography
                      key={item.name}
                      onClick={() => {
                        scrollToView(`#${item.id}`);
                      }}
                      sx={{
                        display: "block",
                        fontSize: "15px",
                        padding: "5px 10px",
                        //color: themeColors?.primary,
                        "&:hover": {
                          color: "white",
                          backgroundColor: "blue",
                          fontWeight: "bold",
                        },
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        borderRadius: "10px",
                      }}
                      className="navbar-text"
                    >
                      {item.name || ""}
                    </Typography>
                  ))}
                </Box>
              </Grid>
              {/* <Grid
                container
                item
                xs={3}
                sm={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  height: { xs: "35px", sm: "50px" },
                  overflow: "hidden",
                  position: "relative",
                  // marginLeft:'10px'
                }}
              >
                <Image
                  src={Logo}
                  alt="logo"
                  style={{
                    height: "100%",
                    width: "auto",
                    objectFit: "cover",
                  }}
                  sizes="100vw"
                />
              </Grid> */}
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
                    color="#000"
                    aria-label="menu"
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Container>
          <NavbarDrawer
            drawerState={drawerState}
            setDrawerState={setDrawerState}
            sectionNames={pages}
          />
        </AppBar>
      </ElevationScroll>
      {/* <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop> */}
    </>
  );
}

export default Navbar;
