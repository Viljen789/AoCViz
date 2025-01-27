import React from 'react';
import Box from '../components/Box'; // Import the Box component
import '../styles/lobby.css';
import {useNavigate} from 'react-router-dom';

const Lobby = () => {
    const navigate = useNavigate();
    const boxesArray = Array.from({length: 25}, (_, index) => index + 1);
    const boxStyles = boxesArray.map(() => {
        return `linear-gradient(${Math.random()*180}deg, rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}), rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}))`;
    });
    const disableThreshold = 10;

    return (
        <div className="Lobby">
            <div className="BoxContainer" >
                {boxesArray.map((num, index) =>{
                    const isDisabled = index >= disableThreshold;
                    return (
                        <Box
                            className={isDisabled ? "disabled" : "enabled"}
                            key={num}
                            number={num}
                            style={{'--bg-gradient': boxStyles[index]}}
                            onClick={() => {
                                if (!isDisabled) {
                                    console.log(`Navigating to /problem/${num}`);
                                    navigate(`/problem/${num}`);
                                }
                            }}
                        >
                            <h1 className={isDisabled ? "disabled" : "enabled"} style={{'--bg-gradient': boxStyles[index]}}>{num}</h1>
                        </Box>
                    )
                })}
            </div>
        </div>
    );
}

export default Lobby;