import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Install using: npm install framer-motion

const SimpleAnimation = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current index
    const [first, setFirst] = useState([1, 6, 1, 2, 7]); // Make `first` dynamic
    const [second, setSecond] = useState([1, 6, 1, 2, 7]); // Make `first` dynamic
    const [duration, setDuration] = useState(1000); // Make `first` dynamic
    const animationspeeds = [1, 2, 5, 20, 100];


    // Use effect to loop through the indices
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex < first.length - 1) {
                    return prevIndex + 1;
                } else {
                    clearInterval(interval);
                    return prevIndex;
                }
            });
        }, duration); // Move every 1 second

        return () => clearInterval(interval);
    }, [first]); // Add `first` to the dependency array

    // Simulate updating `first` dynamically
    const updateFirstArray = () => {
        setFirst([3, 5, 8, 2, 9]); // Replace `first` with a new array
        setCurrentIndex(0); // Reset current index to 0
    };
    const updateSecondArray = () => {
        setSecond([3, 5, 8, 2, 9]); // Replace `first` with a new array
        setCurrentIndex(0); // Reset current index to 0
    };
    return (
        <div>
            <div className="First" style={{ marginBottom: '20px' }}>
                {first.map((num, index) => (
                    <motion.div
                        key={index}
                        style={{
                            display: 'inline-block',
                            width: '30px',
                            height: '30px',
                            margin: '5px',
                            textAlign: 'center',
                            lineHeight: '30px',
                            backgroundColor: '#f0f0f0',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                        animate={
                            index === currentIndex
                                ? { scale: 1.2, backgroundColor: '#FFD700' }
                                : { scale: 1, backgroundColor: '#f0f0f0' }
                        }
                        transition={{ duration: 0.5 }}
                    >
                        {num}
                    </motion.div>
                ))}
            </div>
            <div className="Second">
                {second.map((num, index) => (
                    <motion.div
                        key={index}
                        style={{
                            display: 'inline-block',
                            width: '30px',
                            height: '30px',
                            margin: '5px',
                            textAlign: 'center',
                            lineHeight: '30px',
                            backgroundColor: '#f0f0f0',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                        animate={
                            index === currentIndex
                                ? { scale: 1.2, backgroundColor: '#00FA9A' }
                                : { scale: 1, backgroundColor: '#f0f0f0' }
                        }
                        transition={{ duration: 0.5 }}
                    >
                        {num}
                    </motion.div>
                ))}
            </div>
            <button onClick={updateFirstArray}>Update First Array</button>
            <button onClick={updateSecondArray}>Update Second Array</button>
            <div>
                <label>Animasjonsfart: </label><br />
                <button onClick={()=> setDuration(1000/animationspeeds[0])}>{animationspeeds[0]}x</button>
                <button onClick={()=> setDuration(1000/animationspeeds[1])}>{animationspeeds[1]}x</button>
                <button onClick={()=> setDuration(1000/animationspeeds[2])}>{animationspeeds[2]}x</button>
                <button onClick={()=> setDuration(1000/animationspeeds[3])}>{animationspeeds[3]}x</button>
                <button onClick={()=> setDuration(1000/animationspeeds[4])}>{animationspeeds[4]}x</button>
            </div>
        </div>
    );
};

export default SimpleAnimation;
