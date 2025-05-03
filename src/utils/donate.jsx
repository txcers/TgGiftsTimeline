import React from 'react';
import { Link } from 'react-router-dom';
import '../services/TimelineSlider.css';

function Donate() {
    const cryptoAddress = "UQBr27mGE_U-u9bj7F45iMrdSfwM6xHLumCEI4CObPF24rJK"; 

    const copyText = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Текст скопирован: ', text); 
        }).catch(err => {
            console.error('Ошибка при копировании текста: ', err);
        });
    };

    return (
        <div className="donate-div">
            <h3 className='crypto-h3'>CRYPTO:</h3>
            <label>
                TON:  
                <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); copyText(cryptoAddress); }}> {cryptoAddress}
                </a>
            </label>
            <label className='click-to-copy-label'>click to copy</label>
            <label className='nft-label'>NFT:<a href="https://t.me/txcvrs"> me</a></label>
            <Link to="/">Back to page</Link>
        </div>
    );
}

export default Donate;
