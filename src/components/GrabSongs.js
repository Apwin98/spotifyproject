import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useStateValue } from '../utils/StateProvider'

function GrabSongs( playlist_id ) {
    console.log(playlist_id)
  return (
    <div>
        <h1 className="player">Playing this song</h1>
    </div>
  )
}

export default GrabSongs