import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Font from "react-font";
import Step2 from '../assests/Step2.png';

const HowItWorksTwo = () => {
  return (
    <div>
        <Container fixed>
            <Grid container sx={{ height: '100vh' }}>
                <Grid item sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Font family="Acme">
                            <h3 style={{ fontSize: '5vh', marginBottom: 0 }}>
                                <span>Get daily update and notification and number of participation in various events  </span>
                            </h3>
                        </Font>
                    </Box>
                </Grid>
                <Grid item sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ textAlign: 'center' }}>
                    <div className="tilt-right">
                        <img src={Step2} className='tilt-image-right' />
                    </div>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default HowItWorksTwo;