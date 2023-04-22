import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import login from '../Home/images/login.png'
import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { NavLink} from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../context/useAuth';
import Navigation from '../Home/Shared/Navigation';
import { FcGoogle } from "react-icons/fc";

const Login = () => {

  const[LoginData,setLoginData] = useState({});
  const{isLoading,user,authError,logIn,signInWithGoogle} = useAuth();
 


  const handleOnChange=e=>{
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...LoginData}
    newLoginData[field] = value
    console.log(newLoginData)
    setLoginData(newLoginData)
    console.log(field,value)
  }



  const handleOnSUbmit=e=>{
    logIn(LoginData.email,LoginData.password)
    e.preventDefault();

  }

  const handleGooglesignin=()=>{
    signInWithGoogle();

  }
    return (
      <>
      <Navigation></Navigation>
      
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid sx={{mt:20}} item md={6} xs={12}>

          <Typography variant="h6" gutterBottom>
            Login 
      </Typography>

      {
        !isLoading && <> <form onSubmit={handleOnSUbmit}>
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
        <br />
 
          <Button type='submit' sx={{width:'75%',m:1}} variant='contained'>Login</Button>
        </form>
        {/* <NavLink to='/register'>New User? Please Register!</NavLink> */}
          
        <NavLink style={{textDecoration:'none'}} to='/register'><Button variant='text'>New User? Please Register!</Button></NavLink>

<p>-------------------------</p>
<Button style={{backgroundColor:"#e6e6e6",color:"black",fontWeight:"800"}} onClick={handleGooglesignin} variant="contained"><FcGoogle style={{fontSize:"29",marginRight:"0.6rem"}}/>Google Sign IN</Button>

        </>
      }
      {
        isLoading && <CircularProgress/>
      }
            
            {
        user?.email && <Alert severity="success">Logged in successfully!</Alert>
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

export default Login;