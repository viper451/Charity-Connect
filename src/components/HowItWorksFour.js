import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Font from "react-font";
import Step4 from '../assests/Step4.png';

const HowItWorksFour = () => {
  return (
    <div>
        <Container fixed>
            <Grid container sx={{ height: '100vh' }}>
                <Grid item sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Font family="Acme">
                            <h3 style={{ fontSize: '5vh', marginBottom: 0, color:'#EE4C7C' }}  data-aos="fade-left">
                                <span>Available in diffrent other languages as per the need of the user </span>
                            </h3>
                        </Font>
                    </Box>
                </Grid>
                <Grid item sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ textAlign: 'center' }}>
                    <div className="tilt-right">
                        <img src={Step4} className='tilt-image-right' />
                    </div>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default HowItWorksFour;