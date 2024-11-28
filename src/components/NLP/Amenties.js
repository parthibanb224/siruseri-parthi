import React from "react";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";

export default function Amenties({ content }) {
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
        padding: { xs: "0", sm: "0px 0 0px 0" },
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Image
        fill
        src="/nlpImages/amenities_bg.webp"
        alt="amenities-bg-img"
        style={{ zIndex: "-1" }}
      />
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
            fontSize: { xs: "14px", sm: "20px" },
            fontWeight: "bolder",
            color: "#644A00",
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
          {content?.subTitle || ""}?
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={content?.subContainerCol?.xs}
        sm={content?.subContainerCol?.sm}
        md={content?.contsubContainerColainerCol?.md}
        lg={content?.subContainerCol?.lg}
        xl={content?.subContainerCol?.xl}
        sx={{ marginTop: "10px" }}
      >
        <Grid
          container
          item
          xs={12}
          sx={{
            justifyContent: { xs: "space-between", md: "space-around" },
          }}
        >
          {(content?.amenities?.slice(0, 6) || [])?.map((item) => (
            <Grid
              container
              item
              key={item?.title}
              xs={5}
              md={3}
              sx={{
                margin: {
                  xs: "10px",
                  sm: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              <Grid
                item
                xs={3}
                sm={3}
                sx={{
                  background: "#F9B800",
                  aspectRatio: "1/1",
                  borderRadius: { xs: "17px 5px", sm: "21px 8px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: { xs: "5px", sm: "10px" },
                  marginBottom: {
                    xs: "0px",
                    md: "1rem",
                  },
                }}
              >
                <Box
                  sx={{
                    background: `url(${item?.img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "100%",
                    aspectRatio: "1/1",
                    // margin: "15px",
                    backgroundSize: "contain",
                  }}
                />
              </Grid>
              <Grid
                container
                item
                xs={9}
                sm={10}
                sx={{
                  textAlign: "center",
                }}
              >
                <Grid item xs={12}>
                  <Typography
                    component="h1"
                    sx={{
                      fontSize: { xs: "12px", sm: "20px" },
                      fontWeight: "bold",
                      color: "#000000",
                    }}
                  >
                    {item?.title || ""}
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: { xs: "none", sm: "flex" } }}>
                  <Typography
                    component="h1"
                    sx={{
                      fontSize: "14px",
                      color: "#000000",
                    }}
                  >
                    {item?.description || ""}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
Amenties.propTypes = {
  content: PropTypes.object.isRequired,
};
