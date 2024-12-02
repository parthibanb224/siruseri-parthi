import React, { useState } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import { useAddFormDataMutation } from "../../../reduxSlice/apiSlice";

const Form = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    phoneNo: "",
  });
  const [errorMsgs, setErrorMsgs] = useState({
    userName: "",
    email: "",
    phoneNo: "",
  });
  const [isDirty, setIsDirty] = useState({
    userName: false,
    email: false,
    phoneNo: false,
  });

  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [addFormData, { isLoading }] = useAddFormDataMutation();

  const handleSubmit = () => {
    if (Object.values(errorMsgs).some((msg) => msg)) return;

    addFormData(userData)
      .unwrap()
      .then(() => {
        setUserData({ userName: "", email: "", phoneNo: "" });
        setIsDirty({ userName: false, email: false, phoneNo: false });
        router.push("/thanku");
      })
      .catch(() => {
        enqueueSnackbar("Something went wrong. Please try again.", {
          variant: "error",
        });
      });
  };

  return (
    <Grid container sx={{ minHeight: "70vh" }}>
      {/* Left Side: Image */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: { md: "flex", xs: "none" },
          backgroundImage: "url('/nlpImages/Exterior/Exterior 1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Right Side: Form */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 20px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "12px",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              background:
                "linear-gradient(90deg, rgba(21,100,53,1) 0%, rgba(0,162,216,1) 50%)",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ marginBottom: "20px", color: "#ccc" }}
          >
            Please enter your details, and we'll get in touch with you.
          </Typography>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            <TextField
              label="Full Name"
              variant="outlined"
              value={userData.userName}
              error={!!errorMsgs.userName}
              helperText={errorMsgs.userName || ""}
              onChange={(e) =>
                setUserData({ ...userData, userName: e.target.value })
              }
              onBlur={() => setIsDirty({ ...isDirty, userName: true })}
              InputLabelProps={{ style: { color: "#ccc" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  "& fieldset": { borderColor: "#555" },
                  "&:hover fieldset": { borderColor: "#888" },
                },
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              value={userData.email}
              error={!!errorMsgs.email}
              helperText={errorMsgs.email || ""}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              onBlur={() => setIsDirty({ ...isDirty, email: true })}
              InputLabelProps={{ style: { color: "#ccc" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  "& fieldset": { borderColor: "#555" },
                  "&:hover fieldset": { borderColor: "#888" },
                },
              }}
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              value={userData.phoneNo}
              error={!!errorMsgs.phoneNo}
              helperText={errorMsgs.phoneNo || ""}
              onChange={(e) =>
                setUserData({ ...userData, phoneNo: e.target.value })
              }
              onBlur={() => setIsDirty({ ...isDirty, phoneNo: true })}
              InputLabelProps={{ style: { color: "#ccc" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  "& fieldset": { borderColor: "#555" },
                  "&:hover fieldset": { borderColor: "#888" },
                },
              }}
            />
            <LoadingButton
              loading={isLoading}
              onClick={handleSubmit}
              variant="contained"
              sx={{
                height: "48px",
                background:
                  "linear-gradient(90deg, rgba(21,100,53,1) 0%, rgba(0,162,216,1) 50%)",
                color: "#FFFFFF",
                color: "#FFFFFF",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Submit
            </LoadingButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Form;
