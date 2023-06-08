
import { Button, TextField, Typography } from '@mui/material';
import React, {  useState } from 'react';
import { toast } from 'react-hot-toast';
import useAuth from '../../../context/useAuth';

const Makeadmin = () => {
    const[email,setEmail] = useState('')
    const{token} = useAuth()
    const handleAdminSubmit=e=>{
        
        e.preventDefault();
        const user = {email}
        fetch('http://localhost:5000/users/admin',{
       
           method:"PUT",
           headers:{
                "authorization":`Bearer ${token}`,
               "content-type":"application/json"
           },
           body:JSON.stringify(user)

        })
        .then(res=>res.json())
        .then(data=>{
           if(data.modifiedCount===1){
               toast.success("successfully added as Admin");
               setEmail(' ');
           }
           console.log(data);  
        })
      

    }


    const handleOnBlur = e=>{
        setEmail(e.target.value);
    
    } 
    
   
  
   

    return (
        <>
        <Typography sx={{mb:"4rem"}} variant='h6'>Make Admin</Typography>

        <form onSubmit={handleAdminSubmit}>
        <TextField onBlur={handleOnBlur} id="standard-basic" label="Email" variant="standard" />
        <Button type='submit' variant='contained' color='success'>send</Button>
        </form>
           
        </>
    );
};

export default Makeadmin;