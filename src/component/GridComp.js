import React from 'react'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

function GridComp() {
    return (  
        <div>
            <Grid container spacing={1}>
                <Grid lg={3} md={4} sm={6} xs={12} item>
                    <h1 style={{background:'red'}}>First</h1>
                </Grid>

                <Grid lg={3} md={4} sm={6} xs={12} item>
                    <h1 style={{background:'brown'}}>Second</h1>
                </Grid>

                <Grid lg={3} md={4} sm={6} xs={12} item>
                    <h1 style={{background:'blue'}}>Third</h1>
                </Grid>

                <Grid lg={3} md={4} sm={6} xs={12} item>
                    <h1 style={{background:'orange'}}>Fourth</h1>
                </Grid>


            </Grid>
        </div>
 
    )
}

export default GridComp
