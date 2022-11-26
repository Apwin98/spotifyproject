import React from 'react'
import { useEffect } from 'react'
import { useStateValue } from '../utils/StateProvider'

function useSongInfo() {

    const [{ token }, dispatch] = useStateValue()
    const [currentIdTrack, setCurrentIdTrack] = useState()
    const [songInfo, setSongInfo] = useState(null);
    useEffect(() => {
        const fetchSongInfo = async () => {
            if (currentIdTrack){
                const trackInfo = await fetch (
                    `https://api.spotify.com/v1/tracks/${currentIdTrack}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        }
                    }
                ).then(res => res.json())

                setSongInfo(trackInfo)
            }
        }

        fetchSongInfo();
    }, [currentIdTrack])
  return (
    <div>useSongInfo</div>
  )
}

export default useSongInfo