import React from 'react';
import brick from '/assets/gifs/brick.gif';
import noodles from '/assets/gifs/doshik.gif';
import jack from '/assets/gifs/jack-in-the-box.gif';
import monkey from '/assets/gifs/monkey.gif';
import poop from '/assets/gifs/poop.gif';
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2025, 3, 1); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Brick</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={brick} 
                        alt="brick gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Instant noodles</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={noodles} 
                        alt="instant noodles gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Jack-in-the-box</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={jack} 
                        alt="jacl-in-the-box gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Monkey</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={monkey} 
                        alt="monkey gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Poop</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={poop} 
                        alt="poop gif" 
                    />
                </div>
            </div>
        )
    }
    return null;
};

export default Gif;