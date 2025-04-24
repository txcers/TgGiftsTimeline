import React from 'react';
import berrybox from '/assets/gifs/berry box.gif';
import eternalrose from '/assets/gifs/eternal rose.gif';
import minioscar from '/assets/gifs/mini oscar.gif';
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2024, 10, 13); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Berry box</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={berrybox} 
                        alt="berry box gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Eternal rose</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={eternalrose} 
                        alt="eternal rose gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Mini oscar</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={minioscar} 
                        alt="mini oscar gif" 
                    />
                </div>

            </div>
        )
    }
    return null;
};

export default Gif;