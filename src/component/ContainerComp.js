import React from 'react'
import Container from '@material-ui/core/Container';

function ContainerComp() {
    return (
        <div>
            <Container maxWidth="ls" style={{background:'yellow'}}>
            If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can set the fixed property. The max-width matches the min-width of the current breakpoint.
            </Container>

            <Container fixed style={{background:'red'}}>
            If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can set the fixed property. The max-width matches the min-width of the current breakpoint.
            </Container>

        </div>
    )
}

export default ContainerComp
