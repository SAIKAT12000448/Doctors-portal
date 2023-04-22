import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../context/useAuth';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import './navigation.css'


const Navigation = () => {
  const {user,logOut} =  useAuth();



  const styleNav={
     textDecoration:'none',
     color:'white',
     fontWeight:"700",
     marginRight:'15px'
  }







  // menu adding

  const [anchorEl, setAnchorEl] = React.useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



    return (
        <Box sx={{ flexGrow: 1,width:'100%',top:'0' }}>
        
      <AppBar style={{backgroundColor:"#154b4f"}} position="static">
        <Toolbar>


       {/* icon Button */}
       <div
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='buttonHidden'
      >
      
         <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
      <MenuIcon/>
          </IconButton>
      </div>






      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      <div style={{backgroundColor:"#154b4f"}}>
      <MenuItem> <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctors portal
          </Typography></MenuItem>

          
          <Link onClick={handleClose}  style={styleNav} to='/home'>  <MenuItem>Home </MenuItem> </Link>

        
          <Link onClick={handleClose} style={styleNav} to='/appointment'><MenuItem>Appointment</MenuItem></Link> 
          
       
    <Link onClick={handleClose} style={styleNav} to='/dashboard'> 
        <MenuItem>Dashboard</MenuItem></Link>
          {
          user?.email ? 
          <MenuItem onClick={logOut}  style={styleNav} color="inherit">Logout</MenuItem>:
           
          <Link onClick={handleClose} style={styleNav} to='/login'><MenuItem color="inherit">Login</MenuItem></Link>
         }
      </div>
      </Menu>




{/* ........................................................1 */}





       
       <Typography className='orient' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctors portal
          </Typography>
     <Button className='orient'><Link style={styleNav} to='/home'>Home</Link></Button> 

        
          <Button className='orient'><Link style={styleNav} to='/appointment'>Appointment</Link></Button> 
          
        


         <Button className='orient'> <Link style={styleNav} to='/dashboard'>Dashboard</Link></Button>
          {
          user?.email ? 
          <Button className='orient' onClick={logOut}  style={styleNav} color="inherit">Logout</Button>:
           
          <Button className='orient' color="inherit"><Link style={styleNav} to='/login'>Login</Link></Button>
         }



        </Toolbar>
      </AppBar>
        
    </Box>
    );
};

export default Navigation;