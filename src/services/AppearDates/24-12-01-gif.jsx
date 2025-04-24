import React from 'react';
import astralshard from '/assets/gifs/astral shard.gif';
import bunnymuffin from '/assets/gifs/bunny muffin.gif';
import ginielamp from '/assets/gifs/ginie  lamp.gif';
import jesterhat from '/assets/gifs/jester hat.gif';
import plushpepe from '/assets/gifs/plush pepe.gif';
import preciouspeach from '/assets/gifs/precious peach.gif';
import signetring from '/assets/gifs/signet ring.gif';
import starnotepad from '/assets/gifs/star notepad.gif';
import swisswatch from '/assets/gifs/swiss watch.gif';
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2024, 11, 1); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Astral shard</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={astralshard} 
                        alt="astral shard gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Bunny muffin</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={bunnymuffin} 
                        alt="bunny muffin gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Ginie lamp</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={ginielamp} 
                        alt="ginie lamp gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Jester hat</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={jesterhat} 
                        alt="jester hat gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Plush pepe</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={plushpepe} 
                        alt="plush pepe gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Precious peach</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={preciouspeach} 
                        alt="precious peach gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Signet ring</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={signetring} 
                        alt="signet ring gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Star notepad</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={starnotepad} 
                        alt="star notepad gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Swiss watch</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={swisswatch} 
                        alt="swiss watch gif" 
                    />
                </div>
                

            </div>
        )
    }
    return null;
};

export default Gif;