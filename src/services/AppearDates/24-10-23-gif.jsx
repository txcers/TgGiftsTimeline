import React from 'react';
import spyagaric from '/assets/gifs/spyagaric.gif';
import witchhat from '/assets/gifs/witchhat.gif';
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2024, 9, 23); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Spy agaric</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={spyagaric} 
                        alt="spy agaric gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Witch hat</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={witchhat} 
                        alt="witch hat gif" 
                    />
                </div>

            </div>
        )
    }
    return null;
};

export default Gif;
