import {  Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
// import { useQuery } from '@tanstack/react-query';
// import React, { useEffect, useState } from 'react';
import Booking from './Booking/Booking';
import { useQuery } from 'react-query';





// const bookings = [
//     {
//         id:1,
//         name: 'Teeth Orthodontics',
//         time: '08.00 AM - 09.00 AM',
//         space: 10,
//     },
//     {
//         id:2,
//         name: 'Cosmetic Dentistry',
//         time: '09.00 AM - 10.00 AM',
//         space: 8,
//     },
//     {
//         id:3,
//         name: 'Teeth Cleaning',
//         time: '10.00 AM - 11.00 AM',
//         space: 9,
//     },
//     {
//         id:4,
//         name: 'Cavity Protection',
//         time: '11.00 AM - 12.00 PM',
//         space: 5,
//     },
//     {
//         id:5,
//         name: 'Pediatric Dental',
//         time: '06.00 PM - 07.00 PM',
//         space: 10,
//     },
//     {
//         id:6,
//         name: 'Oral Surgery',
//         time: '07.00 AM - 08.00 PM',
//         space: 10,
//     },
// ]
const AvailableAppointment = ({date}) => {

    // const[bookings,setBookings]= useState([]);
console.log(date.toString());
// query uses

const {data:bookings=[],refetch} =
            
                
            useQuery({
            queryKey: ['bookings',date],
            queryFn:async()=>{
                
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
}
})


    // useEffect(()=>{
    //     fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
    //     .then(res=>res.json())
    //     .then(data=>setBookings(data))
    // },[])
   
    
    return (
        <Container>
            <Typography variant='h5' sx={{fontWeight:'600', my:'20px',color:'#154b4f'}}>Available Appointment on {date.toLocaleDateString()}</Typography>

            <Grid container spacing={2}>
            {
                bookings.map(booking=><Booking
                key={booking._id}
                booking={booking}
                date={date}
                refetch={refetch}
                ></Booking>)
            }

      </Grid>
   
        </Container>
    );
};

export default AvailableAppointment;