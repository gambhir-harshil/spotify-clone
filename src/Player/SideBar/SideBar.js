import React from 'react';

import SideBarOptions from './SideBarOptions/SideBarOptions';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'

import './SideBar.css';
import logo from './logo.png';
import { useDataLayerValue } from '../../DataLayer';

function SideBar() {
    const [{playlists}, dispatch] = useDataLayerValue();
    return (
        <div className='sidebar'>
            <img className='sidebar_img' src={logo} alt="logo"/>
            <SideBarOptions Icon={HomeIcon} option='Home'/>
            <SideBarOptions Icon={SearchIcon} option='Search'/>
            <SideBarOptions Icon={LibraryMusicIcon} option='Your Library'/>

            <br/>
            <strong className='sidebar_title'>PLAYLISTS</strong>
            <hr/>

            {playlists?.items?.map(playlist => (
                <SideBarOptions option={playlist.name}/>
            ))}
        </div>
    )
}

export default SideBar
