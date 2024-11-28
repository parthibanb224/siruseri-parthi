import React, { Suspense } from "react";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

export default function WalkThrough({ content }) {
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
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#1a1f0c",
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
            color: "#F9B800",
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
            color: "white",
          }}
        >
          {content?.subTitle || ""}
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
