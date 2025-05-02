import React from 'react';
import may from '/assets/gifs/1may.gif'; 
const Gif = ({ selectedDate }) => {
    const targetDate = new Date(2025, 4, 1); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>1st may</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={may} 
                        alt="1st may Gif" 
                    />
                </div>
            </div>
        )
    }
    return null;
};

export default Gif;
