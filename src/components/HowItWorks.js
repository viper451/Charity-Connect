import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Font from "react-font";
import Slide from "@mui/material/Slide";

const HowItWorks = () => {
  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);
  const nums = [1, 2, 3, 4, 5, 6, 7, 8];
  const instructions = [
    "Click the send button on the device through which you like to send the files✈️",
    "",
    "",
    "Upload the files on the Drag & Drop Upload Box, note the code allotted📨",
    "On the recieving device click the recieve button and write the code assigned to you#️⃣",
    "",
    "",
    "View your files🎁",
  ];
  return (
    <Container fixed sx={{ height: "100vh", paddingTop: "2vh" }}>
      <Grid container>
        {nums.map((num, index) => (
          // <Slide direction="up" in={checked}>
          <Grid
            item
            sm={6}
            sx={{
              textAlign: "center",
              borderLeft: num == 2 || num == 4 || num == 6 || num == 8 ? 2 : 0,
              borderRight: num == 1 || num == 3 || num == 5 || num == 7 ? 2 : 0,
            }}
          >
            {num === 1 || num === 4 || num === 5 || num === 8 ? (
              <Card sx={{ padding: 5 }}>
                <CardActionArea>
                  <CardContent>
                    <Font family="Acme">
                      <i>
                        <h3 style={{ letterSpacing: 2 }}>
                          {instructions[index]}
                        </h3>
                      </i>
                    </Font>
                  </CardContent>
                </CardActionArea>
              </Card>
            ) : (
              <span style={{ display: "none" }}>Hey</span>
            )}
          </Grid>
          // </Slide>
        ))}
      </Grid>
    </Container>
  );
};

export default HowItWorks;
