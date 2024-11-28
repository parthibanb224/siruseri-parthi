import React from "react";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import DomainRoundedIcon from "@mui/icons-material/DomainRounded";

export default function Downloads({ content, setOpenEnquiry }) {
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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        item
        xs={12}
        sx={{
          width: "100%",
          height: "100%",
          background: "rgba(255, 217, 102)",
          padding: { xs: "10px", sm: "30px" },
        }}
      >
        <Grid
          item
          xs={content?.titleCol?.xs}
          sm={content?.titleCol?.sm}
          md={content?.titleCol?.md}
          lg={content?.titleCol?.lg}
          xl={content?.titleCol?.xl}
          sx={{
            border: {
              sm: "none",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center" },
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "20px", sm: "40px" },
              fontWeight: "bolder",
              color: "#000000",
              padding: { xs: "20px 0", sm: 0 },
            }}
          >
            {content?.title || ""}
          </Typography>
        </Grid>
        <Grid
          item
          xs={content?.linkContainerCol?.xs}
          sm={content?.linkContainerCol?.sm}
          md={content?.linkContainerCol?.md}
          lg={content?.linkContainerCol?.lg}
          xl={content?.linkContainerCol?.xl}
          sx={{
            borderLeft: { xs: "none", sm: "2px solid #000000" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={content?.linkCol?.xs}
            sm={content?.linkCol?.sm}
            md={content?.linkCol?.md}
            lg={content?.linkCol?.lg}
            xl={content?.linkCol?.xl}
            sx={{
              width: "100%",
              border: "2px solid #ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "22px",
              padding: { xs: "20px", sm: "15px" },
              background: "#000000",
              margin: { xs: "20px 0", sm: "0 30px" },
            }}
          >
            <DescriptionRoundedIcon
              sx={{ color: "#ffffff", fontSize: "40px" }}
            />
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "16px", sm: "20px" },
                color: "#ffffff",
                padding: "10px 0",
              }}
            >
              Brouchure
            </Typography>
            <Typography
              component="a"
              onClick={() => setOpenEnquiry(true)}
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                color: "#F9B800",
                borderBottom: "1px solid #F9B800",
                cursor: "pointer",
              }}
            >
              Click here
            </Typography>
          </Grid>
          <Grid
            xs={content?.linkCol?.xs}
            sm={content?.linkCol?.sm}
            md={content?.linkCol?.md}
            lg={content?.linkCol?.lg}
            xl={content?.linkCol?.xl}
            sx={{
              width: "100%",
              border: "2px solid #ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "22px",
              padding: { xs: "20px", sm: "15px" },
              background: "#000000",
              margin: { xs: "20px 0", sm: "0 30px" },
            }}
          >
            <LocalOfferRoundedIcon
              sx={{ color: "#ffffff", fontSize: "40px" }}
            />
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "16px", sm: "20px" },
                color: "#ffffff",
                padding: "10px 0",
              }}
            >
              Price plan
            </Typography>
            <Typography
              component="a"
              onClick={() => setOpenEnquiry(true)}
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                color: "#F9B800",
                borderBottom: "1px solid #F9B800",
                cursor: "pointer",
              }}
            >
              Click here
            </Typography>
          </Grid>{" "}
          <Grid
            xs={content?.linkCol?.xs}
            sm={content?.linkCol?.sm}
            md={content?.linkCol?.md}
            lg={content?.linkCol?.lg}
            xl={content?.linkCol?.xl}
            sx={{
              width: "100%",
              border: "2px solid #ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "22px",
              padding: { xs: "20px", sm: "15px" },
              background: "#000000",
              margin: { xs: "20px 0", sm: "0 30px" },
            }}
          >
            <DomainRoundedIcon sx={{ color: "#ffffff", fontSize: "40px" }} />
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "16px", sm: "20px" },
                color: "#ffffff",
                padding: "10px 0",
              }}
            >
              Floor plan
            </Typography>
            <Typography
              component="a"
              onClick={() => setOpenEnquiry(true)}
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                color: "#F9B800",
                borderBottom: "1px solid #F9B800",
                cursor: "pointer",
              }}
            >
              Click here
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
Downloads.propTypes = {
  content: PropTypes.object.isRequired,
  setOpenEnquiry: PropTypes.func.isRequired,
};
