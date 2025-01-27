// src/App.js
import React from 'react';
import Box from '../components/Box'; // Import the Box component
import '../styles/lobby.css';

function Lobby() {
    const boxesArray = Array.from({length: 25}, (_, index) => index + 1);
    const boxStyles = boxesArray.map(() => {
        /*const hue1 = Math.floor(Math.random() * 360);
        const hue2 = (hue1 + 180) % 360;
        return `linear-gradient(${Math.random()*180}deg, hsl(${hue1}, 70%, 60%), hsl(${hue2}, 70%, 60%))`;*/
        return `linear-gradient(${Math.random()*180}deg, rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}), rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}))`;
    });

    return (
        <div className="Lobby">
            <div className="BoxContainer" >
                {boxesArray.map((num, index) => (
                    /*<Box key={num} number={num} style={{'--bg-gradient': boxStyles[index]}>*/
                    <Box key={num} number={num} style={{'--bg-gradient': boxStyles[index]}}>
                        <h1 className="gradient-text" style={{'--bg-gradient': boxStyles[index]}}>{num}</h1>
                    </Box>

                ))}
            </div>
        </div>
    );
}

export default Lobby;