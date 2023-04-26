import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Calender from '../../Home/Shared/Calender/Calender';
import AppointmentUser from '../AppointmentUser/AppointmentUser';

const UserAppointments = () => {
    const[date,setDate] = React.useState(new Date());

    return (
        <Box>
            <Typography variant='h5' sx={{margin:"2rem",fontWeight:"700"}}>
                   My Appointments
            </Typography>
                 <Grid container spacing={2}>
     <Grid item xs={12} sm={5}>
            <Calender
            date={date}
            setDate={setDate}
            ></Calender>
     </Grid>
     
     <Grid item xs={12} sm={7}>
            <AppointmentUser
             date={date}
             setDate={setDate}
            ></AppointmentUser>
      </Grid>
            
      </Grid>
        </Box>
    );
};

export default UserAppointments;