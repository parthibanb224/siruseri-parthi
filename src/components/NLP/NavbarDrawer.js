import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

export default function NavbarDrawer({
  drawerState,
  setDrawerState,
  sectionNames,
}) {
  const [selectedSection, setSelectedSection] = useState("");

  const scrollToView = (target) => {
    const section = document.querySelector(target?.replace(/\s/g, ""));
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Collapse
      in={drawerState}
      sx={{
        width: "100%",
      }}
    >
      <Grid
        container
        item
        rowSpacing={5}
        padding="15px"
        sx={{
          background: "#000000",
          marginTop: "0",
        }}
      >
        {(sectionNames || [])?.map((item) => (
          <Grid
            item
            key={item}
            sm={12}
            xs={12}
            display="flex"
            justifyContent="center"
            style={{ padding: "10px" }}
          >
            <Typography
              onClick={() => {
                scrollToView(`#${item}`);
                setDrawerState(false);
                setSelectedSection(item);
              }}
              sx={{
                fontSize: 14,
                padding: "10px 20px",
                textTransform: "capitalize",
                width: "fit-content",
                background: selectedSection === item ? "#006CB5" : "none",
                color: "#fff",
                borderRadius: "10px",
                ":hover": {
                  color: "#8a7007",
                },
              }}
            >
              {item || ""}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Collapse>
  );
}
NavbarDrawer.propTypes = {
  drawerState: PropTypes.bool.isRequired,
  setDrawerState: PropTypes.func.isRequired,
  sectionNames: PropTypes.arrayOf(PropTypes.any).isRequired,
};
