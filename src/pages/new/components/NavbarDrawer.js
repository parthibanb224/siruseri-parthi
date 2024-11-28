import { Collapse, Grid, Typography } from "@mui/material";
import { useState } from "react";

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
          background: "rgba(0, 0, 0, 0.9)",
          marginTop: "0",
          zIndex: "100",
        }}
      >
        {(sectionNames || [])?.map((item) => (
          <Grid
            item
            key={item.name}
            sm={12}
            xs={12}
            display="flex"
            justifyContent="center"
            style={{ padding: "10px" }}
          >
            <Typography
              onClick={() => {
                scrollToView(`#${item.name}`);
                setDrawerState(false);
                setSelectedSection(item.name);
              }}
              sx={{
                fontSize: 14,
                padding: "10px 20px",
                textTransform: "capitalize",
                width: "fit-content",
                background: selectedSection === item.name ? "#006CB5" : "none",
                color: "#fff",
                borderRadius: "10px",
                ":hover": {
                  color: "#8a7007",
                },
              }}
            >
              {item.name || ""}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Collapse>
  );
}
