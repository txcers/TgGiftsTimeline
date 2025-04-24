import React, { useState } from 'react';

import Recordplayer from "./25.02.23/recordplayer-png";
import Sakuraflower from "./25.02.23/sakuraflower-png";
import Sleighball from "./25.02.23/sleighball-png";
import Tophat from "./25.02.23/tophat-png";

const components = [Recordplayer, Sakuraflower, Sleighball, Tophat];
const names = ['Record Player', 'Sakura Flower', 'Sleigh Ball', 'Top Hat'];


const Display = ({ selectedDate }) => {
  const targetDate = new Date(2025, 1, 23);
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