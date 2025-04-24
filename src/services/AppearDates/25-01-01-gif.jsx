import React from 'react';
import gift from '/assets/gifs/gift2025.gif';
import lunarsnake from '/assets/gifs/lunar snake.gif';
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2025, 0, 1); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>2025 gift</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={gift} 
                        alt="2025 gift gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Lunar snake</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={lunarsnake} 
                        alt="lunar snake gif" 
                    />
                </div>
            </div>
        )
    }
    return null;
};

export default Gif;