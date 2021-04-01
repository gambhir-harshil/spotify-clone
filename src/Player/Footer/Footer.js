import React, { useEffect } from 'react';
import './Footer.css';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';

import { useDataLayerValue } from '../../DataLayer';

function Footer({ spotify }) {

    const [{ token, item, playing }, dispatch] = useDataLayerValue();

    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((response) => {
          console.log(response);
    
          dispatch({
            type: "SET_PLAYING",
            playing: response.is_playing,
          });
    
          dispatch({
            type: "SET_ITEM",
            item: response.item,
          });
        });
      }, [spotify]);
    
      const handlePlayPause = () => {
        if (playing) {
          spotify.pause();
          dispatch({
            type: "SET_PLAYING",
            playing: false,
          });
        } else {
          spotify.play();
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        }
      };
    
      const skipNext = () => {
        spotify.skipToNext();
        spotify.getMyCurrentPlayingTrack().then((response) => {
          dispatch({
            type: "SET_ITEM",
            item: response.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      };
    
      const skipPrevious = () => {
        spotify.skipToPrevious();
        spotify.getMyCurrentPlayingTrack().then((response) => {
          dispatch({
            type: "SET_ITEM",
            item: response.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      };

    return (
        <div className='footer' >
            <div className="footer_left">
                <img className='footer_albumlogo' src={item?.album.images[0].url} alt={item?.name}/>
                
                {item ? (
                    <div className="footer_song">
                        <h4>{item.name}</h4>
                        <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                    </div>
                ) : (
                    <div className="footer_song">
                        <h4>No song is playing</h4>
                        <p>...</p>
                    </div>
                )}
                
            </div>
            <div className="footer_center">
                <ShuffleIcon className='footer_green'/>
                <SkipPreviousIcon onClick={skipNext} className='footer_icon'/>
                <PlayCircleFilledIcon onClick={handlePlayPause} fontSize='large' className='play'/>
                <SkipNextIcon onClick={skipPrevious} className='footer_icon'/>
                <RepeatIcon className='footer_green'/>
            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs >
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;
