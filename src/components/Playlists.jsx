// import React from 'react'
// import axios from "axios"
// import { useEffect, useState } from 'react';
// import { getTokenFromUrl } from './Spotify'

// const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/playlists/{playlist_id}"

// function Playlists() {
//     const [token, setToken] = useState(null)
//     const [data, setData] = useState({});
//     useEffect(() => {
//         const hash = getTokenFromUrl()
//         window.location.hash = "";
//         const _token = hash.access_token;
        
//         if (_token) {
//         setToken(_token)
//         }
//         console.log(token)
//   }, [token])
  

//   axios
//     .get(PLAYLISTS_ENDPOINT, {
//         headers: {
//             Authorization: "Bearer" + token,
//         },
//     })
//     .then((response) => {
//         setData(response.data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//   return (

//     <div>Playlists</div>
//   )
// }

// export default Playlists