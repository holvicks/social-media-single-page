import React from 'react'
import { Typography } from '@mui/material';
import { Button, Container, ButtonGroup } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { styled } from '@mui/system';



const useStyles = styled({
    btn: {
        fontSize:150,
        backgroundColor: 'violet'
    }
  });
 
  const MyComponent = styled('div')({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
    fontSize:150

  });
  


const Create = () => {
    const classes = useStyles()

    return ( 
        <Container>
         <Typography noWrap
         color="primary"
         align="center"
         gutterBottom>
            Create a New Note
         </Typography>

         <Button 
         className={classes.btn}
         onClick={() => console.log('you clicked me')}
          type="submit" color="secondary" variant="contained" 
          endIcon={<KeyboardArrowRightIcon/>}
            >
            Submit
         </Button>

          <MyComponent>Styled div</MyComponent>
        </Container>
     );
}
 
export default Create;