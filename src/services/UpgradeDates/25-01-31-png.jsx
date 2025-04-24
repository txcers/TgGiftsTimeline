import React, { useState } from 'react';

import Astralshard from "./25.01.31/astralshard-png";
import Bdaycandle from "./25.01.31/bdaycandle-png";
import Bunnymuffin from "./25.01.31/bunnymuffin-png";
import Lolpop from "./25.01.31/lolpop-png";
import Madpumkin from "./25.01.31/madpumkin-png";
import Voodoodoll from "./25.01.31/voodoodoll-png";

const components = [Astralshard, Bdaycandle, Bunnymuffin, Lolpop, Madpumkin, Voodoodoll];
const names = ['Astral shard', 'Birthday candle', 'Bunny muffin', 'Lollipop', 'Mad pumpkin', 'Voodoo doll'];
const Display = ({ selectedDate }) => {
  const targetDate = new Date(2025, 0, 31);
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
