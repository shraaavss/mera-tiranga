import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './btn.css'

function ConfettiButton() {
    const [throwConfetti, setThrowConfetti] = useState(false);

    const handleConfettiClick = () => {
        setThrowConfetti(true);
        setTimeout(() => {
            setThrowConfetti(false);
        }, 5000);
    };

    return (
        <div>
            <button onClick={handleConfettiClick}>Jai Hind!</button>
            {throwConfetti && <Confetti colors={["#FF9933", "#138808", "#000080"]} />}
        </div>
    );
}

export default ConfettiButton;