import { Grid, Typography } from "@mui/material";
// import { responsive } from "../pages";

export default function PioneersSection() {
  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        justifyContent: "center",
        gap: "0.6rem",
        display: { xs: "none", lg: "flex" },
        marginTop: "40px",
        height: "60vh",
      }}
    >
      {pioneerData.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={2.5}
          key={index}
          sx={{
            textAlign: "center",
            position: "relative",
            // animation: fadeUp 1s ease-out ${0.2 * index}s forwards,
            "&:after": {
              content: '""',
              display: item.hasBorder ? "block" : "none",
              position: "absolute",
              height: "65px",
              width: "0.5px",
              background: "#C2C2C2",
              right: 0,
              top: "25%",
              //   marginBottom: "20px",
              //   padding: "5px",
            },
          }}
        >
          <img
            src={item.icon}
            alt={item.title}
            style={{ marginBottom: "0.25rem" }}
          />
          <Typography
            component="p"
            sx={{
              //   fontSize: responsive("16px", "18px", "20px"),
              lineHeight: "28px",
              color: item.color,
              fontWeight: "600",
              display: "block",
            }}
          >
            {item.highlight}
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: "14px",
              lineHeight: "22px",
              color: "#212529",
            }}
          >
            {item.description}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

const pioneerData = [
  {
    icon: "https://urbanriseopus96.com/assets/images/home/pioneers-icon1.svg",
    highlight: "20 Years Of Excellence In",
    description: "Real Estate Industry",
    color: "#7855BD",
    hasBorder: true,
  },
  {
    icon: "https://urbanriseopus96.com/assets/images/home/pioneers-icon2.svg",
    highlight: "South India’s Largest",
    description: "Real Estate Developer",
    color: "#8AA027",
    hasBorder: true,
  },
  {
    icon: "https://urbanriseopus96.com/assets/images/home/pioneers-icon3.svg",
    highlight: "72 Million sq. ft.",
    description: "Under Development",
    color: "#17D2D5",
    hasBorder: true,
  },
  {
    icon: "https://urbanriseopus96.com/assets/images/home/pioneers-icon4.svg",
    highlight: "15,000+",
    description: "Happy Customers",
    color: "#55B08C",
    hasBorder: false,
  },
  {
    icon: "https://urbanriseopus96.com/assets/images/home/pioneers-icon5.svg",
    highlight: "Presence in",
    description: "3 Major Cities",
    color: "#B231AF",
    hasBorder: true,
  },
  {
    icon: "https://urbanriseopus96.com/assets/images/home/pioneers-icon6.svg",
    highlight: "51,000cr",
    description: "Real Estate Portfolio",
    color: "#E80EA2",
    hasBorder: true,
  },
  {
    icon: "https://urbanriseopus96.com/assets/images/home/pioneers-icon7.svg",
    highlight: "Projects Funded",
    description: "By World Leading Financial Institutions",
    color: "#DBC80C",
    hasBorder: false,
  },
];
