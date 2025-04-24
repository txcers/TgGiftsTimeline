import React from 'react';
import giftsnake from '/assets/gifs/giftwithsnake.gif';
import snake from '/assets/gifs/snake.gif';
import tamagadget from '/assets/gifs/tama gadget.gif';
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2024, 11, 30); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Snake in gift</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={giftsnake} 
                        alt="snake in gif gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Snake</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={snake} 
                        alt="snake gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Tama gadget</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={tamagadget} 
                        alt="tama gadget gif" 
                    />
                </div>

            </div>
        )
    }
    return null;
};

export default Gif;