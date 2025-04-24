import React, { useState } from 'react';

import Cookieheart from "./25.01.30/cookieheart-png";
import Deskcalendar from "./25.01.30/deskcalendar-png";
import Hangingstar from "./25.01.30/hangingstar-png";
import Jinglebells from "./25.01.30/jinglebells-png";
import Lovecandle from "./25.01.30/lovecandle-png";
import Snowmittens from "./25.01.30/snowmittens-png";

const components = [Cookieheart, Deskcalendar, Hangingstar, Jinglebells, Lovecandle, Snowmittens];
const names = ['Cookie heart', 'Desk calendar', 'Hanging star', 'Jingle bells', 'Love candle', 'Snow mittens'];

const Display = ({ selectedDate }) => {
  const targetDate = new Date(2025, 0, 30);
  const [activeComponentIndex, setActiveComponentIndex] = useState(null);

  const handleClick = (index) => {
    setActiveComponentIndex(activeComponentIndex === index ? null : index); 
  };

  if (selectedDate.toDateString() === targetDate.toDateString()) {
    return (
      <div className="ul-div">
        <ul className="dropdown">
          {components.map((Component, index) => (
            <li key={index} 
            onClick={() => handleClick(index)}>
              <span className='name-png-span'>{names[index]}</span>
              {activeComponentIndex === index && (
                <div className="content-png">
                  <Component />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
};

export default Display;
