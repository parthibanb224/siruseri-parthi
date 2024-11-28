import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { LoadingButton } from "@mui/lab";
import { Box, Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import Image from "next/image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import useForm from "../../../useForm";
import urbanriseLogo from "../../../../public/images/urbanrise-logo.png";
import twojLogo from "../../../../public/nlpImages/TWOJ_logo.webp";

// Banner Image
import trishaImg from "../../../../public/images/trisha.png";

const themeColors = {
  primary: "#AF2226",
  secondary: "#DF2127",
  surprise: "#FAB900",
};

function Contact() {
  return (
    <Grid
      container
      item
      xs={12}
      sm={6}
      sx={{
        position: "fixed",
        bottom: 0,
        right: { xs: 0, sm: 50 },
        width: "100%",
        justifyContent: { xs: "center", md: "flex-end" },
        alignItems: "flex-end",
      }}
    >
      <Grid
        item
        xs={6}
        width="100%"
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <Button
          onClick={() => window.open("tel:+91 8510911111")}
          sx={{
            width: "95%",
            height: { xs: "48px", sm: "70px" },
            background: themeColors?.surprise,
            color: "#000",
            fontSize: { xs: "14px", sm: "16px" },
            borderWidth: "3px 3px 0 3px",
            borderStyle: "solid",
            borderColor: "#ffffff",
            borderTopLeftRadius: { xs: "17px", sm: "29px" },
            borderTopRightRadius: { xs: "17px", sm: "29px" },
            marginRight: "20px",
            padding: "6px 6px",
            ":hover": {
              background: themeColors?.surprise,
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
            CALL NOW
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}
export default function Form() {
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
      xs={12}
      sx={{
        height: "100vh",
        padding: { md: "2rem", xs: "0px" },
        justifyContent: "center",
      }}
    >
      <Grid
        container
        item
        xs={12}
        sx={{
          boxShadow:
            " rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          borderRadius: { md: "1rem", xs: "0px" },
          overflow: "hidden",
        }}
      >
        <Grid
          container
          item
          md={6}
          xs={12}
          sx={{
            justifyContent: "center",
            padding: { md: "0rem 1rem", xs: "35px 5px" },
            position: { md: "relative", xs: "absolute" },
            background: "#fff",
            top: { md: "0px", xs: "0px" },
            borderRadius: { md: "0px", xs: "25px 25px 0px 0px" },
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
        >
          <Grid
            container
            item
            xs={12}
            sx={{ alignItems: "center", justifyContent: "space-around" }}
          >
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                justifyContent: "center",
              }}
            >
              <Typography
                component="p"
                sx={{
                  fontSize: "22px",
                  textAlign: { xs: "center", md: "left" },
                  display: { xs: "none", md: "block" },
                }}
              >
                Welcome To The World Of Joy
              </Typography>
              <Typography
                component="p"
                sx={{
                  color: themeColors?.primary,
                  fontSize: "28px",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                150+ Amenities
              </Typography>
              <Typography
                component="p"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  textAlign: { xs: "center", md: "left" },
                  justifyContent: { xs: "center", md: "left" },
                }}
              >
                <FmdGoodIcon sx={{ color: themeColors?.surprise }} />
                <Typography
                  component="span"
                  sx={{
                    fontSize: "22px",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Siruseri , OMR
                </Typography>
              </Typography>

              <Typography
                component="p"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  textAlign: { xs: "center", md: "left" },
                  justifyContent: { xs: "center", md: "left" },
                }}
              >
                <CorporateFareIcon
                  sx={{
                    color: themeColors?.secondary,
                    fontSize: "28px",
                    padding: "0px",
                  }}
                />
                <Typography component="span" sx={{ fontSize: "22px" }}>
                  2 & 3 BHK From 48.5 Laks
                </Typography>
              </Typography>
              <Grid item xs={12}>
                <Typography
                  component="p"
                  sx={{
                    color: "#00000080",
                    textAlign: "center",
                    margin: "5px 0px",
                    display: { xs: "block", md: "none" },
                  }}
                >
                  © 2023 Urbanrise The World Of Joy | All Rights Reserved |
                  No.TN/35/Building/0397/2023 | www.rera.tn.gov.in
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                position: { xs: "absolute", md: "relative" },
                top: "0px",
                zIndex: "100",
                left: "0px",
                right: "0px",
              }}
            >
              <Box
                sx={{
                  width: "45%",
                  height: "3rem",
                  position: "relative",
                }}
              >
                <Image
                  fill
                  src={urbanriseLogo}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "45%", md: "55%" },
                  height: { xs: "3rem", md: "6.8rem" },
                  position: "relative",
                }}
              >
                <Image fill src={twojLogo} style={{ objectFit: "contain" }} />
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            sx={{ marginTop: { xs: "2rem", md: "0px" } }}
          >
            <Typography
              component="p"
              sx={{
                width: "100%",
                fontSize: "22px",
                textAlign: { xs: "center", md: "left" },
                display: { xs: "block", md: "none" },
              }}
            >
              Welcome To The World Of Joy
            </Typography>
            <Typography
              component="h3"
              sx={{
                textAlign: "center",
                width: "100%",
                fontSize: { md: "32px", xs: "24px" },
                fontWeight: "600",
              }}
            >
              Contact Us
            </Typography>
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              sx={{
                height: "85%",
                transition: "height 1s ease-in-out",
                background: "#fff",
              }}
            >
              <Grid container item justifyContent="center" xs={12} sx={{}}>
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
                        backgroundColor: "#fff",
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
                        backgroundColor: "#fff",

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
                        backgroundColor: "#fff",

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
                    background: themeColors?.primary,
                    textTransform: "capitalize",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: { xs: "14px", sm: "16px" },
                    ":hover": {
                      background: themeColors?.primary,
                    },
                  }}
                  loading={isLoading}
                  variant="contained"
                >
                  Submit
                </LoadingButton>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography
              component="p"
              sx={{
                color: "#00000080",
                textAlign: "center",
                margin: "5px 0px",
                display: { xs: "none", md: "block" },
              }}
            >
              © 2023 Urbanrise The World Of Joy | All Rights Reserved |
              No.TN/35/Building/0397/2023 | www.rera.tn.gov.in
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          md={6}
          xs={12}
          sx={{
            height: "100%",
            justifyContent: "center",
            alignItems: { md: "flex-end", xs: "flex-start" },
            background: themeColors?.primary,
            boxShadow: " -5px 0px 10px rgba(0, 0, 0, 0.2)",
            display: { xs: "none", md: "flex" },
          }}
        >
          <Image src={trishaImg} style={{ width: "50%", height: "85%" }} />
        </Grid>
        <Grid
          container
          item
          md={6}
          xs={12}
          sx={{
            height: "100%",
            justifyContent: "center",
            alignItems: { md: "flex-end", xs: "flex-start" },
            background: themeColors?.primary,
            boxShadow: " -5px 0px 10px rgba(0, 0, 0, 0.2)",
            display: { xs: "none", md: "none" },
          }}
        >
          <Image
            src={trishaImg}
            style={{ width: "80%", height: "90%", display: "none" }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sx={{
          justifyContent: { xs: "center", md: "flex-end" },
          zIndex: "100",
        }}
      >
        <Contact />
      </Grid>
    </Grid>
  );
}
