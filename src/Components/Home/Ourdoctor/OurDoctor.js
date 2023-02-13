import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor1 from '../images/doctor-small.png';
import { Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';

const OurDoctor = () => {
    return (
        <Box  sx={{ flexGrow: 1,mt:10 }}>
            <Typography sx={{fontWeight:'800',color:'#21CC94'}}  variant="h5">
            Our Doctors
            </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <img width='80%' src={doctor1} alt="" />
            <Typography variant='h6'>
                Dr.Caudi
            </Typography>
                <Typography variant='p'>
                  <CallIcon sx={{color:'blue'}}></CallIcon>  +913848939849
                </Typography>

          </Grid>
          <Grid item xs={12} md={4}>
         <img width='80%' src={doctor1} alt="" />
         <Typography variant='h6'>
                Dr.Caudi
            </Typography>
                <Typography variant='p'>
                  <CallIcon sx={{color:'blue'}}></CallIcon>  +913848939849
                </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
        <img width='80%' src={doctor1} alt="" />
        <Typography variant='h6'>
                Dr.Caudi
            </Typography>
                <Typography variant='p'>
                  <CallIcon sx={{color:'blue'}}></CallIcon>  +913848939849
                </Typography>
          </Grid>
          
        </Grid>
      </Box>
    );
};

export default OurDoctor;