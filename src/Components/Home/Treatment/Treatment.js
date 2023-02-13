import React from 'react';
import Grid from '@mui/material/Grid';
import treatbg from '../images/treatment.png'
import { Button, Container, Typography } from '@mui/material';

const Treatment = () => {
    return (
        <Container sx={{ flexGrow: 1,my:"70px" }}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
        <img width="50%" src={treatbg} alt="" />
          </Grid>
          <Grid item xs={7} sx={{textAlign:"left"}}>
            <Typography sx={{fontWeight:"900"}} variant='h4'>
                Exceptional Dental <br /> Care,on your Terms

            </Typography>

            <Typography sx={{my:"20px"}}>
              
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa at quisquam, nostrum est tenetur dolores? Beatae qui iure error ex, enim praesentium, similique libero vel deleniti magni nisi eaque inventore.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti totam beatae eveniet mollitia. Ullam optio magnam sequi voluptatum non laudantium.


            </Typography>

            <Button variant='contained'>Learn More</Button>
            
          </Grid>
          
        </Grid>
      </Container>
        
    );
};

export default Treatment;