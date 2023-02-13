import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Doctor from '../images/doctor.png'
import bg from '../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';


const AppointmentBg={
    background:`url(${bg})`,
    marginTop:'160px',
    backgroundColor:'rgb(64, 64, 64,0.9)',
    backgroundBlendMode: 'darken, luminosity',
    backgroundPosition:'center',


}

const AppointmentBanner = () => {
    return (
        
            
               <Box style={AppointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}md={5}>
          <img
          width="100%" style={{marginTop:"-150px"}}
          src={Doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={7} style={{display:'flex',justifyContent:'start',alignItems:'center',textAlign:'start'}}>
          <Box style={{padding:"10px"}}>
          <Typography style={{color:'#21CC94'}} variant='h6'>
                Appointment
            </Typography>
            <Typography sx={{color:"white",mt:"10px"}} variant='h3'>
                Make an Appointment <br /> Today
            </Typography>
            <Typography sx={{color:"white",mt:"5px"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam itaque laboriosam voluptatum voluptate, voluptatibus repudiandae explicabo hic vitae. Cupiditate, perspiciatis.
            </Typography>

          <Button sx={{mt:"20px"}} variant="contained">Learn More</Button>
          </Box>
          
        </Grid>
        
      </Grid>
    </Box>
        
        
    );
};

export default AppointmentBanner;