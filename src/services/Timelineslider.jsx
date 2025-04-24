import React, { useState, useEffect} from "react";
import { Link } from 'react-router-dom';

import './TimelineSlider.css'
import './BasicGifDisplay.css'
import './BasicPngDisplay.css'

import Appears from "./appears"
import Upgrades from "./upgrades";
function TimelineSlider() {

    
    const startDate = new Date(2024, 8, 28); 
    const today = new Date();
    const maxDate = new Date(today);
    const totalDays = Math.ceil((maxDate - startDate) / (1000 * 60 * 60 * 24));


    const [selectedDate, setSelectedDate] = useState(startDate);

    useEffect(() => {
        if (selectedDate < startDate) {
            setSelectedDate(startDate);
        } else if (selectedDate > maxDate) {
            setSelectedDate(maxDate);
        }
    },[] );

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const handleChange = (event) => {
        const dayOffset = parseInt(event.target.value, 10);
        const newDate = new Date(startDate);
        newDate.setDate(startDate.getDate() + dayOffset);
        setSelectedDate(newDate);
    };

    const handlePrevDate = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(selectedDate.getDate() - 1);
        if (newDate >= startDate) {
            setSelectedDate(newDate);
        }
    }

    const handleNextDate = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(selectedDate.getDate() + 1);
        if (newDate <= maxDate) {
            setSelectedDate(newDate);
        }
    }

    const handleResetDate = () => {
        setSelectedDate(startDate);
    }

    const handleUserDate = (event) => {
        const inputDate = new Date(event.target.value);
        if (!isNaN(inputDate.getTime()) && inputDate >= startDate && inputDate <= maxDate) {
            setSelectedDate(inputDate);
        }
    }

        const handleStartDate = () => {
        setSelectedDate(today);
    }


    return (
        <>
        <div className="main-div">
            <h1 className="timeline-h1">Timeline of Telegram gifts</h1>
            <label className="date-label">Date: {formatDate(selectedDate)}</label>
            <label className="number-of-days-label">Number of days from the start: {Math.ceil((selectedDate - startDate) / (1000 * 60 * 60 * 24))}</label>
            <div className="input-div">
                <input className="range-input"
                    type="range"
                    min="0"
                    max={totalDays}
                    step="1"
                    onChange={handleChange}
                    value={Math.ceil((selectedDate - startDate) / (1000 * 60 * 60 * 24))}
                />
                <div className="controls-div">
                    <button className="button-prev" onClick={handlePrevDate}>Prev</button>
                    <button className="button-next" onClick={handleNextDate}>Next</button>
                    <button className="button-reset" onClick={handleResetDate}>Start</button>
                    <button className="button-start-date" onClick={handleStartDate}>Today</button>
                </div> 
                <input type="date" className="date-input" onChange={handleUserDate} min={startDate.toISOString().split('T')[0]} max={maxDate.toISOString().split('T')[0]} />     
            </div>
            <hr className="output-hr"></hr>
            <div className="output-div">
                <Appears selectedDate={selectedDate}/>
                <hr className="reverse-hr"></hr>
                <Upgrades  selectedDate={selectedDate}/>
        </div>
        <div className="footer-div">
            <hr className="footer-hr"/>
            <p className='parag'>developer: <a href='https://t.me/+s_LXhp7dyMFjY2Vi'> wowkie</a></p>
            <p className='parag'>telegram channel: <a href='https://t.me/wtchtg'> WatchingTelegram</a></p>
            <p className="parag">find bugs or wanna to response: <a href='https://t.me/wowkie'>Telegram</a></p>
            <p className="parag">donate: <Link to="/donate"> Links</Link></p>
        </div>
        </div>
        </>
    );
}

export default TimelineSlider;