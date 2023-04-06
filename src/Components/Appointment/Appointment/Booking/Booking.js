import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking,date,refetch}) => {
    const{name,slots} = booking;
    const [open, setOpen] = React.useState(false);
    const handleModalOpen = () => setOpen(true);
    const handleModalClose = () => setOpen(false);

    return (
       <>
       
       <Grid  item xs={12} md={4} sm={6}>
                    <Paper sx={{padding:'25px'}} elevation={3}>



                          <Typography sx={{marginTop:"10px",color:'#154b4f'}} variant='h6'>{name}</Typography>
                          <Typography sx={{fontSize:"15",fontWeight:"500"}} variant='p'>{slots.length>0 ? slots[0]:'Try another day'}</Typography>
                          <Typography component='div' variant='caption'>{slots.length} {slots.length>1? 'SPACES':'SPACE'} AVAILABLE</Typography>
                          <Button onClick={handleModalOpen} disabled={slots.length===0} sx={{backgroundColor:'#154b4f'}} variant="contained">Book Appointment</Button>      
                            

                    </Paper>
                    
                          
                           
                    </Grid>

                    <BookingModal
                    
                      open={open}
                      key={booking._id}
                      handleModalClose={handleModalClose}
                      slots={slots}
                      handleModalOpen={handleModalOpen}
                      booking={booking}
                      date={date}
                      refetch={refetch}
                    ></BookingModal>
       </>
    );
};

export default Booking;