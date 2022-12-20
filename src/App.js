import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
