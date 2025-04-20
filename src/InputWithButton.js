import React, { useState } from 'react';
import './InputWithButton.css'; 

const InputWithButton = () => {
    const [inputValue, setInputValue] = useState('');
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        setIsButtonClicked((prev) => !prev); 
        setClickCount((prev) => prev + 1); 
    };

    const buttonClass = isButtonClicked ? 'button-clicked' : '';
    const containerClass = clickCount % 2 === 0 ? 'even-clicks' : 'odd-clicks';

    return (
        <div className={`input-with-button ${containerClass}`}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Enter your text here" 
                className="input-field"
            />
            <button className={`clear-button ${buttonClass}`} onClick={handleButtonClick}>
                Clear
            </button>
        </div>
    );
};

export default InputWithButton;