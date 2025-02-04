import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Install using: npm install framer-motion

const SimpleAnimation = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <motion.div
                style={{ width: 100, height: 100, backgroundColor: 'blue', borderRadius: '10px' }}
                animate={isAnimating ? { scale: 1.5, rotate: 360 } : { scale: 1, rotate: 0 }}
                transition={{ duration: 1 }}
                onClick={() => setIsAnimating(!isAnimating)}
            />
        </div>
    );
};

export default SimpleAnimation;