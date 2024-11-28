import React from "react";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import { LoadingButton } from "@mui/lab";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import useForm from "../../../useForm";

export default function EnquiryFormPopup({ openEnquiry, setOpenEnquiry }) {
  const {
    userData,
    errorMsgs,
    isLoading,
    setUserData,
    setIsDirty,
    submitForm,
  } = useForm();

  const onClose = () => {
    setOpenEnquiry(false);
  };
  return (
    <Dialog
      open={openEnquiry}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        background: "rgba(0, 0, 0, 0.88)",
        height: "100vh",
        ".MuiDialog-paper": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: { xs: "17px", sm: "24px" },
          background: "black",
          maxWidth: { xs: "md", sm: "25%" },
          height: "55%",
          width: "100%",
          "::-webkit-scrollbar": {
            display: "none",
          },
        },
      }}
    >
      <Grid container item xs={12} width="100%">
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "15%", background: "#F9B800", position: "relative" }}
        >
          <Typography
            component="h1"
            sx={{
              textAlign: "center",
              width: "100%",
              color: "#000000",
              fontSize: { xs: "14px", sm: "24px" },
              padding: { xs: "0 10px", sm: "0 30px" },
              fontWeight: "bolder",
            }}
          >
            ENQUIRE NOW
          </Typography>
          <CloseRoundedIcon
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 5,
              top: 5,
              fontSize: { xs: "25px", sm: "30px" },
              fontWeight: "bold",
              cursor: "pointer",
            }}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          sx={{
            height: "85%",
            transition: "height 1s ease-in-out",
            background: "#ffffff",
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
                    padding: { xs: "10px", sm: "12px 10px" },
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "12px",
                  },
                }}
                InputProps={{
                  sx: {
                    height: { xs: "40px", sm: "50px" },
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
                    padding: { xs: "10px", sm: "12px 10px" },
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "12px",
                  },
                }}
                InputProps={{
                  sx: {
                    height: { xs: "40px", sm: "50px" },
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
                    padding: { xs: "10px", sm: "12px 10px" },
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "12px",
                  },
                }}
                InputProps={{
                  sx: {
                    height: { xs: "40px", sm: "50px" },
                  },
                }}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item xs={10} style={{ paddingTop: "20px" }}>
            <LoadingButton
              onClick={() => submitForm()}
              sx={{
                width: "100%",
                height: { xs: "40px", sm: "50px" },
                background: "#F9B800",
                textTransform: "capitalize",
                color: "#000000",
                fontWeight: "bold",
                fontSize: { xs: "14px", sm: "18px" },
              }}
              id="submit-btn"
              className="submit-btn"
              loading={isLoading}
              variant="contained"
            >
              Submit
            </LoadingButton>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
}
EnquiryFormPopup.propTypes = {
  openEnquiry: PropTypes.bool.isRequired,
  setOpenEnquiry: PropTypes.func.isRequired,
};
