import React from 'react';
import evileye from '/assets/gifs/evileye.gif';
import hexpot from '/assets/gifs/hexpot.gif';
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2024, 9, 24); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Evil Eye</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={evileye} 
                        alt="evil eye gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Hex pot</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={hexpot} 
                        alt="hex pot gif" 
                    />
                </div>

            </div>
        )
    }
    return null;
};

export default Gif;
