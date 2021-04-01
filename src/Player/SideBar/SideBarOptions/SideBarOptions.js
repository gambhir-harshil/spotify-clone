import React from 'react';
import './SideBarOptions.css';

function SideBarOptions({option, Icon}) {
    return (
        <div className='sideBarOptions' >
            {Icon && <Icon className='sideBarOptions_icon'/>}
            {Icon ? <h4>{option}</h4>:<p>{option}</p> }
            
        </div>
    )
}

export default SideBarOptions
