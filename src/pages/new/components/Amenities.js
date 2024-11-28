import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Img from "../../../../public/Images-new/amenities-img-1.png";
import Img1 from "../../../../public/Images-new/amenities-6.png";

const content = [
  { item: Img1, title: "Podium Garden", alt: "img1" },
  { item: Img1, title: "Podium Garden", alt: "img1" },
  { item: Img1, title: "Podium Garden", alt: "img1" },
  { item: Img1, title: "Podium Garden", alt: "img1" },
];

export default function Amenities() {
  return (
    <Grid container item xs={12} padding={"20px 20px"} alignItems={"center"}>
      <Grid container item xs={8} spacing={5}>
        <Grid container item xs={12}>
          <Typography sx={{ fontSize: "40px" }}>Amenities</Typography>
        </Grid>
        <Grid container item xs={12} spacing={5}>
          {(content || [])?.map((val) => (
            <Grid key={val.alt} container item xs={4} spacing={2}>
              <Grid
                container
                item
                xs={12}
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  height: { xs: "35px", sm: "200px" },
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src={Img1}
                  alt="logo"
                  style={{
                    height: "100%",
                    width: "auto",
                    objectFit: "cover",
                  }}
                  sizes="100vw"
                />
              </Grid>
              <Grid container item xs={12} justifyContent={"center"}>
                <Typography>Podium Garden</Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container item xs={4}>
        <Grid
          container
          item
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            height: { xs: "35px", sm: "700px" },
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={Img}
            alt="logo"
            style={{
              height: "100%",
              width: "auto",
              objectFit: "cover",
            }}
            sizes="100vw"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
