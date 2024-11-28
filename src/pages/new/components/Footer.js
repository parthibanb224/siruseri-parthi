import React from "react";
import { Grid, Typography, Link, Button } from "@mui/material";

function FooterSection() {
  const scrollToView = (target) => {
    const section = document.querySelector(target);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    // if (isMobile === true) {
    //   handleMenuClose();
    // }
  };

  return (
    <Grid
      container
      sx={{
        backgroundColor: "#f5f5f5",
        paddingBottom: "1.5rem",
        padding: { md: "50px", xs: "20px" },
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: "space-around",
          marginTop: "20px",
          rowGap: { xs: "20px", md: "0" }, // Adds spacing between rows for mobile
        }}
      >
        {/* Explore Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            fontWeight={600}
            sx={{
              fontSize: { xs: "20px", lg: "24px" },
              marginBottom: "10px",
            }}
          >
            Explore
          </Typography>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {[
              { name: "Overview", id: "overview" },
              { name: "Amenities", id: "amenities" },
              { name: "Price", id: "price" },
              { name: "Floor-Plan", id: "floorPlan" },
              { name: "Gallery", id: "Gallery" },
              { name: "Location", id: "locationmap" },
            ].map((item, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <Button
                  onClick={() => {
                    scrollToView(`#${item.id}`);
                  }}
                  color="inherit"
                  underline="hover"
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "14px",
                        lg: "16px",
                        textTransform: "capitalize",
                      },
                    }}
                  >
                    {item.name}
                  </Typography>
                </Button>
              </li>
            ))}
          </ul>
        </Grid>

        {/* Site and Corporate Address */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            fontWeight={600}
            sx={{ fontSize: { xs: "20px", lg: "24px" }, marginBottom: "10px" }}
          >
            Site Address
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: "14px", lg: "16px" } }}
          >
            Survey no. 116/1 to 116/9,
            <br />
            Siruseri village, Chennai,
            <br />
            Tamil Nadu-603 103.
          </Typography>
          <Typography
            fontWeight={600}
            mt={2}
            sx={{ fontSize: { xs: "20px", lg: "24px" } }}
          >
            Corporate Address
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: "14px", lg: "16px" } }}
          >
            Plot No.'A', No. 36/1,
            <br />
            Gandhi Mandapam Road,
            <br />
            Kotturpuram,
            <br />
            Chennai - 600 085.
          </Typography>
        </Grid>

        {/* Map Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            width: "100%",
          }}
        >
          <Typography
            fontWeight={600}
            sx={{
              fontSize: { xs: "20px", lg: "24px" },
              marginBottom: "10px",
            }}
          >
            Location
          </Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7780.500587181455!2d80.202401!3d12.8270962!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a525b2c2fa92a95%3A0x7513c77caf9ef2f0!2sUrbanrise%20The%20World%20of%20Joy%20SURVEY%20NO.117%2F2%20Siruseri%2C%20Tamil%20Nadu%20603103!3m2!1d12.8270962!2d80.202401!5e0!3m2!1sen!2sin!4v1690797014899!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            title="Location Map"
          />
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Typography
        sx={{
          width: "100%",
          textAlign: "center",
          marginTop: "30px",
          fontSize: "14px",
        }}
      >
        ©2024 Urbanrise THE WORLD OF JOY. All Rights Reserved
      </Typography>
    </Grid>
  );
}

export default FooterSection;
