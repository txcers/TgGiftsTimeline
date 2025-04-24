import React from 'react';
import bowtie from '/assets/gifs/bowtie.gif';
import helmet from '/assets/gifs/helmet.gif';
import lazersword from '/assets/gifs/lazersword.gif';
import socks from '/assets/gifs/socks.gif';
import strongarm from '/assets/gifs/strongarm.gif';
import tophat from '/assets/gifs/tophat.gif';
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2025, 1, 23); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Bowtie</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={bowtie} 
                        alt="bowtie gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Helmet</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={helmet} 
                        alt="Helmet gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Lazer sword</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={lazersword} 
                        alt="lazer sword gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Socks</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={socks} 
                        alt="socks gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Strong arm</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={strongarm} 
                        alt="strong arm gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Tophat</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={tophat} 
                        alt="tophat gif" 
                    />
                </div>

            </div>
        )
    }
    return null;
};

export default Gif;