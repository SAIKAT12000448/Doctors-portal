import React from 'react';

import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import footerBg from '../images/footer-bg.png'
import { Box } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const bg = {
    background:`url{${footerBg}}`,
    backgroundColor:'#cadbdb',
    
    
}

const Footer = () => {
    return (
       <Box style={bg}>
         <Container   sx={{ flexGrow: 1 ,py:7}}>
        <Grid container spacing={2} rowSpacing={4}>
          <Grid sx={{textAlign:"left",marginTop:"25px"}} item xs={3}>


        

            <Typography>
                Emergency Dental Care
            </Typography>
            <Typography>
                Check Up
            </Typography>
            <Typography>
                Treatment Of Personal Disease
            </Typography>
            <Typography>
                Tooth Extraction
            </Typography>
            <Typography>
                Check Up
            </Typography>
          </Grid>


          {/* ............................................................................ */}


          <Grid sx={{textAlign:"left"}} item xs={3}>
            <Typography variant='h6'>
                Services
            </Typography>

          <Typography>
                Emergency Dental Care
            </Typography>
            <Typography>
                Check Up
            </Typography>
            <Typography>
                Treatment Of Personal Disease
            </Typography>
            <Typography>
                Tooth Extraction
            </Typography>
            <Typography>
                Check Up
            </Typography>
    
          </Grid>


          {/* ....................................................................................... */}
          <Grid sx={{textAlign:"left"}} item xs={3}>
            <Typography variant='h6'>
                Oral Health
            </Typography>

          <Typography>
                Emergency Dental Care
            </Typography>
            <Typography>
                Check Up
            </Typography>
            <Typography>
                Treatment Of Personal Disease
            </Typography>
            <Typography>
                Tooth Extraction
            </Typography>
            <Typography>
                Check Up
            </Typography>
        
          </Grid>

          {/* ....................................................................................... */}
          <Grid sx={{textAlign:"left"}} item xs={3}>
            <Typography variant='h6'>
                Our Services
            </Typography>
            <Typography>
                New York --10001 Hodson <br /> Yards
            </Typography>


          {/* Icons */}

        <Box style={{display:"flex",padding:"2px",my:'5'}}>
            <FacebookIcon  style={{color:"blue"}}></FacebookIcon>
            <TwitterIcon style={{color:"blue",paddingLeft:"4px",paddingRight:"4px"}}></TwitterIcon>
            <InstagramIcon style={{color:"red"}}></InstagramIcon>


        </Box>

        {/* <Button variant='contained'>+9348484744383</Button> */}
        
        
          </Grid>
         
        </Grid>
      </Container>

      {/* <Typography>
      &#169;	2022 All Rights Reserved
      </Typography> */}
       </Box>
        
    );
};

export default Footer;