import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import Campaigns from './pages/Campaigns';
import CreateCampaign from './pages/CreateCampaign';
import Swap from './pages/Swap';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<><Navbar /><HomePage /></>} />
                <Route path="/campaigns" element={<><Navbar /><Campaigns /></>} />
                <Route path="/create-campaign" element={<><Navbar /><CreateCampaign /></>} />
                <Route path="/swap" element={<><Navbar /><Swap /></>} />
                <Route path="/profile" element={<><Navbar /><Profile /></>} />
            </Routes>
        </Router>
    );
};

export default App;
