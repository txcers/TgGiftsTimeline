import React, { useState } from 'react';

import Candycane from "./25.03.07/candycane-png";
import Electricskull from "./25.03.07/electricskull-png";
import Snowglobe from "./25.03.07/snowglobe-png";
import Tamagadget from "./25.03.07/tamagadget-png";
import Winterwreath from "./25.03.07/winterwreath-png";

const components = [Candycane, Electricskull, Snowglobe, Tamagadget, Winterwreath];
const names = ['Candy Cane', 'Electric Skull', 'Snow Globe', 'Tama Gadget', 'Winter Wreath'];


const Display = ({ selectedDate }) => {
  const targetDate = new Date(2025, 2, 7);
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