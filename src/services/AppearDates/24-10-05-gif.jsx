import React from 'react';
import bottle from '/assets/gifs/bottle.gif';
import bear from '/assets/gifs/infinitybear.gif';
import cake from '/assets/gifs/infinitycake.gif';
import diamond from '/assets/gifs/infinitydiamond.gif';
import flower from '/assets/gifs/infinityflower.gif';
import gift from '/assets/gifs/infinitygift.gif';
import heart from '/assets/gifs/infinityheart.gif';
import ring from '/assets/gifs/infinityring.gif';
import rocket from '/assets/gifs/infinityrocket.gif';
import rose from '/assets/gifs/infinityrose.gif'
import trophey from '/assets/gifs/infinitytrophey.gif'
const Gif = ({ selectedDate }) => {
    const targetDate = new Date(2024, 9, 5); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Inf Bear</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={bear} 
                        alt="Lol Pop Gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Inf Bottle </p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={bottle} 
                        alt="Lol Pop Gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Inf Cake </p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}px
                        src={cake} 
                        alt="Lol Pop Gif" 
                    /> 
                </div>
                <div className='gif'>
                <p className='paragraph'>Inf Diamond </p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={diamond} 
                        alt="Lol Pop Gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Inf Boquet </p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={flower} 
                        alt="Lol Pop Gif" 
                    />
                </div>  
                <div className='gif'>  
                <p className='paragraph'>Inf Gift </p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={gift} 
                        alt="Lol Pop Gif" 
                    />
                </div>    
                <div className='gif'>          
                <p className='paragraph'>Inf Heart </p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={heart} 
                        alt="Lol Pop Gif" 
                    />
                </div>   
                <div className='gif'>           
                <p className='paragraph'>Inf Ring </p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={ring} 
                        alt="Lol Pop Gif" 
                    />
                </div>  
                <div className='gif'>    
                <p className='paragraph'>Inf Rokcet </p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={rocket} 
                        alt="Lol Pop Gif" 
                    /> 
                </div>  
                <div className='gif'>   
                <p className='paragraph'>Inf Rose </p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={rose} 
                        alt="Lol Pop Gif" 
                    />
                </div> 
                <div className='gif'>          
                <p className='paragraph'>Inf Trophey </p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={trophey} 
                        alt="Lol Pop Gif" 
                    />
                </div>                                                                                                                         
            </div>
        )
    }
    return null;
    
};

export default Gif;