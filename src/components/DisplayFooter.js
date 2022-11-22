import React from 'react'
import './DisplayFooter.css'
function DisplayFooter({ title, picture }) {
    
  return (
    <div className='sidebarOption'>
        <p>{title}</p>
        
        <img className="sidebarOption__icon"src={picture}/>

    </div>
  )
}

export default DisplayFooter