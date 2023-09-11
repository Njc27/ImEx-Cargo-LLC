import React from 'react';
import ImexLogo from '../assests/ImexLogo.png'
import {CgProfile} from 'react-icons/cg'
import { useNavigate } from 'react-router-dom';



export default function Nav(){
    const navigate  = useNavigate()
    return(
        <div class = "navbar">
      <div class = "nav-container">
        {/* <a href = "index.html" class = "navbar-brand">Wander Stories</a> */}
        <a href = "/"><img src={ImexLogo} alt='logo'></img></a>
        <div class = "navbar-nav">
          <ul>
          <li><a onClick={() =>{navigate('./track')}}>Track Your Order</a></li>
          <li><a onClick={() =>{navigate('./services')}}>Our Services</a></li>
          <li><a onClick={()=>{navigate('./contact')}}>Contact Us</a></li>
          <li className='profile-icon'><a href = "#ContactUs"><CgProfile/></a></li>
          {/* <li><a href = "">Home</a></li> */}
          </ul>
       </div>
      </div>
    </div>
    )
}