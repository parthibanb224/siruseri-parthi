import React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import projectHighlightsImg from "../../../public/nlpImages/projectHighlightsImg.webp";

export default function ProjectHighlights({ content }) {
  return (
    <Grid
      container
      item
      xs={12}
      justifyContent="center"
      sx={{
        padding: { xs: "0px 0 0 0", sm: "20px 0 30px 0" },
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
            margin: { xs: "50px 0", md: "100px 0" },
            justifyContent: { xs: "center", md: "flex-end" },
            paddingRight: { xs: "0", sm: "100px" },
          }}
        >
          <Box
            sx={{
              background: "rgba(249, 184, 0, 0.2)",
              aspectRatio: "1/1",
              height: { xs: "245px", sm: "550px" },
              transform: "rotate(7.25deg)",
              borderRadius: "10px",
            }}
          />
          <Box
            sx={{
              background: "#F9B800",
              aspectRatio: "1/1",
              height: { xs: "245px", sm: "550px" },
              transform: "rotate(-7.25deg)",
              position: "absolute",
              top: 0,
              borderRadius: "10px",
            }}
          />
          <Box
            sx={{
              background: "#F9B800",
              aspectRatio: "1/1",
              height: { xs: "245px", sm: "580px" },
              position: "absolute",
              top: 0,
              border: { xs: "5px solid black", md: "10px solid black" },
              borderRadius: "10px",
            }}
          >
            <Image
              fill
              src={projectHighlightsImg}
              style={{ objectFit: "cover" }}
              alt="landingpage"
              sizes="100vw"
            />
          </Box>
        </Grid>
        <Grid
          container
          item
          xs={content?.highlightsCol?.xs}
          sm={content?.highlightsCol?.sm}
          md={content?.highlightsCol?.md}
          lg={content?.highlightsCol?.lg}
          xl={content?.highlightsCol?.xl}
          sx={{
            alignContent: "flex-start",
          }}
        >
          <Grid item xs={12}>
            <Typography
              component="h1"
              sx={{
                padding: { xs: "0px 0 10px 0", md: "30px 0 10px 0" },
                fontSize: { xs: "14px", sm: "20px" },
                fontWeight: "bolder",
                color: "#644A00",
                display: "flex",
                justifyContent: { xs: "center", md: "center" },
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
                display: "flex",
                justifyContent: { xs: "center", md: "center" },
              }}
            >
              {content?.subTitle || ""}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box component="ul" sx={{ listStyle: "none", padding: "0" }}>
              {(content?.highLights || [])?.map((hl) => (
                <Grid
                  key={hl}
                  component="li"
                  sx={{
                    color: "#000000",
                    paddingBottom: "20px",
                    display: "flex",
                  }}
                >
                  <Typography sx={{ padding: { xs: "0px", md: "2px" } }}>
                    🔸
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "14px", sm: "20px" } }}>
                    {" "}
                    {hl || ""}
                  </Typography>
                </Grid>
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
