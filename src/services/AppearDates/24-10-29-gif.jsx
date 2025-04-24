import React from 'react';
import crystalball from '/assets/gifs/crystal ball.gif';
import flyingbroom from '/assets/gifs/flying broom.gif';
import scaredcat from '/assets/gifs/scared cat.gif';
import skullflower from '/assets/gifs/skull flower.gif';
import trappedheart from '/assets/gifs/trapped heart.gif';
import voodoodoll from '/assets/gifs/voodoo doll.gif';

const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2024, 9, 29); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Crystal ball</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={crystalball} 
                        alt="crystal ball gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Flying broom</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={flyingbroom} 
                        alt="flying broom gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Scared cat</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={scaredcat} 
                        alt="scared cate gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Skull flower</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={skullflower} 
                        alt="skull flower gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Trapped heart</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={trappedheart} 
                        alt="trapped heart gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Voodoo doll</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={voodoodoll} 
                        alt="voodoo doll gif" 
                    />
                </div>

            </div>
        )
    }
    return null;
};

export default Gif;
