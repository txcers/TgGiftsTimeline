import React from 'react';
import clever from '/assets/gifs/clever.gif';
import pot from '/assets/gifs/potwithmoney.gif';
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2025, 2, 16); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Clever</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={clever} 
                        alt="clever gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Money pot</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={pot} 
                        alt="money pot gif" 
                    />
                </div>

            </div>
        )
    }
    return null;
};

export default Gif;