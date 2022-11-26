import { React, useEffect, useState } from 'react'
import { useStateValue } from '../utils/StateProvider'
import axios from 'axios'
import "./Player.css"

import SpotifyPlayer from 'react-spotify-web-playback'
function Player() {
    const [{ token }, dispatch] = useStateValue()
    const [playlist, setPlaylist] = useState("")
    useEffect(() => {
        const getPlaylist = async () => {
            return await axios.get('https://api.spotify.com/v1/me/playlists', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
                setPlaylist(response.data);
                console.log(playlist)
            })
        }
        getPlaylist();
        
    }, [])

  return (
    <div>
        <SpotifyPlayer
        token={token}
        uris={[`spotify:playlist:37i9dQZF1EQqkOPvHGajmW`]}
    />;

    </div>
  )
}

export default Player