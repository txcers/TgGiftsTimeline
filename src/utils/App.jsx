import TimelineSlider from '../services/Timelineslider';
import Donate from './donate';
import { BrowserRouter as Router, Routes, Route } from  'react-router-dom';

function App() {
     return (
      <Router>
       <Routes>
         <Route path="/" element={<TimelineSlider/>} />
         <Route path="/donate" element={<Donate/>} />
       </Routes>
      </Router>
     );
   }
export default App
