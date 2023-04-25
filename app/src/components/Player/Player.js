import React from 'react'
import './Player.scss';

const Player = ({ results, type, name, currentPeriod }) => {
    const {score, periodScore, currentPeriod } = results;
    return(
        <div className={`player player--${type}`}>
            <div className='player-type'><h3>{type}</h3></div>
            <div className='player-score'><h4>{score}</h4></div>
            <ul className='player-sets'>
                <li>0</li>
                <li>0</li>
                <li>0</li>
            </ul>
        </div>
    );
}

export default Player;
