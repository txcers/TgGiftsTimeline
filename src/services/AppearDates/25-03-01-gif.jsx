import React from 'react';
import lamp from '/assets/gifs/lamp.gif';
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2025, 2, 1); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Lamp</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={lamp} 
                        alt="lamp gif" 
                    />
                </div>

            </div>
        )
    }
    return null;
};

export default Gif;