import React, { useState } from 'react';

import Genielamp from "./25.01.29/genielamp-png";
import Jesterhat from "./25.01.29/jesterjat-png";
import Lunarsnake from "./25.01.29/lunarsnake-png";
import Partysparkler from "./25.01.29/partysparkler-png";
import Witchhat from "./25.01.29/witchhat-png";

const components = [Genielamp, Jesterhat, Lunarsnake, Partysparkler, Witchhat];
const names = ['Genie lamp', 'Jester hat', 'Lunar snake', 'Party sparkler', 'Witch hat'];

const Display = ({ selectedDate }) => {
  const targetDate = new Date(2025, 0, 29);
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