import React from 'react';
import lolPopGif from '/assets/gifs/lolpop.gif'; 
import SakuraFlower from '/assets/gifs/SakuraFlower.gif';
const Gif = ({ selectedDate }) => {
    const targetDate = new Date(2024, 8, 28); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>LolPop</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={lolPopGif} 
                        alt="Lol Pop Gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Sakura Flower</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={SakuraFlower} 
                        alt="Sakura Flower Gif" 
                    />
                </div>

            </div>
        )
    }
    return null;
};

export default Gif;
