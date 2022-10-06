import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Font from "react-font";
import Step5 from "../assests/Step5.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200,
});

const HowItWorksFive = () => {
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
                <img src={Step5} className="tilt-image-left" />
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
                  <span>More Participation higher badge</span>
                  <br />
                  <br />
                  <h2 className="grandmaster">
                    <b>Elite &nbsp; &nbsp;</b> Number of events&gt;=20{" "}
                  </h2>
                  <h2 className="master">
                    <b>Master &nbsp; &nbsp;</b> Number of events&gt;=15{" "}
                  </h2>
                  <h2 className="specialist">
                    <b>Specialist &nbsp; &nbsp;</b> Number of events&gt;=10{" "}
                  </h2>
                  <h2 className="apprenitce">
                    <b>Apprentice &nbsp; &nbsp;</b> Number of events&gt;=5{" "}
                  </h2>
                  <h2 className="beginner">
                    <b>Beginner &nbsp; &nbsp;</b> Number of events&gt;=1{" "}
                  </h2>
                </h3>
              </Font>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HowItWorksFive;
