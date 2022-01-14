import React from 'react';
import{BsFillVolumeUpFill,BsMusicNoteList} from "react-icons/bs";
import{FaDesktop} from "react-icons/fa";


function TrackList() {
    return <div className='trackList'>
        <div className='top'>
            
            <p className="trackName">
                sample name<span className="trackSpan">Artist</span>
            </p>
        </div>
        <div className='bottom'>
            <i><BsFillVolumeUpFill /></i>
            <input type="range" />
            <i><BsMusicNoteList /></i>
        </div>
    </div>;
    
}

export { TrackList };
