import React from 'react';
import bunny from "/assets/gifs/bunny.gif";
import easteregg from "/assets/gifs/easteregg.gif";
import kulich from "/assets/gifs/kulich.gif";
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2025, 3, 19); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Easter bunny</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={bunny} 
                        alt="rocket gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Easter egg</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={easteregg} 
                        alt="rocket gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Kulich</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={kulich} 
                        alt="rocket gif" 
                    />
                </div>
            </div>
        )
    }
    return null;
};

export default Gif;