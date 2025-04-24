import React from 'react';
import candycane from '/assets/gifs/candy cane.gif';
import cookieheart from '/assets/gifs/cookie heart.gif';
import cup from '/assets/gifs/cupwithcandy.gif';
import jinglebells from '/assets/gifs/jingle bells.gif';
import partysparkler from '/assets/gifs/party sparkler.gif';
import sock from '/assets/gifs/sockwithgifts.gif';
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2024, 11, 23); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Candy cane</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={candycane} 
                        alt="candy cane gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Cookie heart</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={cookieheart} 
                        alt="cookie heart gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Candy cup</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={cup} 
                        lt="candy cup gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Jingle bells</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={jinglebells} 
                        alt="jingle belss gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Party sparkler</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={partysparkler} 
                        alt="snow mittens gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Gift sock</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={sock} 
                        alt="gift sock gif" 
                    />
                </div>
                

            </div>
        )
    }
    return null;
};

export default Gif;