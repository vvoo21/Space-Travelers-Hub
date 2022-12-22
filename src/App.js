import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navigation from './components/navigation';
import Missions from './components/missions/Missions';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import fetchMissions from './redux/missions/api';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchMissions());

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
