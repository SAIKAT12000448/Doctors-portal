import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Calender from '../../Home/Shared/Calender/Calender';
import { Grid } from '@mui/material';
import AppointmentUser from '../AppointmentUser/AppointmentUser';
import { NavLink } from 'react-router-dom';


const drawerWidth = 240;

const DrawerBar = () => { 
  
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const[date,setDate] = React.useState(new Date());
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    
    const DrawerBar = (

        <div>
          <Toolbar />
          <Divider />
          <NavLink to="/appointment">Appointment</NavLink><br />
          <NavLink to="/makeAdmin">MakeAdmin</NavLink>
          <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
         
        </div>
      );
    
    
    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor:"#154b4f"
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box style={{display:"flex",justifyContent:"space-evenly"}}>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
            <Typography variant="h6" noWrap component="div">
              Home
            </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {DrawerBar}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {DrawerBar}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Grid container spacing={2}>
     <Grid item xs={12} sm={5}>
            <Calender
            date={date}
            setDate={setDate}
            ></Calender>
     </Grid>
     
     <Grid item xs={12} sm={7}>
            <AppointmentUser
             date={date}
             setDate={setDate}
            ></AppointmentUser>
      </Grid>
            
      </Grid>
        </Box>
        
      </Box>

      
    );
};

export default DrawerBar;