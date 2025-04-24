import React from 'react';
import durovscap from '/assets/gifs/durovs cap.gif';
import hangingstar from '/assets/gifs/hanging star.gif';
import jellybunny from '/assets/gifs/jelly bunny.gif';
import lovecandle from '/assets/gifs/love candle.gif';
import perfumebottle from '/assets/gifs/perfume bottle.gif';
import spicedwine from '/assets/gifs/spiced wine.gif';
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2024, 10, 24); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Durov`s cap </p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={durovscap} 
                        alt="durovs cap gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Hanging star</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={hangingstar} 
                        alt="hanging star gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Jelly bunny</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={jellybunny} 
                        alt="jelly bunny gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Love candle</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={lovecandle} 
                        alt="love candle gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Perfume bottle</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={perfumebottle} 
                        alt="perfume bottle gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Spiced wine</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={spicedwine} 
                        alt="spiced wine gif" 
                    />
                </div>
                

            </div>
        )
    }
    return null;
};

export default Gif;