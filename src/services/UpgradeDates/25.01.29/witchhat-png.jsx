import React, { useState, useEffect } from 'react';

const PngDisplay = () => {
    const [pngs, setPngs] = useState([]);
    const scale = "32px"
    useEffect(() => {
        const loadPngs = async () => {
            const pngModules = import.meta.glob('/assets/images/WitchHat/*.png'); 
            const pngUrls = await Promise.all(
                Object.values(pngModules).map(async (importPng) => {
                    const pngModule = await importPng();
                    return pngModule.default; 
                }) 
            );
            setPngs(pngUrls);
        };

        loadPngs();
    }, []);

        return (
            <div className='png-container'>
                {pngs.map((png, index) => (
                    <img 
                        key={index}
                        width={scale} 
                        height={scale} 
                        alt="witch hat pngs" 
                        src={png} 
                    />
                ))}
            </div>
        );
    }


export default PngDisplay;