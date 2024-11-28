import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { LoadingButton } from "@mui/lab";
import useForm from "../../useForm";

export default function Enquire({ content }) {
  const {
    userData,
    errorMsgs,
    isLoading,
    setUserData,
    setIsDirty,
    submitForm,
  } = useForm();
  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        background: "rgba(0, 108, 181, 0.10)",
        borderRadius: "0 0 20px 20px",
        overflow: "hidden",
        justifyContent: "center",
        alignContent: "flex-start",
        display: { xs: "flex", sm: "none" },
      }}
    >
      <Grid
        container
        item
        xs={11}
        sx={{
          background: content?.style?.formBg,
          borderRadius: "20px",
          overflow: "hidden",
          justifyContent: "center",
          alignContent: "flex-start",
          margin: "30px 0",
          display: { xs: "flex", sm: "none" },
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            height: "20px",
            background: content?.style?.formTopColor,
          }}
        />
        <Grid item xs={11}>
          <Typography
            component="h1"
            sx={{
              padding: "30px 0 10px 0",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#000000",
            }}
          >
            ENQUIRE NOW
          </Typography>
        </Grid>
        <Grid container item xs={11} justifyContent="flex-start">
          <Grid container item xs={12} style={{ margin: "10px 0" }}>
            <Grid
              item
              xs={12}
              style={{
                margin: "10px 0 0 0",
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
          <Grid container item xs={12} style={{ margin: "10px 0" }}>
            <Grid item xs={12}>
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
          <Grid container item xs={12} style={{ margin: "10px 0" }}>
            <Grid item xs={12}>
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
          <Grid item xs={12} style={{ paddingTop: "30px" }}>
            <LoadingButton
              onClick={() => submitForm()}
              style={{
                width: "100%",
                height: "50px",
                background: "#F9B800",
                textTransform: "capitalize",
                color: "#000000",
                fontWeight: "bold",
                fontSize: { xs: "14px", sm: "18px" },
                marginBottom: "20px",
              }}
              loading={isLoading}
              variant="contained"
              id="submit-btn"
              className="submit-btn"
            >
              Submit
            </LoadingButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
