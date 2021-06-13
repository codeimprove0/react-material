import React from 'react'
import Button from '@material-ui/core/Button';

const addSubmit = ()=>{
    alert("hello")
}

function ButtonComp() {
    return (
        <div>
              <Button variant="contained">Default</Button>
              <Button variant="contained" color="secondary">
                Secondary
            </Button>
            <Button variant="outlined" disabled>Simple</Button>
            <Button onClick={addSubmit}>Click me</Button>
        </div>
    )
}

export default ButtonComp
