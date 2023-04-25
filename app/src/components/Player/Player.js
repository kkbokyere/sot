import React from 'react'
import './Player.scss';

const Player = ({ score, type }) => {
    return(
        <div className='player'>
            <span>{type}</span>
            <ul className='player-sets'>
                <li>0</li>
                <li>0</li>
                <li>0</li>
            </ul>
        </div>
    );
}

export default Player;
