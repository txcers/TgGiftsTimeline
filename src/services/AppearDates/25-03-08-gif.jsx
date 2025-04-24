import React from 'react';
import boquet from '/assets/gifs/bouquetwithmoney.gif';
import cake from '/assets/gifs/cake8march.gif';
import cake2 from '/assets/gifs/cakesecond8march.gif';
import dyson from '/assets/gifs/dyson.gif';
import flower from '/assets/gifs/flower8march.gif';
import nekohelmet from '/assets/gifs/nekohelmet.gif';
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2025, 2, 8); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Money boquet</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={boquet} 
                        alt="Money boquet gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Cake 8</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={cake} 
                        alt="cake 8 gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Cake</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={cake2} 
                        alt="cake gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Dyson</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={dyson} 
                        alt="dyson gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Flowers 8</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={flower} 
                        alt="flowers 8 gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Neko helmet</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={nekohelmet} 
                        alt="neko helmet gif" 
                    />
                </div>

            </div>
        )
    }
    return null;
};

export default Gif;