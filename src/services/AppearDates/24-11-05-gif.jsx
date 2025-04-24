import React from 'react';
import recordplayer from '/assets/gifs/record player.gif';
import ring from '/assets/gifs/ringwithbigrock.gif';
import vintagecigar from '/assets/gifs/vintage cigar.gif';
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2024, 10, 5); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Record player</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={recordplayer} 
                        alt="record player gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Ring</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={ring} 
                        alt="ring gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Vintage cigar</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={vintagecigar} 
                        alt="vintage cigar gif" 
                    />
                </div>

            </div>
        )
    }
    return null;
};

export default Gif;