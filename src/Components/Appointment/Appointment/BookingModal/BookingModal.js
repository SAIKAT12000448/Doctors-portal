// import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../../context/useAuth';
import { toast } from 'react-hot-toast';



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


const BookingModal = ({handleModalClose,booking,open,date,slots,refetch}) => {
  const {name:treatmentname} = booking;
  const{user} = useAuth();

  // const[bookingData,setBookingData] = useState({email:user.email});
 




  const handleBookingSubmit=e=>{
   
  const form = e.target;

  const slot= form.time.value;
  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const date = form.date.value;
  console.log(slot,name,email,phone,date);


   const bookingData={
    treatmentname,
    name,
    slot,
    email,
    phone,
    date

   }

  


  
    fetch("http://localhost:5000/bookingmodal",{
      method:"POST",
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify(bookingData)
  
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
       if(data.acknowledged){
         handleModalClose()
        toast.success('Successfully created!');
        refetch();
      }
      else{
          alert(data.message)
      }
      
    });
    
    e.preventDefault();
  }
  




  // const handleOnBlur =(e)=>{
  //   const field = e.target.name;
  //   const value = e.target.value;
  //   const newBooking = {...bookingData};
  //   newBooking[field] = value;
  //   setBookingData(newBooking)
  //   console.log(newBooking)
  //   console.log(field,value);
  //   console.log(bookingData);

  // }
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
            
          
         

<select   style={{margin:'7px',padding:'10px',width:'90%'}} name="time" id="time">

{ slots.map((slot,i)=><option key={i}   value={slot}>{slot}</option>)}
</select>
          <TextField         
          sx={{width:"90%" ,m:1 }}
          id="outlined-size-small"
          name='name'
          defaultValue={user?.displayName}
          
          size="small"
        />
            <TextField
            
          
          sx={{width:"90%" ,m:1 }}
          id="outlined-size-small"
          defaultValue={user?.email}
          name='email'
    
          size="small"
        />
            <TextField
            
          
          sx={{width:"90%" ,m:1 }}
          id="outlined-size-small"
          placeholder="Phone Number"
          name='phone'
          size="small"
        />

            <TextField
            
          
          sx={{width:"90%" ,m:1 }}
          id="outlined-size-small"
          defaultValue={date.toString()}
          name='date'
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