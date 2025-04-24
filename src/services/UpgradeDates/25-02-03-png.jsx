import React, { useState } from 'react';

import Gingercookie from "./25.02.03/gingercookie-png";
import Iongem from "./25.02.03/iongem-png";
import Minioscar from "./25.02.03/minioscar-png";
import Starnotepad from "./25.02.03/starnotepad-png";

const components = [Gingercookie, Iongem, Minioscar, Starnotepad];
const names = ['Ginger cookie', 'Ion gem', 'Mini Oscar', 'Star notepad'];
const Display = ({ selectedDate }) => {
  const targetDate = new Date(2025, 1, 3);
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
