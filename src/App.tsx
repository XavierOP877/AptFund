import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import Campaigns from './pages/Campaigns';
import CreateCampaign from './pages/CreateCampaign';
import Swap from './pages/Swap';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import { useWallet } from '@aptos-labs/wallet-adapter-react';

// Define a type for campaign data
type Campaign = {
    id: number;
    title: string;
    description: string;
    targetFunds: string;
    startDate: string;
    endDate: string;
    imageUrl: string;
};

const App: React.FC = () => {
    const [campaigns, setCampaigns] = useState<Campaign[]>([
        {
            id: 1,
            title: 'Clean Water for All',
            description: 'Raising funds to install clean water systems in rural villages.',
            targetFunds: '$10,000',
            startDate: '2024-09-01',
            endDate: '2024-10-01',
            imageUrl: ''
        },
        {
            id: 2,
            title: 'Books for Every Child',
            description: 'A project to provide books to underprivileged children in urban areas.',
            targetFunds: '$5,000',
            startDate: '2024-09-05',
            endDate: '2024-09-30',
            imageUrl: ''
        },
        // Add the rest of the campaigns here...
    ]);

    const { connected } = useWallet(); // Get wallet connection status

    const addCampaign = (newCampaign: Campaign) => {
        setCampaigns([...campaigns, newCampaign]);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<><Navbar /><HomePage /></>} />
                <Route path="/campaigns" element={<><Navbar /><Campaigns campaigns={campaigns} /></>} />
                <Route path="/create-campaign" element={<><Navbar /><CreateCampaign addCampaign={addCampaign} isWalletConnected={connected} /></>} />
                <Route path="/swap" element={<><Navbar /><Swap /></>} />
                <Route path="/profile" element={<><Navbar /><Profile /></>} />
            </Routes>
        </Router>
    );
};

export default App;
