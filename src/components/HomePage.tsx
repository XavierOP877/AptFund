import React from 'react';
import './HomePage.css'; // Ensure you have the updated CSS

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <h1>Welcome to AptFund</h1>
                <p>Your trusted platform for decentralized crowdfunding.</p>
                <button className="navigate-btn" onClick={() => window.location.href = '/campaigns'}>
                    Go to Campaigns
                </button>
            </section>

            {/* Cards Section */}
            <section className="cards-section slide-up">
                <div className="card">
                    <h3>Trust through Blockchain</h3>
                    <p>Utilizes the Aptos blockchain to ensure transparency in fund allocation.</p>
                </div>
                <div className="card">
                    <h3>Low Fees </h3>
                    <p>Minimal transaction fees thanks to decentralized technology.</p>
                </div>
                <div className="card">
                    <h3>Simple Campaign Creation</h3>
                    <p>Easy-to-use interface for launching and managing campaigns.</p>
                </div>
                <div className="card">
                    <h3>Secure Transactions</h3>
                    <p>All transactions are secured through smart contracts written in Move.</p>
                </div>
            </section>

            {/* zkme Section */}
            <section className="zkme-section">
                <h2>Securing Trust with zkme</h2>
                <p>
                    In our commitment to ensuring trust and security, AptFund integrates zkme for
                    verifying the credibility of project funders. zkme helps establish
                    trustworthiness and authenticity in the fundraising process by leveraging
                    zero-knowledge proofs.
                </p>
                <div className="zkme-info slide-up">
                    <div className="zkme-card">
                        <h3>zkme Feature 1</h3>
                        <p>Explains how zkme ensures secure validation of funders.</p>
                    </div>
                    <div className="zkme-card">
                        <h3>zkme Feature 2</h3>
                        <p>Describes the privacy aspects and benefits of zkme integration.</p>
                    </div>
                    <div className="zkme-card">
                        <h3>zkme Feature 3</h3>
                        <p>Highlights the technical implementation and its advantages.</p>
                    </div>
                </div>
            </section>

            {/* Additional zkme Section */}
            <section className="zkme-additional-cards slide-up">
                <h3>Additional zkme Insights</h3>
                <p>
                    Discover more about how zkme enhances the fundraising experience and
                    provides additional layers of security and trust.
                </p>
                <div className="zkme-additional-info">
                    <div className="zkme-additional-card">
                        <h4>zkme Insight 1</h4>
                        <p>Details about additional zkme features and their impact.</p>
                    </div>
                    <div className="zkme-additional-card">
                        <h4>zkme Insight 2</h4>
                        <p>Further information on how zkme benefits both funders and project creators.</p>
                    </div>
                    <div className="zkme-additional-card">
                        <h4>zkme Insight 3</h4>
                        <p>Additional perspectives on zkme’s role in ensuring a trustworthy platform.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 AptFund. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
