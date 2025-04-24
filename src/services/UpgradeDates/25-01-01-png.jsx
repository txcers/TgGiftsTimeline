import React, { useState } from 'react';

import Berrybox from "./25.01.01/berrybox-png";
import Durovscap from "./25.01.01/durovscap-png";
import Eternalrose from "./25.01.01/eternalrose-png";
import Evileye from "./25.01.01/evileye-png";
import Hexpot from "./25.01.01/hexpot-png";
import Homemadecake from "./25.01.01/homemadecake-png";
import Jellybunny from "./25.01.01/jellybunny-png";
import Kissedfrog from "./25.01.01/kissedfrog-png";
import Magicpotion from "./25.01.01/magicpotion-png";
import Perfumebottle from "./25.01.01/perfumebottle-png";
import Plushpepe from "./25.01.01/plushpepe-png";
import Preciouspeach from "./25.01.01/preciouspeach-png";
import Santahat from "./25.01.01/santahat-png";
import Scaredcat from "./25.01.01/scaredcat-png";
import Sharptongue from "./25.01.01/sharptongue-png";
import Signetring from "./25.01.01/signetring-png";
import Skullflower from "./25.01.01/skullflower-png";
import Spicedwine from "./25.01.01/spicedwine-png";
import Spyagaric from "./25.01.01/spyagaric-png";
import Trappedheart from "./25.01.01/trappedheart-png";
import Vintagecigar from "./25.01.01/vintagecigar-png";

const components = [
  Berrybox,
  Durovscap,
  Eternalrose,
  Evileye,
  Hexpot,
  Homemadecake,
  Jellybunny,
  Kissedfrog,
  Magicpotion,
  Perfumebottle,
  Plushpepe,
  Preciouspeach,
  Santahat,
  Scaredcat,
  Sharptongue,
  Signetring,
  Skullflower,
  Spicedwine,
  Spyagaric,
  Trappedheart,
  Vintagecigar
];

const names = [
  'Berry box',
  'Durovs cap',
  'Eternal rose',
  'Evil eye',
  'Hex pot',
  'Homemade cake',
  'Jelly bunny',
  'Kissed frog',
  'Magic potion',
  'Perfume bottle',
  'Plush Pepe',
  'Precious peach',
  'Santa hat',
  'Scared cat',
  'Sharp tongue',
  'Signet ring',
  'Skull flower',
  'Spiced wine',
  'Spy agaric',
  'Trapped heart',
  'Vintage cigar'
];

const Display = ({ selectedDate }) => {
  const targetDate = new Date(2025, 0, 1);
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
  return null

};

export default Display;