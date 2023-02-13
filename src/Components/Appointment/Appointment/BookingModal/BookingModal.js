import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const BookingModal = ({handleModalClose,booking,open,date,slots}) => {
  const[bookingData,setBookingData] = useState({});

 
  const handleBookingSubmit=e=>{
   

    
    


    e.preventDefault();
    alert('submitting')
    handleModalClose()


  }
    

  const handleOnBlur =(e)=>{
    const field = e.target.name;
    const value = e.target.value;
    const newBooking = {...bookingData};
    newBooking[field] = value;
    setBookingData(newBooking)
    console.log(newBooking)
    console.log(field,value);

  }
    return (
        <div>
             <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {booking.name}
            </Typography>




          <form onSubmit={handleBookingSubmit}>
            
          
         

<select onBlur={handleOnBlur}  style={{margin:'7px',padding:'10px',width:'90%'}} name="time" id="time">

{ slots.map((slot,i)=><option key={i}   value={slot}>{slot}</option>)}
</select>
          <TextField         
          sx={{width:"90%" ,m:1 }}
          id="outlined-size-small"
          defaultValue="Your Name"
          name='name'
          onBlur={handleOnBlur}
          size="small"
        />
            <TextField
            
          
          sx={{width:"90%" ,m:1 }}
          id="outlined-size-small"
          defaultValue="Your Email"
          name='email'
          onBlur={handleOnBlur}
          size="small"
        />
            <TextField
            
          
          sx={{width:"90%" ,m:1 }}
          id="outlined-size-small"
          defaultValue="Phone Number"
          name='phone'
          onBlur={handleOnBlur}
          size="small"
        />

            <TextField
            
          
          sx={{width:"90%" ,m:1 }}
          id="outlined-size-small"
          defaultValue={date.toString()}
          name='date'
          onBlur={handleOnBlur}
          size="small"
        />
        <div style={{textAlign:'right',width:'90%'}}>
        <Button sx={{px:7}}  type='submit' variant="contained">Send</Button>
        </div>


          </form>




          </Box>
        </Fade>
      </Modal>
        </div>
    );
};

export default BookingModal;