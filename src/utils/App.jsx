import React,{useEffect} from 'react';
import TimelineSlider from '../services/Timelineslider';
import Donate from './donate';
import { BrowserRouter as Router, Routes, Route } from  'react-router-dom';

function App() {
  useEffect(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });
  }, []);
     return (
      <Router basename="/TgGiftsTimeline">
       <Routes>
         <Route path="/" element={<TimelineSlider/>} />
         <Route path="/donate" element={<Donate/>} />
       </Routes>
      </Router>
     );
   }
export default App
