import React from 'react' 
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SvgIcon from '@material-ui/core/SvgIcon';
import Icon from '@material-ui/core/Icon'; 
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
 
function IconComp() {   
    return (
        <div> 
        Icon
        <DeleteIcon />
        <DeleteForeverIcon/>

        <SvgIcon  color="secondary" fontSize="large" >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>

    <SvgIcon  color="primary" style={{ fontSize: 40 }}  >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
    <br/>
    <Icon color="primary">add_circle</Icon>
      <Icon color="secondary">add_circle</Icon>
      <Icon className="fa fa-plus-circle" color="secondary" />

      <br/>
      <WatchLaterSharpIcon/>
      <AccessAlarmsIcon color="secondary" style={{ fontSize: 40 }}/>
        </div>
    )
}

export default IconComp
