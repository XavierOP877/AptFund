import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './LandingPage.css'; // Create a separate CSS file for styling

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="landing-content"
            >
                <h1 className="project-name">AptFund</h1>
                <button className="get-started-btn" onClick={() => navigate('/home')}>
                    Get Started
                </button>
            </motion.div>
        </div>
    );
};

export default LandingPage;
