import {React,useEffect,useState} from 'react'
import './Footer.css'
import Sidebaroption from './SidebarOption'
import DisplayFooter from './DisplayFooter'
import { useStateValue } from '../utils/StateProvider'
import axios from 'axios'

function Footer() {

    const [playlist, setPlaylist] = useState([])
    // const [{ playlists }, dispatch] = useStateValue()
    const [{ token }, dispatch] = useStateValue()
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
    } ,[])
  return ( 
    <div className='footer'>
        {/* {playlist?.items ? playlist.items.map((item)=> <img src={item.images[0].url}/>) : null} */}
        {/* {playlist?.items ? playlist.items.map((item)=> <p>{item.images[0].url}</p>) : null} */}
        {playlist?.items ? playlist.items.map((item)=> <DisplayFooter title={item.name} picture={item.images[0].url}/> ) : null}
    </div> 
    );
};

export default Footer