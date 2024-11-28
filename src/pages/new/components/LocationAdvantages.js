import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import locationMap from "../../../../public/nlpImages/location_map.jpg";

const facilitiesList = (data) => {
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
            ✶{item || ""}
          </Typography>
        </Grid>
      ))}
    </>
  );
};

const data = [
  {
    id: 7,
    type: "location",
    title: "― Location Advantages ―",
    subTitle: "Key Infrastructure Within 5 Mins",
    containerCol: {
      xs: 12,
    },
    subContainerCol: {
      xs: 10,
    },
    imgCol: {
      xs: 12,
      sm: 7,
    },
    facilitiesCol: {
      xs: 12,
      sm: 5,
    },
    facilities: [
      {
        id: 0,
        facility: "WORLD-CLASS MNC'S",
        listAndTime: [
          "Tata Consultancy Services",
          "Atos Syntel",
          "Airtel data center",
          "Adani data center",
          "Cognizant",
          "Capegemini",
          "Hexaware",
          "Aspire Systems",
          "Global Software",
          "Indus Teqsite",
          "Solverminds",
          "Sopra steria",
        ],
      },
      {
        id: 1,
        facility: "LEADING EDUCATIONAL INSTITUTIONS",
        listAndTime: [
          "PSBB School",
          "Chettinad School",
          "Hindustan International School",
          "Gateway International School",
          "Velammal Vidhyashram School",
          "VIJAY VIDYASHRAM School",
          "Sathyabama University",
          "Hindustan University",
          "St. Joseph College of Engineering",
          "Mohamed Sathak A.J. College of Engineering",
          "SSN College of Engineering",
          "Dr. Ambedkar Government Law College",
        ],
      },
      {
        id: 2,
        facility: "UNIQUE ENTERTAINMENT AVENUES",
        listAndTime: [
          "Marina Mall",
          "Vivara Mall",
          "INOX",
          "AGS Cinemas",
          "OMR Food Street",
          "Kovalam Blue Flag Beach",
          "PVR Cinemas",
        ],
      },
      {
        id: 3,
        facility: "BEST IN CLASS HEALTHCARE",
        listAndTime: [
          "Chettinad Health City",
          "Life Line Hospital",
          "Madhura Hospital",
          "Apollo Diagnostics",
          "Radiant Dental Care",
          "Pheonix Mind Care",
        ],
      },
      {
        id: 4,
        facility: "EASY CONNECTIVITY",
        listAndTime: [
          "Upcoming Siruseri Metro Station",
          "Easy Access to OMR",
          "Vandaloor Kelambakkam Road",
          "ECR",
          "Medavakkam",
          "Siruseri Bus Stand",
        ],
      },
    ],
  },
];

export default function LocationAdvantages({}) {
  const content = data[0];
  const [isFacilitiesEnabled] = useState(true);
  const [isOpenedFacilities, setIsOpenedFacilities] = useState([]);

  return (
    <Grid
      id="locationmap"
      container
      item
      xs={content?.containerCol?.xs}
      sm={content?.containerCol?.sm}
      md={content?.containerCol?.md}
      lg={content?.containerCol?.lg}
      xl={content?.containerCol?.xl}
      sx={{
        backgroundColor: "#F1F0E8",
        paddingY: "30px",
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
            padding: "30px 0 0px 0",
            fontSize: { xs: "14px", sm: "20px" },
            fontWeight: "bolder",
            background:
              "linear-gradient(90deg, rgba(21,100,53,1) 0%, rgba(0,162,216,1) 50%)",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
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
        xs={content?.subContainerCol?.xs}
        sm={content?.subContainerCol?.sm}
        md={content?.subContainerCol?.md}
        lg={content?.subContainerCol?.lg}
        xl={content?.subContainerCol?.xl}
        sx={{
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Grid
          container
          item
          xs={content?.imgCol?.xs}
          sm={content?.imgCol?.sm}
          md={content?.imgCol?.md}
          lg={content?.imgCol?.lg}
          xl={content?.imgCol?.xl}
          sx={{
            justifyContent: "center",
            position: "relative",
            height: { xs: "180px", sm: "420px" },
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <Image
            fill
            src={locationMap}
            style={{ objectFit: "cover" }}
            alt="location map"
            sizes="100vw"
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
            paddingTop: { xs: "30px", sm: 0 },
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
                borderRadius: "14px",
                padding: { xs: "5px 10px", sm: "15px 10px" },
                cursor: "pointer",
                border: "1px solid #454545",
                height: "fit-content",
                background: "#ffffff",
                marginBottom: "10px",
              }}
            >
              <Grid item xs={10} display="flex" alignItems="center">
                <Typography
                  variant="h5"
                  sx={{
                    color: "#000000",
                    fontSize: { xs: "14px", sm: "20px" },
                    fontWeight: "bold",
                  }}
                >
                  {item?.facility || ""}
                </Typography>
              </Grid>
              <Grid
                item
                xs={1}
                sx={{
                  display: "flex",
                  color: "#000",
                  fontWeight: "bold",
                }}
                justifyContent="right"
                alignItems="center"
              >
                {isOpenedFacilities?.includes(item.id) ? (
                  <ExpandLessRoundedIcon
                    sx={{ fontSize: { xs: "34px", sm: "40px" } }}
                  />
                ) : (
                  <ExpandMoreRoundedIcon
                    sx={{ fontSize: { xs: "34px", sm: "40px" } }}
                  />
                )}
              </Grid>
              <Grid
                item
                xs={11}
                padding="20px 0"
                sx={{
                  display: isOpenedFacilities?.includes(item.id)
                    ? "flex"
                    : "none",
                  flexDirection: "column",
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
