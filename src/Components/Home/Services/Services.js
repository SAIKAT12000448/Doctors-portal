import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from './Service/Service';
import fluoride from '../images/fluoride.png'
import cavity from '../images/cavity.png'
import whitening from '../images/whitening.png'

const services=[
  {
      name:'fluoride',
      description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type speci",
      img:fluoride
  },
  {
      name:'Cavity',
      description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type speci",
      img:cavity
  },  
  {
      name:'whitening',
      description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type speci",
      img:whitening
  }
]


const Services = () => {
    return (
       <Container>
         <Typography sx={{color: 'success.main',fontWeight: 500,m:5}} variant="h6" gutterBottom>
        OUR SERVICES
      </Typography>
      <Typography sx={{fontWeight: 600,m:2}} variant="h5" gutterBottom>
        SERVICES WE PROVIDE
      </Typography>
         <Box sx={{ flexGrow: 1 }}>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            services.map(service=><Service service={service}key= {service.name}></Service>)
          }
        </Grid>
      </Box>
       </Container>
    );
};

export default Services;