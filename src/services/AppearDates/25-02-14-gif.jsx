import React from 'react';
import boxwithcandies from '/assets/gifs/boxwithcandies.gif';
import cartier from '/assets/gifs/cartier.gif';
import diamondring from '/assets/gifs/diamond ring.gif';
import button from '/assets/gifs/heartinbutton.gif';
import heartwithcats from '/assets/gifs/heartwithcats.gif';
import heartwithkey from '/assets/gifs/heartwithkey.gif';
import jar from '/assets/gifs/jarwithheart.gif';
import lootbag from '/assets/gifs/loot bag.gif';
import lovepotion from '/assets/gifs/love potion.gif';
import sailormoon from '/assets/gifs/sailor moon.gif';
import shoes from '/assets/gifs/shoes.gif';
import toybear from '/assets/gifs/toy bear.gif';
const Gif= ({ selectedDate }) => {
    const targetDate = new Date(2025, 1, 14); 


    const isTargetDate = selectedDate.toDateString() === targetDate.toDateString();
    const scale = 80;
    if (isTargetDate){
        return(
            <div className='GifDisplayDiv'>
                <div className='gif'>
                <p className='paragraph'>Candy box</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={boxwithcandies} 
                        alt="candy box gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Cartier</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={cartier} 
                        alt="cartier gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Diamond ring</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={diamondring} 
                        alt="diamond ring gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Heart button</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={button} 
                        alt="heart button gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Heart with cats</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={heartwithcats} 
                        alt="heart with cats gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Locket</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={heartwithkey} 
                        alt="locket gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Jar</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={jar} 
                        alt="Jar gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Loot bag</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={lootbag} 
                        alt="Loot bag gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Love potion</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={lovepotion} 
                        alt="love potion gif" 
                    />
                </div>
                <div className='gif'>
                <p className='paragraph'>Sailor moon</p>
                    <img className='GifDisplayImg'
                        width={scale}
                        height={scale}
                        src={sailormoon} 
                        alt="sailor moon gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Shoes</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={shoes} 
                        alt="shoes gif" 
                    />
                </div>
                <div className='gif'>       
                    <p className='paragraph'>Toy bear</p>
                    <img className='GifDisplayImg'
                        width={scale} 
                        height={scale}
                        src={toybear} 
                        alt="toy bear gif" 
                    />
                </div>
                

            </div>
        )
    }
    return null;
};

export default Gif;