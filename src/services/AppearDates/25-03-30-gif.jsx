import React from 'react';
import star from '/assets/gifs/starwithmoon.gif';
import monastery from '/assets/gifs/starwithbuild.gif';
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2025, 2, 30); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Moon star</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={star} 
                        alt="moon star" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Star monastery</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={monastery} 
                        alt="star monastery gif" 
                    />
                </div>
            </div>
        )
    }
    return null;
};

export default Gif;