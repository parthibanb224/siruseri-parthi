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

export default function PriceDetails({ content, setOpenEnquiry }) {
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
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url(/nlpImages/AllianceSiruseri_Image-05.jpg), lightgray 50% / cover no-repeat",
        backgroundSize: "cover",
        padding: "00px 0px 20px 0",
        justifyContent: "center",
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
            color: "#fff",
          }}
        >
          {content?.subTitle || ""}
        </Typography>
      </Grid>
      <Grid container item xs={11} sm={9} sx={{ paddingTop: "20px" }}>
        <TableContainer component={Paper} sx={{ borderRadius: "14px" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    background: "#F9B800",
                    fontSize: { xs: "14px", sm: "24px" },
                    fontWeight: "bolder",
                    padding: "20px 0",
                    borderRight: "1px solid #000",
                  }}
                  align="center"
                >
                  Unit Type
                </TableCell>
                <TableCell
                  sx={{
                    background: "#F9B800",
                    fontSize: { xs: "14px", sm: "24px" },
                    fontWeight: "bolder",
                    padding: "20px 0",
                    borderRight: "1px solid #000",
                  }}
                  align="center"
                >
                  Price
                </TableCell>
                <TableCell
                  sx={{
                    background: "#F9B800",
                    fontSize: { xs: "14px", sm: "24px" },
                    fontWeight: "bolder",
                    padding: "20px 0",
                  }}
                  align="center"
                >
                  Enquire
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(content?.tableData || []).map((item) => (
                <TableRow
                  key={item?.unitType}
                  sx={{
                    "&:last-child td, &:last-child th": { borderBottom: 0 },
                  }}
                >
                  <TableCell
                    sx={{
                      fontSize: { xs: "10px", sm: "18px" },
                      fontWeight: "bolder",
                      borderRight: "1px solid #000",
                    }}
                    align="center"
                    component="th"
                    scope="row"
                  >
                    {item?.unitType}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontSize: { xs: "10px", sm: "18px" },
                      fontWeight: "bolder",
                      borderRight: "1px solid #000",
                    }}
                  >
                    {item?.price || ""}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => setOpenEnquiry(!item?.isSoldOut)}
                      sx={{
                        background: item?.isSoldOut ? "#beb69b" : "#F9B800",
                        color: "#000000",
                        borderRadius: "9px",
                        textTransform: "none",
                        height: "fit-content",
                        padding: { xs: "10px 10px", sm: "10px 30px" },
                        fontWeight: "bolder",
                        fontSize: { xs: "10px", sm: "18px" },
                        boxShadow: item?.isSoldOut
                          ? "0px 0px 0px 0px black"
                          : "",
                        width: { xs: "100px", md: "180px" },
                        ":hover": {
                          background: item?.isSoldOut ? "#beb69b" : "#F9B800",
                          boxShadow: item?.isSoldOut
                            ? "0px 0px 0px 0px black"
                            : "",
                        },
                        position: "relative",
                      }}
                      variant="contained"
                    >
                      {item?.isSoldOut ? "Sold Out" : item?.enquire || ""}
                      {item?.isLimitedSale ? (
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
                            animation: "tilt 1s infinite ease-in-out",
                            "@keyframes tilt": {
                              "0%": { transform: "rotate(0deg)" },
                              "50%": { transform: "rotate(12deg)" },
                              "100%": { transform: "rotate(0deg)" },
                            },
                          }}
                        >
                          Few Left
                        </Typography>
                      ) : null}
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
  content: PropTypes.object.isRequired,
  setOpenEnquiry: PropTypes.func.isRequired,
};
