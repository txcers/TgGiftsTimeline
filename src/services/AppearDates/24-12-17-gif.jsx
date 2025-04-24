import React from 'react';
import gingercookie from '/assets/gifs/ginger cookie.gif';
import santahat from '/assets/gifs/santa hat.gif';
import sleighball from '/assets/gifs/sleigh ball.gif';
import snowglobe from '/assets/gifs/snow globe.gif';
import snowmittens from '/assets/gifs/snow mittens.gif';
import winterwreath from '/assets/gifs/winter wreath.gif';
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2024, 11, 17); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Ginger cookie</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={gingercookie} 
                        alt="ginger cookie gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Santa hat</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={santahat} 
                        alt="santa hat gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Sleigh ball</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={sleighball} 
                        lt="sleigh ball gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Snow globe</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={snowglobe} 
                        alt="snow globe gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Snow mittens</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={snowmittens} 
                        alt="snow mittens gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Winter wreath</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={winterwreath} 
                        alt="winter wreath gif" 
                    />
                </div>
                

            </div>
        )
    }
    return null;
};

export default Gif;