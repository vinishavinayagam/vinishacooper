import React from 'react';
import "../Styles/RightMenu.css";
import {FaCogs, FaCrown, FaRegHeart, FaSun} from "react-icons/fa";
import { FaBell } from 'react-icons/fa';
import Profile from "../img/profile.png";
function RightMenu() {
    return <div className='rightMenu'>
        <div className='gopro'>
            <i><FaCrown />
            
            <p>
                Go
                <span> Pro </span>
               </p>
               </i>
               <i><FaBell /></i>
               <i><FaRegHeart /></i>
                   
        </div>
        <div className='profile'>
        <i><FaSun /></i>
        <i><FaCogs /></i>
        <div className='ProfileImage'>
            <img src={Profile} alt=" "/>
        </div>
        </div>
    </div>;
    
}

export  {RightMenu};
