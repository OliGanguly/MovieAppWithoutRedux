import React from 'react';
import {BiCameraMovie} from "react-icons/bi";
import './Header.css'
function Header() {
    return (
        <div className='header'>
          <span onclick={()=>window.scrollTo(0,0)} className="header_Content">
          <BiCameraMovie size={30}/> 
            Entertainment
            <BiCameraMovie size={30}/> 
            </span> 
        </div>
    );
}

export default Header; 