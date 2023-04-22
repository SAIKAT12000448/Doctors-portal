import { Box, Typography } from '@mui/material';
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css'





// var today = new Date();

const Calender = ({date,setDate}) => {
 

      
    return (
      <>

             <Typography sx={{color:"",marginTop:"10px"}} variant='h6'> Calender</Typography>

             <Box style={{marginTop:"1rem"}}>
             <Calendar className="calender_style" onChange={setDate} date={date} />

             </Box>

      
             
         
      </>
    );
};

export default Calender;