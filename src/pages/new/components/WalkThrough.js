import React, { Suspense } from "react";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

const data = [
  {
    id: 8,
    type: "walkthrough",
    title: "― Walkthrough ―",
    subTitle: " The World Of Joy Walkthrough Video",
    videoUrl:
      "https://player.vimeo.com/video/787904048?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    containerCol: {
      xs: 12,
    },
    videoCol: {
      xs: 11,
    },
  },
];

export default function WalkThrough({}) {
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
      sx={{
        // backgroundColor:"#F1F0E8",
        backgroundImage: "url('/Images/walkway-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
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
            padding: "20px 0 10px 0",
            fontSize: { xs: "14px", sm: "35px" },
            fontWeight: "bolder",
            // background:
            //   "linear-gradient(90deg, rgba(21,100,53,1) 0%, rgba(0,162,216,1) 50%)",
            // WebkitTextFillColor: "transparent",
            // backgroundClip: "text",
            textTransform: "uppercase",
            color: "#FFFFFF",
          }}
        >
          {"Step Into Your Dream Home"}
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
            color: "#FFFFFF",
            padding: "3px 0 10px 0",
            fontSize: { xs: "14px", sm: "16px" },
          }}
        >
          {"A World Where Comfort Meets Elegance"}
        </Typography>
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
          marginTop: "20px",
          marginBottom: "50px",
          position: "relative",
          height: { xs: "180px", sm: "480px" },
          borderRadius: { xs: "16px", sm: "48px" },
          overflow: "hidden",
        }}
      >
        <Suspense fallback={<p>Loading video...</p>}>
          <iframe
            width="100%"
            height="100%"
            src={content?.videoUrl}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="Uber Stylish Apartments at Siruseri, Gateway to Your Dream Living"
          />
        </Suspense>
      </Grid>
    </Grid>
  );
}
WalkThrough.propTypes = {
  content: PropTypes.object.isRequired,
};