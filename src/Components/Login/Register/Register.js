import { Alert, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../context/useAuth';
import login from '../../Home/images/login.png';
import Navigation from '../../Home/Shared/Navigation';

const Register = () => {
  const[LoginData,setLoginData] = useState({});
  const {registerUser,isLoading,user,authError} = useAuth();

const handleOnChange = (e)=>{

  const field = e.target.name;
  const value = e.target.value;
  const newLoginData = {...LoginData};
  newLoginData[field] = value;
  setLoginData(newLoginData)

}

const handleOnSUbmit=e=>{
  if(LoginData.password!==LoginData.password2){
    alert('password did not match!')
    return
}
registerUser(LoginData.email,LoginData.password)

  e.preventDefault();

}

        
  return (
    <>
    
    <Navigation></Navigation>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid sx={{mt:20}} item md={6} xs={12}>

      <Typography variant="h6" gutterBottom>
        Register
  </Typography>

{  !isLoading &&  <><form onSubmit={handleOnSUbmit}>
   <TextField
     sx={{width:'75%',m:1}}
     id="standard-basic"
     label="Your name" 
     name='name'
     type='name'
     onChange={handleOnChange}
     variant="standard" />
   <TextField
     sx={{width:'75%',m:1}}
     id="standard-basic"
     label="Your email" 
     name='email'
     type='email'
     onChange={handleOnChange}
     variant="standard" />

   <TextField
     sx={{width:'75%',m:1}} 
     id="outlined-password-input"
     label="password" 
     name='password'
     type='password'
     onChange={handleOnChange}
     variant="standard" />

   <TextField
     sx={{width:'75%',m:1}} 
     id="outlined-password-input"
     label="Retype password" 
     
     name='password2'
     type='password'
     onChange={handleOnChange}
     variant="standard" />
   <br />

     <Button type='submit' sx={{width:'75%',m:1}} variant='contained'>Register</Button>
   </form>
   <NavLink style={{textDecoration:'none'}} to='/login'><Button variant='text'>Already register? Please Login!</Button></NavLink>
   </>
   }

   {
    isLoading &&       <CircularProgress />

   }

   {
    user?.email && <Alert severity="success">Congrats! your registration is success</Alert>
   }
   {
    authError && <Alert severity="error">sorry! there is an issue.please check again.</Alert>

   }

  



        

           
    
      </Grid>
      <Grid item md={6} xs={12}>
        <img style={{width:'80%'}} src={login} alt="" />
      
      </Grid>
     
    </Grid>
  </Box>
  </>
  );
};

export default Register;