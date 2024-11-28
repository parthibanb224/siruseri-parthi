import React, { Suspense } from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import wojLogo from "../../../../public/nlpImages/TWOJ_logo.webp";
import Policys from "../../../components/NLP/Policys";

const data = [
  {
    id: 10,
    type: "contactDetails",
    title: "THE WORLD OF JOY APARTMENTS",
    companyName: "Urbanrise constructions",
    directionBtn: "Get direction from here",
    address: "SURVEY NO.117/2, Siruseri, Tamil Nadu 603103",
    directionBtnUrl:
      "https://www.google.com/maps/dir//Urbanrise+The+World+of+Joy+SURVEY+NO.117%2F2+Siruseri,+Tamil+Nadu+603103/@12.8270962,80.202401,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a525b2c2fa92a95:0x7513c77caf9ef2f0!2m2!1d80.202401!2d12.8270962?entry=ttu",
    email: "info@urbanrise.in",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.2502935907273!2d80.202401!3d12.8270962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b2c2fa92a95%3A0x7513c77caf9ef2f0!2sUrbanrise%20The%20World%20of%20Joy!5e0!3m2!1sen!2sin!4v1685036397265!5m2!1sen!2sin",
    containerCol: {
      xs: 12,
    },
    disclaimer:
      'Disclaimer "I authorize The World of Joy and its representatives to Call, SMS, Email or WhatsApp me about their products and offers. This consent overrides any registration for DNC / NDNC."',
    copyRight:
      "© 2023 Urbanrise The World Of Joy | All Rights Reserved |  No.TN/35/Building/0397/2023 | www.rera.tn.gov.in",
  },
];

export default function ContactDetails({}) {
  const content = data[0];
  return (
    <Grid
      container
      item
      xs={content?.containerCol?.xs}
      sm={content?.containerCol?.sm}
      md={content?.containerCol?.md}
      lg={content?.containerCol?.lg}
      xl={content?.containerCol?.xl}
      justifyContent={"center"}
      sx={{
        background: "#000000",
        padding: { xs: "20px 10px 50px 10px", sm: "50px" },
      }}
    >
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack items vertically on mobile
          gap: "20px",
          alignItems: { xs: "flex-start", sm: "center" }, // Align start on mobile
          justifyContent: "center",
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
        container
        item
        xs={12}
        md={7}
        sx={{
          margin: "30px 0",
          height: { xs: "245px", sm: "400px" },
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

      <Grid container item xs={12} justifyContent={"center"}>
        <Typography
          component="p"
          sx={{
            fontSize: { xs: "14px", sm: "14px" },
            color: "#E4E4E4",
            textAlign: "justify",
          }}
        >
          {content?.disclaimer || ""}
        </Typography>
      </Grid>
      <Grid container item xs={12} justifyContent={"center"}>
        <Typography
          component="p"
          sx={{
            fontSize: { xs: "12px", sm: "14px" },
            color: "#E4E4E4",
            paddingTop: "10px",
            textAlign: "justify",
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
