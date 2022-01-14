import React from 'react';
import Artist from '../img/artist.jpg';
import check from '../img/check.png';
import {FaEllipsisH,FaHeadphones,FaCheck} from"react-icons/fa";


function Banner() {
    return <div className='banner'>
        <img src={Artist} alt="" className='bannerImg'/>
        <div className="content">
            <div className='breadCrump'>
                <p>Home<span>/Popular Artist</span>
                </p>
                <i><FaEllipsisH />
                </i>
            </div>
            <div className='artist'>
                <div className='left'>
                    <div className='name'>
                        <h2>A-ha</h2>
                        <img src={check} alt="" />
                    </div>
                    <p><i><FaHeadphones /></i> 11,184,1811 <span>monthy listerner</span></p>
                </div>
                <div className='right'>
                    <a href="#">play</a>
                    <a href="#"><i><FaCheck /></i>Following</a>
                </div>
            </div>
        </div>
        <div className='bottomLayer'></div>
    </div>;
    
}

export { Banner };
