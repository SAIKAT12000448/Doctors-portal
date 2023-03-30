import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../context/useAuth';


const Navigation = () => {
  const {user,logOut} =  useAuth();



  const styleNav={
     textDecoration:'none',
     color:'white',
     fontWeight:"700",
     marginRight:'15px'
  }
    return (
        <Box sx={{ flexGrow: 1,width:'100%',top:'0' }}>
        
      <AppBar style={{backgroundColor:"#154b4f"}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctors portal
          </Typography>
     <Button><Link style={styleNav} to='/home'>Home</Link></Button> 

        
          <Button><Link style={styleNav} to='/appointment'>Appointment</Link></Button> 
          
        


         <Button> <Link style={styleNav} to='/dashboard'>Dashboard</Link></Button>
          {
          user?.email ? 
          <Button onClick={logOut}  style={styleNav} color="inherit">Logout</Button>:
           
          <Button color="inherit"><Link style={styleNav} to='/login'>Login</Link></Button>
         }
        </Toolbar>
      </AppBar>
        
    </Box>
    );
};

export default Navigation;