import React from 'react'
import './Login.css'
import { loginUrl } from './Spotify'
function Login() {
    
  return (
    <div className='login'>
        <img className='login__image'src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png' alt='spotify'/>
        <a href={loginUrl}>Login with Spotify</a>

    </div>
  )
}

export default Login