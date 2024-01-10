import { AppBar, Box, InputBase, styled, Toolbar, Typography, Badge, Avatar} from '@mui/material';
import React, { useState } from 'react';
import { Pets, Email, Notifications } from '@mui/icons-material';
import './theme';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent:"space-between"
})

const Search = styled("div")({
backgroundColor: "white", 
padding: "0 10px",
borderRadius:"5px",
width:"40%"
}); 

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));


const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
 
       
const Navbar = () => {
    const [open, setOpen] = useState(false);

    return ( 
        <AppBar position="sticky">
            <StyledToolbar>
            <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}> HOLVICKS_DEV</Typography>
            <Pets sx={{display:{xs:"block", sm:"none"}}} />
            <Search><InputBase placeholder="search..." /></Search>
            <Icons>
            <Badge badgeContent={4} color="error">
            <Email />
            </Badge>

            <Badge badgeContent={4} color="error">
            <Notifications />
            </Badge>

            <Avatar sx={{width:30, height:30}}src="https://images.pexels.com/photos/4728655/pexels-photo-4728655.jpeg?auto=compress&cs=tinysrgb&w=600"  onClick={e=>setOpen(true)}/>  

            </Icons>


            <UserBox>
            <Avatar sx={{width:30, height:30}}src="https://images.pexels.com/photos/4728655/pexels-photo-4728655.jpeg?auto=compress&cs=tinysrgb&w=600" onClick={e=>setOpen(true)} /> 

            <Typography variant="span">Holvicksdev</Typography>
            </UserBox>

            </StyledToolbar>

        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

        </AppBar>
     );
}
 
export default Navbar;