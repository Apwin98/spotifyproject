import { React, useEffect, useState } from 'react'
import { useStateValue } from '../utils/StateProvider'
import axios from 'axios'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './DisplayFooter.css'
import SpotifyPlayer from 'react-spotify-web-playback'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


function Footer() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 10,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    
    const [playlist, setPlaylist] = useState([])
    const [music, setMusic] = useState('')
    const [auto, setAuto] = useState('false')
    
    const [{ token }, dispatch] = useStateValue()
    function changeMusic(id) {
      setMusic(id);
      setAuto('true');
    }
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
        <div className="footers">
          <SpotifyPlayer 
          play={auto}
          token={token} 
          uris={[`spotify:playlist:${music}`]} 
          styles={{
          activeColor: '#fff',
          bgColor: '#000',
          color: '#fff',
          loaderColor: '#fff',
          sliderColor: '#fff',
          trackArtistColor: '#fff',
          trackNameColor: '#fff',
        }}/>
            <Slider {...settings}>
                {playlist?.items ? playlist.items.map((item) =>       
                (
          
                    <div className="card">
                        <div className="card-top">
                            {/* <img onClick={() => <GrabSongs tracks={item.name}/>} src={item.images[0].url} /> */}
                            {/* <img onClick={()=>{ alert(`${item.id}`); }} src={item.images[0].url} /> */}
                           
                            <img onClick={() => changeMusic(item.id)} src={item.images[0].url} />
                        </div>
                        {/* <div className="card-bottom">
                            <h1>{item.name}</h1>
                        </div> */}
                    </div>
                )) : null}

            </Slider>
            {/* {playlist?.items ? playlist.items.map((item)=> <img src={item.images[0].url}/>) : null} */}

            {/* {playlist?.items ? playlist.items.map((item)=> <p>{item.images[0].url}</p>) : null} */}

            {/* {playlist?.items ? playlist.items.map((item)=> <DisplayFooter title={item.name} picture={item.images[0].url}/> ) : null} */}

            {/* {playlist?.items ? playlist.items.map((item)=> <Poster title={item.name} picture={item.images[0].url}/> ) : null} */}

            {/* {playlist?.items ? playlist.items.map((item)=> <UnevenSetsInfinite title={item.name} picture={item.images[0].url}/> ) : null} */}

        </div>
    );
};

export default Footer