import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Img from "../../../../public/Images-new/true-perfect-2.png";
import Img1 from "../../../../public/Images-new/true-perfect.png";

export default function OverviewImage() {
  return (
    <Grid container item xs={12} position={"relative"} marginTop={"200px"}>
      <Grid
        container
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "100%",
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
            width: "100%",
            objectFit: "cover",
          }}
          sizes="100vw"
        />
      </Grid>
      <Grid container item xs={12} position={"absolute"} top="-200px">
        <Grid container item xs={6} justifyContent={"center"}>
          <Grid
            container
            item
            xs={8}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              height: { xs: "35px", sm: "350px" },
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src={Img1}
              alt="logo"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
              sizes="100vw"
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={6}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid
            container
            item
            xs={12}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography sx={{ fontSize: "25px", marginBottom: "80px" }}>
              True Perfection
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
