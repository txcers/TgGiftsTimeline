import React, { useState } from 'react';

import Jackinthebox from "./25.04.01/jackinthebox-png"

const components = [Jackinthebox];
const names = ['Jack-in-the-box'];


const Display = ({ selectedDate }) => {
  const targetDate = new Date(2025, 3, 1);
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