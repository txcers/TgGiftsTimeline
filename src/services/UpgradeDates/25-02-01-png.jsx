import React, { useState } from 'react';

import Crystallball from "./25.02.01/crystallball-png";
import Eternalcandle from "./25.02.01/eternalcandle-png";
import Flyingbroom from "./25.02.01/flyingbroom-png";
import Hypnololipop from "./25.02.01/hypnololipop-png";
import Swisswatch from "./25.02.01/swisswatch-png";

const components = [Crystallball, Eternalcandle, Flyingbroom, Hypnololipop, Swisswatch];
const names = ['Crystal ball', 'Eternal candle', 'Flying broom', 'Hypno lollipop', 'Swiss watch'];
const Display = ({ selectedDate }) => {
  const targetDate = new Date(2025, 1, 1);
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
