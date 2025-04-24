import React from 'react';
import electricskull from '/assets/gifs/electric skull.gif';
import kissedfrog from '/assets/gifs/kissed frog.gif';
import magicpotion from '/assets/gifs/magic potion.gif';
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2024, 10, 1); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Electric skull</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={electricskull} 
                        alt="electric skull gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Kissed frog</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={kissedfrog} 
                        alt="kissed frog gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Magic potion</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={magicpotion} 
                        alt="magic potion gif" 
                    />
                </div>

            </div>
        )
    }
    return null;
};

export default Gif;