import React, { useState } from 'react';

import Diamondring from "./25.02.14/diamondring-png";
import Lootbag from "./25.02.14/lootbag-png";
import Lovepotion from "./25.02.14/lovepotion-png";
import Toybear from "./25.02.14/toybear-png";

const components = [Diamondring, Lootbag, Lovepotion, Toybear];
const names = ['Diamond Ring', 'Loot Bag', 'Love Potion', 'Toy Bear'];

const Display = ({ selectedDate }) => {
  const targetDate = new Date(2025, 1, 14);
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
