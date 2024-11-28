import React from "react";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const content = [
  {
    id: 3,
    type: "priceDetails",
    title: "― Price details ―",
    subTitle: "Configurations",
    tableData: [
      {
        unitType: "2 BHK Regular",
        price: "₹56* Lakhs Onwards",
        enquire: "Enquire now",
        isSoldOut: false,
      },
      {
        unitType: "2 BHK Large",
        price: "₹58* Lakhs Onwards",
        enquire: "Enquire now",
        isSoldOut: false,
      },
      {
        unitType: "3 BHK Regular",
        price: "₹66* Lakhs Onwards",
        enquire: "Enquire now",
        isSoldOut: false,
      },
      {
        unitType: "3 BHK Large",
        price: "₹70* Lakhs Onwards",
        enquire: "Enquire now",
        isSoldOut: false,
      },
    ],
    containerCol: {
      xs: 12,
    },
    tableCol: {
      xs: 9,
    },
  },
];

export default function PriceDetails({ setOpenEnquiry }) {
  const handleEnquiryClick = (isSoldOut) => {
    setOpenEnquiry(!isSoldOut);
  };

  const data = content[0]; // Accessing the first item for rendering

  return (
    <Grid
      id="price"
      container
      item
      xs={data.containerCol.xs}
      sm={data.containerCol.sm || false}
      md={data.containerCol.md || false}
      lg={data.containerCol.lg || false}
      xl={data.containerCol.xl || false}
      sx={{
        backgroundImage: `url('/Images-new/Elevation.webp')`,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "50% 30%",
        backgroundRepeat: "no-repeat",
        justifyContent: "center",
        padding: "30px 0px",
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
            fontSize: { xs: "14px", sm: "30px" },
            fontWeight: "bolder",
            color: "#FFFFFF",
          }}
        >
          {data.title}
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={11}
        sm={9}
        sx={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <TableContainer component={Paper} sx={{ borderRadius: "14px" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {["Unit Type", "Price", "Enquire"].map((header) => (
                  <TableCell
                    key={header}
                    sx={{
                      color: "#FFFFFF",
                      background: "#185676",
                      fontSize: { xs: "14px", sm: "24px" },
                      fontWeight: "bolder",
                      padding: "15px 0",
                      borderRight: header !== "Enquire" ? "1px solid #000" : "",
                    }}
                    align="center"
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.tableData.map((item) => (
                <TableRow key={item.unitType}>
                  <TableCell
                    align="center"
                    sx={{
                      fontSize: { xs: "10px", sm: "18px" },
                      fontWeight: "bolder",
                      borderRight: "1px solid #000",
                      // padding:"0 10px"
                    }}
                  >
                    {item.unitType}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontSize: { xs: "10px", sm: "18px" },
                      fontWeight: "bolder",
                      borderRight: "1px solid #000",
                    }}
                  >
                    {item.price}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => handleEnquiryClick(item.isSoldOut)}
                      sx={{
                        background: item.isSoldOut ? "#beb69b" : "#0797f3",
                        color: "#fff",
                        borderRadius: "9px",
                        textTransform: "none",
                        padding: { xs: "10px 10px", sm: "4px 30px" },
                        fontWeight: "bolder",
                        fontSize: { xs: "10px", sm: "18px" },
                        boxShadow: item.isSoldOut
                          ? "0px 0px 0px 0px black"
                          : "",
                        ":hover": {
                          background: item.isSoldOut ? "#beb69b" : "#0797f3",
                        },
                        position: "relative",
                      }}
                      variant="contained"
                    >
                      {item.isSoldOut ? "Sold Out" : item.enquire}
                      {item.isLimitedSale && (
                        <Typography
                          component="span"
                          sx={{
                            background: "red",
                            padding: { xs: "0px 5px", md: "2px 8px" },
                            position: "absolute",
                            top: "3px",
                            left: { xs: "-20px", md: "-10px" },
                            rotate: "316deg",
                            fontSize: { xs: "10px", md: "12px" },
                            borderRadius: "5px",
                            color: "#fff",
                          }}
                        >
                          Few Left
                        </Typography>
                      )}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

PriceDetails.propTypes = {
  setOpenEnquiry: PropTypes.func.isRequired,
};
