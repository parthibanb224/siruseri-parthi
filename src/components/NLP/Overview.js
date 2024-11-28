import React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import exterior2 from "../../../public/images/Elevation.jpg";

export default function Overview({ content }) {
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
      <Grid
        container
        item
        xs={content?.imgCol?.xs}
        sm={content?.imgCol?.sm}
        md={content?.imgCol?.md}
        lg={content?.imgCol?.lg}
        xl={content?.imgCol?.xl}
        sx={{
          position: "relative",
          // height: "400px",
          display: { xs: "flex", sm: "none" },
          marginBottom: "20px",
          marginTop: "0px",
        }}
      >
        {/* <Image
          // fill
          src={exterior2}
          style={{ objectFit: "contain" }}
          alt="location map"
          // sizes="50vw"
          width="100%"
          height={400}
        /> */}
      </Grid>
      <Grid
        container
        item
        xs={content?.contentCol?.xs}
        sm={content?.contentCol?.sm}
        md={content?.contentCol?.md}
        lg={content?.contentCol?.lg}
        xl={content?.contentCol?.xl}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          item
          xs={10}
          sx={{
            border: { xs: "none", md: "1px solid #000" },
            padding: { xs: "0px", md: "30px" },
            height: "fit-content",
            position: "relative",
          }}
        >
          <Grid item xs={12}>
            <Typography
              component="h1"
              sx={{
                padding: "10px",
                fontSize: { xs: "14px", sm: "20px" },
                fontWeight: "bolder",
                color: "#644A00",
                textAlign: "center",
              }}
            >
              {content?.title || ""}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "20px", sm: "36px" },
                fontWeight: "bold",
                color: "#000000",
                textAlign: "center",
              }}
            >
              {content?.subTitle || ""}
            </Typography>
          </Grid>
          <Typography
            component="li"
            sx={{
              padding: "10px 0",
              fontSize: { xs: "14px", sm: "18px" },
              color: "#000",
              listStyle: "none",
              "::before": {
                content: '"♦"',
                color: "#006CB5",
                paddingRight: "0px",
              },
            }}
          >
            {content?.listItem1 || ""}
          </Typography>
          <Typography
            component="li"
            sx={{
              padding: "0px 0",
              fontSize: { xs: "14px", sm: "18px" },
              color: "#000",
              listStyle: "none",
              marginBottom: "30px",
              "::before": {
                content: '"♦"',
                color: "#006CB5",
                paddingRight: "0px",
              },
            }}
          >
            {content?.listItem2 || ""}
          </Typography>

          <Box
            sx={{
              position: "absolute",
              right: 0,
              top: "15%",
              width: "20px",
              height: "70%",
              background: "#fff",
              transform: "translate(50%,0)",
            }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        item
        xs={content?.imgCol?.xs}
        sm={content?.imgCol?.sm}
        md={content?.imgCol?.md}
        lg={content?.imgCol?.lg}
        xl={content?.imgCol?.xl}
        sx={{
          position: "relative",
          height: "500px",
          display: { xs: "none", sm: "flex" },
        }}
      >
        <Image
          fill
          src={exterior2}
          style={{ objectFit: "cover" }}
          alt="location map"
          sizes="100vw"
        />
      </Grid>
    </Grid>
  );
}
Overview.propTypes = {
  content: PropTypes.object.isRequired,
};
