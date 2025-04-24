import React, { useState } from 'react';
import Nekohelmet from "./25.03.08/nekohelmet-png";
const Component1 = () => <Nekohelmet />;

const components = [Component1];
const names = ['Neko helmet'];

const Display = ({ selectedDate }) => {
  const targetDate = new Date(2025, 2, 8);
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
  else{
    return null
  }
};

export default Display;
