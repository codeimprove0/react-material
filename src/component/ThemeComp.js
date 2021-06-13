import React from 'react' 
import {makeStyles} from '@material-ui/core/styles' 

/* const useStyles = makeStyles({
    homepage:{
        color:'red',
        width:300,
        height:250,
        backgroundColor:'yellow',
        borderRadius:4
    },
    test2:{

    }
}) */

const useStyles = makeStyles((theme)=>({
    homepage:{
        color:theme.palette.success.light,
        width:300,
        height:250,
        backgroundColor:'yellow',
        borderRadius:4
    },
    test2:{

    }
}))

function ThemeComp() { 
    const classes = useStyles();
    return (
        <div> 
            <div className={classes.homepage}>Theme & CSS</div>
  
        </div>
    )
}

export default ThemeComp
