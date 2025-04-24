import React from 'react';
import bdaycandle from '/assets/gifs/bdaycandle.gif';
import deskcalendar from '/assets/gifs/deskcalendar.gif';
import homemadecake from '/assets/gifs/homemadecake.gif' 
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2024, 9, 10); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>B-day candle</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={bdaycandle} 
                        alt="bday candle gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Desk calendar</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={deskcalendar} 
                        alt="desk calendar gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Homemade cake</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={homemadecake} 
                        alt="homemade cake gif" 
                    />
                </div>

            </div>
        )
    }
    return null;
};

export default Gif;
