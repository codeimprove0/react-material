import React from 'react'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function BoxComponent() {
    return (
        <div>
            <Box width={500} boxShadow={1} p={4} m={2} component='section' style={{color:'brown'}}>
            However, sometimes you have to target the underlying DOM element. For instance, you want to change the text color of the button. The Button component defines its own color. CSS inheritance doesn't help. To workaround the problem, you have two options:
            </Box>

        <Box style={{color:'red'}} clone>
        <Button variant="contained" color="primary">
         Primary
        </Button> 
        </Box>
        </div>
    )
}

export default BoxComponent
