import React, { useState } from 'react';
import  './ToggleOnOff.css'

const ToggleOnOff = () => {
    const [isToggledOn, setIsToggledOn] = useState(false)
    const handleChange = () => {
        setIsToggledOn(!isToggledOn);
    }
  return (
    <div className='ToggleOnOff'>
        <p>Toggle On Off</p>
        <button onClick={handleChange} className={`toggle-button ${isToggledOn ? "On" : "Off"}`}>
            {isToggledOn ? "On" : "Off"}
        </button>
    </div>
  )
}

export default ToggleOnOff