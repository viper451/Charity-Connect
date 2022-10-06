import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Font from "react-font";
import Step3 from "../assests/Step3.png";

const HowItWorksThree = () => {
  return (
    <div>
      <Container fixed>
        <Grid container sx={{ height: "100vh" }}>
          <Grid
            item
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <div className="tilt-left">
                <img src={Step3} className="tilt-image-left" />
              </div>
            </Box>
          </Grid>
          <Grid
            item
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Font family="Acme">
                <h3
                  style={{ fontSize: "5vh", marginBottom: 0, color: "#EE4C7C" }}
                  data-aos="fade-right"
                >
                  <span>Fill the form to register for the event</span>
                </h3>
              </Font>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HowItWorksThree;
