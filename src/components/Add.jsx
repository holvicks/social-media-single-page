import React, { useState } from 'react';
import { Tooltip, Fab, Modal, Button, Box, Typography, Avatar, Stack, TextField, ButtonGroup } from '@mui/material'
import {Add as AddIcon, VideoCameraBack, EmojiEmotions, Image, PersonAdd, DateRange} from "@mui/icons-material"
import { styled } from '@mui/material/styles';



const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
})

const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",

})


const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
        <Tooltip onClick={e=>setOpen(true)}title="Delete" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30}}}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>

        <StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
    <Typography variant="h6" color="gray" textAlign="center">
        Create Post
    </Typography>
    <UserBox>
        <Avatar src="https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=600" sx={{ width: 30, height:30}} />

        <Typography fontWeight={500} variant="span">
            Kendrick_svg
        </Typography>
    </UserBox>
        <TextField 
        sx={{width:"100%"}}
        id="standard-multiline-static" 
        multiline
        rows={3}
        placeholder="what's on your mind"
        variant="standard"
        />

        <Stack direction="row" gap={1} mt={2} mb={3} >
            <EmojiEmotions color="primary"/>
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
        </Stack>

        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{width:"100px"}}><DateRange/></Button>

        </ButtonGroup>
  </Box>
</StyledModal>


        </>
      );
}
 
export default Add;