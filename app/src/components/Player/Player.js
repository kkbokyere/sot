import React from 'react'

const Player = ({ name, score }) => {
    return(
        <div className='player'>
            <span>Name: {name}</span>
            <span>Score: {score}</span>
        </div>
    );
}

export default Player;
