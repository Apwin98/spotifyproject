// import React, { useEffect, useState } from "react"
import React, { useEffect } from "react"
import './App.css';
import Login from './components/Login'
import Footer from './components/Footer'
import { getTokenFromUrl } from './components/Spotify'
import { useStateValue } from './utils/StateProvider'
import SpotifyWebApi from "spotify-web-api-js";

import LandingPage from "./components/LandingPage";

const spotify = new SpotifyWebApi();
// import Playlists from './components/Playlists'
function App() {
  // const [token, setToken] = useState(null)
  const[ { user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = "";
    const _token = hash.access_token;
    

    if (_token) {
      
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER" ,
          user: user,
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })
    
      
    }
    // console.log(token)
  }, [token, dispatch])
  
  // console.log(user);
  // console.log(token);
  return (
    <div>
      {
        token? <LandingPage/>:
        <Login/>
      }
      {/* <Login/> */}
    </div>
  );
}
export default App;
