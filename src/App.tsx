import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Diary from './Diary';
import Gallery from './Gallery';
import Fundraising from './Fundraising';
import Sponsors from './Sponsors';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/fundraising" element={<Fundraising />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
