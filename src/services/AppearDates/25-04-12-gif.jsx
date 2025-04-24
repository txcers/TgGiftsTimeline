import React from 'react';
import rocket from '/assets/gifs/rocket.gif';
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2025, 3, 12); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Space rocket</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={rocket} 
                        alt="rocket gif" 
                    />
                </div>
            </div>
        )
    }
    return null;
};

export default Gif;