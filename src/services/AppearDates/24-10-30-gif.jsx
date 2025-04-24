import React from 'react';
import iongem from '/assets/gifs/ion gem.gif';
import madpumkin from '/assets/gifs/mad pumpkin.gif';
import sharptongue from '/assets/gifs/sharp tongue.gif';
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2024, 9, 30); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Ion gem</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={iongem} 
                        alt="ion gem gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Mad pumpkin</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={madpumkin} 
                        alt="mad pumkin gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Sharp tongue</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={sharptongue} 
                        alt="sharp tongue gif" 
                    />
                </div>

            </div>
        )
    }
    return null;
};

export default Gif;