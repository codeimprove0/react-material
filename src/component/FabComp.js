import React from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function FabComp() {
    return (
        <div>
              <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
        </div>
    )
}

export default FabComp
