import React from 'react'
import {  Box,  Typography, Avatar, AvatarGroup, ImageList, ImageListItem, List, ListItem, Divider, ListItemText, ListItemAvatar } from "@mui/material"


const Rightbar = () => {
    return ( 
        <Box flex={2} padding={2} sx= {{
            display:{xs:"none", sm:"block" }
        }}>
            <Box position="fixed" width={300}>
            <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
            <AvatarGroup max={7}>
            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/2705292/pexels-photo-2705292.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/4022812/pexels-photo-4022812.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/2739792/pexels-photo-2739792.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/3907595/pexels-photo-3907595.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/4757976/pexels-photo-4757976.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </AvatarGroup>

            <Typography variant="h6" fontWeight={100} mt={2}>
                Latest Photos
            </Typography>
        <ImageList col={3} rowHeight={100} gap={5}>
        <ImageListItem>
            <img src="https://images.pexels.com/photos/6210433/pexels-photo-6210433.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
        </ImageListItem>


       
        <ImageListItem>
            <img width="100" src="https://images.pexels.com/photos/5876703/pexels-photo-5876703.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
        </ImageListItem>
    

        <ImageListItem>
            <img src="https://images.pexels.com/photos/6210449/pexels-photo-6210449.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
        </ImageListItem>
        </ImageList>


        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
                Latest Conversations
            </Typography>


            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/821411/pexels-photo-821411.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>





            </Box>
              
        </Box>
     );
}
 
export default Rightbar ;

