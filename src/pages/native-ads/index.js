import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { LoadingButton } from "@mui/lab";
import { Box, Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import Image from "next/image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useForm from "../../useForm";
import urbanriseLogo from "../../../public/images/urbanrise-logo.png";
import twojLogo from "../../../public/nlpImages/TWOJ_logo.webp";

// Banner Image
import trishaImg from "../../../public/nlpImages/Exterior/Exterior 1.jpg";

const themeColors = {
  primary: "#AF2226",
  secondary: "#DF2127",
  surprise: "#FAB900",
};
const sources = {
  jioAds: "Jiocinema-Ads",
  inShortAds: "Inshorts-Ads",
};
export const getUtmParams = (pageQueryParams) => {
  const source = pageQueryParams?.utm_source || "Direct Traffic";
  const medium = pageQueryParams?.utm_medium;
  const campaign = pageQueryParams?.utm_campaign;
  const content = pageQueryParams?.utm_content;
  // const ad = pageQueryParams?.utm_ad;

  return {
    source,
    medium,
    campaign,
    content,
    // ad,
  };
};
function Contact({ phone }) {
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
          onClick={() => window.open(`tel:+91 ${phone}`)}
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
  const [phoneNumber, setPhoneNumber] = useState("8510911111");
  const router = useRouter();

  useEffect(() => {
    const pageQueryParams = router?.query;

    const urlParams = getUtmParams(pageQueryParams);
    if (urlParams?.source === sources?.jioAds) {
      setPhoneNumber("+91 8750112050");
    } else if (urlParams?.source === sources?.inShortAds) {
      setPhoneNumber("+91 8585941020");
    }
  }, [router?.query]);
  return (
    <Grid
      container
      xs={12}
      sx={{
        padding: { md: "1rem", xs: "0px" },
        justifyContent: "center",

        backgroundImage: {
          xs: `url(/nlpImages/AllianceSiruseri_Image-05.jpg) `,
          md: "none",
        },
        background: { xs: "rgba(0, 0, 0, 0.8)", md: "#fff" },
        backgroundSize: "cover",
        minHeight: "100vh",
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
          justifyContent: "center",
          padding: { xs: "0px", md: "10px" },
          background: { xs: "rgba(0, 0, 0, 0.8)", md: "none" },
          height: "100%",
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
              md={12}
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
                Hurry! Enquire us to know more & schedule a site visit today!
              </Typography>
              <Typography
                component="p"
                sx={{
                  color: {
                    xs: themeColors?.surprise,
                    md: themeColors?.secondary,
                  },
                  fontSize: { xs: "24px", md: "28px" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Limited Period Offer,
                <br /> Save Upto ₹5 Lacs!
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
                    color: { xs: "#fff", md: "#000" },
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
                <Typography
                  component="span"
                  sx={{
                    fontSize: "22px",

                    color: { xs: "#fff", md: "#000" },
                  }}
                >
                  2 & 3 BHK From 48.5 Lacs
                </Typography>
              </Typography>
              <Grid item xs={12}>
                <Typography
                  component="p"
                  sx={{
                    textAlign: "center",
                    margin: "5px 0px",
                    display: { xs: "block", md: "none" },
                    color: { xs: "#787877", md: "#00000080" },
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
                paddingTop: { xs: "10px", md: "0px" },
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
                color: { xs: "#fff", md: "#000" },
              }}
            >
              Hurry! Enquire us to know more & schedule a site visit today!
            </Typography>

            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              sx={{
                transition: "height 1s ease-in-out",
                gap: { xs: "1rem", md: "0px" },
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
                        background: "#fff",
                        borderRadius: "9px",
                        padding: { xs: "10px", sm: "15px 20px" },
                      },
                      "& .MuiFormHelperText-root": {
                        fontSize: "12px",
                      },
                      "& .MuiInputBase-input": {
                        background: "#fff",
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
                        padding: { xs: "10px", sm: "12px 10px" },
                      },
                      "& .MuiInputBase-input": {
                        background: "#fff",
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
                        padding: { xs: "10px", sm: "12px 10px" },
                      },
                      "& .MuiFormHelperText-root": {
                        fontSize: "12px",
                      },
                      "& .MuiInputBase-input": {
                        background: "#fff",
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
          md={5.5}
          xs={12}
          sx={{
            justifyContent: "center",
            alignItems: { md: "flex-end", xs: "flex-start" },
            background: themeColors?.primary,
            boxShadow: " -5px 0px 10px rgba(0, 0, 0, 0.2)",
            display: { xs: "none", md: "flex" },
            position: "relative",
            aspectRatio: "1/1",
          }}
        >
          <Image fill src={trishaImg} style={{ objectFit: "cover" }} />
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
        <Contact phone={phoneNumber} />
      </Grid>
    </Grid>
  );
}
