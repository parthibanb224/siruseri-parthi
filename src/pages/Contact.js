import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { LoadingButton } from "@mui/lab";
import CallIcon from "@mui/icons-material/Call";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import useForm from "../useForm";

const ctaBtnNaming = {
  callBtn: "CALL NOW",
  formPopup: "GET COST SHEET",
};
export default function Contact({ setOpenEnquiry, phoneNumber }) {
  const [enquiryEnabled, setEnquiryEnabled] = useState(false);
  const {
    userData,
    errorMsgs,
    isLoading,
    setUserData,
    setIsDirty,
    submitForm,
  } = useForm();

  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      const threshold80vh = 0.1 * viewportHeight;
      const threshold120vh = 1.1 * viewportHeight;
      const threshold180px = 2 * viewportHeight;

      if (scrollY > threshold80vh && scrollY < threshold120vh) {
        setShowButton(true);
      } else if (scrollY >= threshold120vh && scrollY < threshold180px) {
        setShowButton(false);
      } else if (scrollY >= threshold180px) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Grid
      container
      item
      xs={12}
      sm={6}
      sx={{
        position: "fixed",
        bottom: 0,
        right: { xs: 0, sm: 0 },
        width: "100%",
        justifyContent: { xs: "space-between", md: "flex-end" },
        alignItems: "flex-end",
      }}
    >
      {phoneNumber ? (
        <Grid
          item
          xs={6}
          width="100%"
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <Button
            onClick={() => window.open(`tel: ${phoneNumber}`)}
            id="submit-btn"
            className="submit-btn"
            sx={{
              width: "100%",
              height: { xs: "48px", sm: "70px" },
              background: "#003152",
              color: "#ffffff",
              fontSize: { xs: "14px", sm: "16px" },
              borderStyle: "solid",
              borderColor: "#ffffff",
              marginRight: "2px",
              padding: "6px 6px",
              ":hover": {
                background: "#003152",
              },
            }}
            variant="contained"
          >
            <CallIcon
              sx={{
                paddingLeft: { xs: "5px", sm: "10px" },
                fontSize: { xs: "20px", sm: "30px" },
                fontWeight: "bolder",
              }}
            />{" "}
            <Typography
              component="span"
              sx={{
                paddingLeft: { xs: "5px", sm: "10px" },
                fontSize: { xs: "14px", sm: "24px" },
                fontWeight: "bolder",
              }}
            >
              {ctaBtnNaming?.callBtn}
            </Typography>
          </Button>
        </Grid>
      ) : null}

      <Button
        onClick={() => setOpenEnquiry(true)}
        sx={{
          width: "50%",
          height: "48px",
          display: { xs: "block", sm: "none" },
          justifyContent: "center",
          background: "#F9B800",
          color: "#000000",
          fontWeight: "bolder",
          fontSize: "14px",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          padding: "0 10px",
          ":hover": {
            background: "#F9B800",
          },
        }}
        variant="contained"
      >
        {ctaBtnNaming?.formPopup}
      </Button>
      <Grid
        container
        item
        xs={12}
        md={6}
        justifyContent="center"
        width="100%"
        sx={{ zIndex: 9999 }}
      >
        {showButton && (
          <>
            <Grid
              onClick={() => setEnquiryEnabled(!enquiryEnabled)}
              sx={{
                width: "95%",
                height: { xs: "48px", sm: "50px" },
                display: { xs: "none", sm: "flex" },
                background: "#F9B800",
                color: "#000000",
                fontWeight: "bolder",
                fontSize: { xs: "14px", sm: "18px" },
                borderTopLeftRadius: { xs: "17px", sm: "18px" },
                borderTopRightRadius: { xs: "17px", sm: "18px" },
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                padding: { xs: "0 10px", sm: "0 20px" },
                zIndex: 9999,
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "end",
              }}
              variant="contained"
            >
              <Grid
                sx={{
                  // border: "1px solid black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  gap: "80px",
                  zIndex: 9999,
                }}
              >
                <Typography>{ctaBtnNaming?.formPopup}</Typography>
                {enquiryEnabled ? (
                  <RemoveIcon
                    sx={{
                      fontSize: { xs: "25px", sm: "30px" },
                      fontWeight: "bold",
                    }}
                  />
                ) : (
                  <AddIcon
                    sx={{
                      fontSize: { xs: "25px", sm: "30px" },
                      fontWeight: "bold",
                    }}
                  />
                )}
              </Grid>
            </Grid>

            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              sx={{
                height: enquiryEnabled ? "400px" : "0px",
                transition: "height 1s ease-in-out",
                background: "#ffffff",
                margin: "0 12px",
              }}
            >
              <Grid container item justifyContent="center" xs={12}>
                <Grid
                  item
                  xs={10}
                  style={{
                    margin: "30px 0 0 0",
                  }}
                >
                  <TextField
                    type="text"
                    id="outlined-basi01"
                    value={userData.userName}
                    error={!!errorMsgs.userName}
                    helperText={errorMsgs?.userName || ""}
                    onBlur={() => {
                      setIsDirty((d) => ({
                        ...d,
                        userName: true,
                      }));
                    }}
                    onChange={(e) => {
                      setUserData({
                        ...userData,
                        userName: e.target.value || "",
                      });
                    }}
                    placeholder="Name"
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root .MuiInputBase-input": {
                        background: "rgba(0, 0, 0, 0.04)",
                        borderRadius: "9px",
                      },
                      "& .MuiFormHelperText-root": {
                        fontSize: "12px",
                      },
                    }}
                    InputProps={{
                      sx: {
                        height: "50px",
                      },
                    }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12}>
                <Grid
                  item
                  xs={10}
                  style={{
                    margin: "10px 0 0 0",
                  }}
                >
                  <TextField
                    type="text"
                    id="outlined-basic02"
                    value={userData.phoneNo}
                    error={!!errorMsgs.phoneNo}
                    helperText={errorMsgs?.phoneNo || ""}
                    onBlur={() => {
                      setIsDirty((d) => ({
                        ...d,
                        phoneNo: true,
                      }));
                    }}
                    onChange={(e) => {
                      setUserData({
                        ...userData,
                        phoneNo: e.target.value || "",
                      });
                    }}
                    placeholder="Phone number"
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root .MuiInputBase-input": {
                        background: "rgba(0, 0, 0, 0.04)",
                      },
                      "& .MuiFormHelperText-root": {
                        fontSize: "12px",
                      },
                    }}
                    InputProps={{
                      sx: {
                        height: "50px",
                      },
                    }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12}>
                <Grid
                  item
                  xs={10}
                  style={{
                    margin: "10px 0 0 0",
                  }}
                >
                  <TextField
                    type="email"
                    id="outlined-basic03"
                    value={userData.email}
                    error={!!errorMsgs.email}
                    helperText={errorMsgs?.email || ""}
                    onBlur={() => {
                      setIsDirty((d) => ({
                        ...d,
                        email: true,
                      }));
                    }}
                    onChange={(e) => {
                      setUserData({
                        ...userData,
                        email: e.target.value || "",
                      });
                    }}
                    placeholder="Email"
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root .MuiInputBase-input": {
                        background: "rgba(0, 0, 0, 0.04)",
                      },
                      "& .MuiFormHelperText-root": {
                        fontSize: "12px",
                      },
                    }}
                    InputProps={{
                      sx: {
                        height: "50px",
                      },
                    }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid item xs={10} style={{ paddingTop: "20px" }}>
                <LoadingButton
                  onClick={() => submitForm()}
                  style={{
                    width: "100%",
                    height: "50px",
                    background: "#F9B800",
                    textTransform: "capitalize",
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                  loading={isLoading}
                  variant="contained"
                >
                  Submit
                </LoadingButton>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
}
Contact.propTypes = {
  setOpenEnquiry: PropTypes.func.isRequired,
  phoneNumber: PropTypes.string.isRequired,
};
