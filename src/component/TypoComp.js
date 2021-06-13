import React from 'react' 
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    homepage:{
        color:'red'
    }
})

function TypoComp() { 
    const classes = useStyles();
    return (
        <div>
         
         <Typography variant="h3" align="center" color="primary" paragraph > Code Improve</Typography>

         <Typography variant="h4" display="inline" className={classes.homepage}> Test 1</Typography>

         <Typography variant="subtitle1" align="justify">  In order to use the font Icon component, you must first add the Material icons font. Here are some instructions on how to do so. For instance, via Google Web Fonts:In order to use the font Icon component, you must first add the Material icons font. Here are some instructions on how to do so. For instance, via Google Web Fonts:In order to use the font Icon component, you must first add the Material icons font. Here are some instructions on how to do so. For instance, via Google Web Fonts:</Typography>
         <Typography variant="subtitle2" align="justify">  In order to use the font Icon component, you must first add the Material icons font. Here are some instructions on how to do so. For instance, via Google Web Fonts:In order to use the font Icon component, you must first add the Material icons font. Here are some instructions on how to do so. For instance, via Google Web Fonts:In order to use the font Icon component, you must first add the Material icons font. Here are some instructions on how to do so. For instance, via Google Web Fonts:</Typography>
        </div>
    )
}

export default TypoComp
