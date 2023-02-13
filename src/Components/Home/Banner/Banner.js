import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import chair from '../images/chair.png';
import BG from '../images/bg.png'
import { Button, Typography } from '@mui/material';





const bannerBg={
    background: `url(${BG})`,

}
const bannerStyle={
  display:"flex",
  alignItems:"center",
  
  height:'600px'
}
const backColor={
  backgroundColor:"rgba(30, 32, 31,0.9)", 
  borderRadius:"20px",
  // height:'80vh'
}

const Banner = () => {
    return (
        <Box  style={{...bannerBg,margin:'20px'}} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
       
       <Grid style={{...bannerStyle}} item xs={12} md={6}>
         <Box style={{textAlign:'left',padding:'20px'}}>
         <Typography sx={{mb:"10px"}} variant='h3'>
              Your New Smile <br /> Starts Here
                
            </Typography>
            <Typography style={{fontWeight:"500",color:'gray',marginBottom:"20px"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta saepe sit dolores quaerat, reprehenderit debitis ullam? Minus dolorem dicta quis.
            </Typography>
            <Button variant='contained'>
                 GET APPOINTMENT
            </Button>
          
         </Box>
        </Grid>
       
        <Grid style={{...bannerStyle,...backColor}} item xs={12} md={6}>
          <img  style={{minWidth:"80%"}} src={chair} alt="" />
        </Grid>
       
      </Grid>
    </Box>
    );
};

export default Banner;