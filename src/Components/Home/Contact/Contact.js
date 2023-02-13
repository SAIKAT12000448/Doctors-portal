import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

const Contact = () => {
    return (
        
          <Container sx={{ flexGrow: 1,marginTop:"-100px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>

        <Card sx={{ minWidth: 275 }}>
      <CardContent sx={{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#154b4f"}}>
        <Box sx={{padding:"10px",color:"white",fontWeight:"900"}}>
        <AccessTimeIcon></AccessTimeIcon>
        </Box>
        <Box style={{textAlign:"left",color:"white",fontWeight:"900"}}>
        <Typography variant='h6' sx={{}}>
          Opening Hours
        </Typography>
        <Typography style={{fontWeight:"300"}} component="div">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, eius.
         
        </Typography>
        </Box>
        
      </CardContent>
    </Card>
          
        </Grid>

{/* ....................................................................... */}

        
        <Grid   item xs={12} md={4}>

        <Card sx={{ minWidth: 275}}>
      <CardContent sx={{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#272a3d"}}>
        <Box sx={{color:"white",fontWeight:"900"}}>
        <LocationOnIcon></LocationOnIcon>
        </Box>
        <Box style={{textAlign:"left",color:"white",fontWeight:"900"}}>
        <Typography variant='h6' sx={{}}>
          Visit our location
        </Typography>
        <Typography style={{fontWeight:"300"}} component="div">
            cumilla,57575, <br /> uzumaki house
         
        </Typography>
        </Box>
        
      </CardContent>
    </Card>
        </Grid>

        {/* .......................................... */}



        <Grid    item xs={12} md={4}>
        <Card sx={{ minWidth: 275 }}>
      <CardContent sx={{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#154b4f"}}>
        <Box sx={{color:"white",fontWeight:"900"}}>
        <PhoneInTalkIcon></PhoneInTalkIcon>
        </Box>
        <Box style={{textAlign:"left",color:"white",fontWeight:"900"}}>
        <Typography variant='h6' sx={{}}>
          Contact us now
        </Typography>
        <Typography style={{fontWeight:"300"}} component="div">
            +91757447574847
            <br />
            <br />
         
        </Typography>
        </Box>
        
      </CardContent>
    </Card>
          
        </Grid>
      
      </Grid>
    </Container>
            
        
    );
};

export default Contact;