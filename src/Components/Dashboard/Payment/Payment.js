import { Typography } from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';




const stripePromise = loadStripe("pk_test_51NJf5NGr9ldt4Z8fi2HQcykV8EdjllpV0jo0pJ6WKzKS0ZjEM0cGO2nYhm4wJcTejOd4sAbfg1jchoqEw5Mf2qco00Bn7I113o");
console.log(stripePromise);



const Payment = () => {
     const {id} = useParams()
        console.log(id);

        const [bookingPayment,setBookingPayment] = useState();


        useEffect(() => {
            const fetchPaymentData = async () => {
              try {
                const response = await fetch(`http://localhost:5000/bookings/${id}`);
                const data = await response.json();
                setBookingPayment(data);
              } catch (error) {
                console.log('Error fetching payment data:', error);
              }
            };
        
            fetchPaymentData();
          }, [id]);
        console.log(bookingPayment);



    return (
        <div>
                <Typography variant='h6' sx={{mb:'20px'}}>Payment</Typography>
                {/* <Typography>Payment for {bookingPayment.treatmentname}</Typography> */}
                {/* <p>please pay $<strong>{bookingPayment.price}</strong> for your appointment on {bookingPayment.date} at {bookingPayment.slot}</p> */}


                {/* <h3>{bookingPayment.price}</h3> */}
                
      </div>
    );
};

export default Payment;