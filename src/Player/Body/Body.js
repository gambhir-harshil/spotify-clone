import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import React from 'react';
import { useDataLayerValue } from '../../DataLayer';
import './Body.css';
import Header from './Header/Header';
import SongRow from './SongRow/SongRow';

function Body({spotify}) {

    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    const playPlaylist = (id) => {
        spotify
          .play({
            context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
          })
          .then((res) => {
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
          });
      };

      const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
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
          });
      };

    return (
        <div className='body' >
            <Header spotify={spotify}/>
            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt="cover"/>
                <div className="body_infotext">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilled className='shuffle' onClick={playPlaylist}/>
                    <FavoriteIcon fontSize='large'/>
                    <MoreHorizIcon/>
                </div>
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow playSong={playSong} track={item.track}/>
                ))}
            </div>
        </div>
    )
}

export default Body
