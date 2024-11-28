import React, { Suspense } from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import wojLogo from "../../../public/nlpImages/TWOJ_logo.webp";
import Policys from "./Policys";

export default function ContactDetails({ content }) {
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
        // border: "1px solid white",
      }}
    >
      {/* <Grid
        // container
        // item
        xs={12}
        // justifyContent="space-between"
        sx={{ border: "1px solid red" }}
      >
        <Grid container item xs={12} sm={5} sx={{ width: "100%",border:"1px solid white" }}>
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
              // style={{ objectFit: "cover" }}
              alt="location map"
              // sizes="80vw"
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
                fontSize: { xs: "14px", sm: "20px" },
                fontWeight: "bolder",
                color: "#ffffff",
                borderBottom: "3px solid #ffffff",
                width: "fit-content",
              }}
            >
              {content?.title || ""}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              paddingTop: "0px",
              border: "1px solid white",
              width: "400px",
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "14px", sm: "20px" },
                color: "#F9B800",
                // paddingTop: "20px",
              }}
            >
              {content?.companyName || ""}, {content?.address || ""}
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
      </Grid> */}
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack items vertically on mobile
          gap: "20px",
          alignItems: { xs: "flex-start", sm: "center" }, // Align start on mobile
          justifyContent: "space-between",
        }}
      >
        <Grid sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Grid>
            <Image
              src={wojLogo}
              alt="location map"
              width={120} // Smaller image on mobile
              height={80}
              objectFit="contain"
              sx={{
                width: { xs: "120px", sm: "180px" }, // Adjust width based on screen size
                height: { xs: "80px", sm: "120px" }, // Adjust height based on screen size
              }}
            />
          </Grid>
          <Grid>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "12px", sm: "20px" }, // Adjust font size
                fontWeight: "bolder",
                color: "#ffffff",
                borderBottom: "3px solid #ffffff",
                width: "fit-content",
              }}
            >
              {content?.title || ""}
            </Typography>
            <Grid
              sx={{
                display: "flex",
                gap: { xs: "0px", md: "5px" },
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: "14px", sm: "20px" },
                  color: "#F9B800",
                }}
              >
                {content?.companyName || ""},
              </Typography>

              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: "12px", sm: "20px" },
                  color: "#F9B800",
                }}
              >
                {content?.address || ""}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          margin: "30px 0",
          height: { xs: "185px", sm: "300px" },
          position: "relative",
          "&:hover .mapButton": {
            opacity: 1,
          },
        }}
      >
        <Suspense fallback={<p>Loading video...</p>}>
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7780.500587181455!2d80.202401!3d12.8270962!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a525b2c2fa92a95%3A0x7513c77caf9ef2f0!2sUrbanrise%20The%20World%20of%20Joy%20SURVEY%20NO.117%2F2%20Siruseri%2C%20Tamil%20Nadu%20603103!3m2!1d12.8270962!2d80.202401!5e0!3m2!1sen!2sin!4v1690797014899!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Suspense>

        <Typography
          className="mapButton"
          onClick={() =>
            window.open(
              "https://www.google.com/maps?q=Urbanrise+The+World+of+Joy+Siruseri",
              "_blank"
            )
          }
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#F9B800",
            color: "#000000",
            fontWeight: "bold",
            fontSize: { xs: "14px", sm: "18px" },
            padding: { xs: "8px 16px", sm: "12px 24px" },
            borderRadius: "10px",
            opacity: 0, // Initially hidden
            transition: "opacity 0.3s ease-in-out",
            cursor: "pointer",
          }}
        >
          Get Direction
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography
          component="p"
          sx={{
            fontSize: { xs: "14px", sm: "14px" },
            color: "#E4E4E4",
          }}
        >
          {content?.disclaimer || ""}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          component="p"
          sx={{
            fontSize: { xs: "12px", sm: "14px" },
            color: "#E4E4E4",
            paddingTop: "10px",
          }}
        >
          {content?.copyRight || ""}
        </Typography>
      </Grid>
      <Policys />
    </Grid>
  );
}
ContactDetails.propTypes = {
  content: PropTypes.object.isRequired,
};
