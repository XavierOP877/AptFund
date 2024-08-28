import React from 'react';
import { Link } from 'react-router-dom';
import { useWallet, WalletName } from '@aptos-labs/wallet-adapter-react';
import './Navbar.css'; // Import your CSS for styling

// Utility function to truncate the wallet address
const truncateAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
};

const Navbar: React.FC = () => {
    const { connect, disconnect, account, connected, wallets } = useWallet();

    const handleConnectWallet = () => {
        if (wallets && wallets.length > 0) {
            connect(wallets[0].name as WalletName);
        } else {
            console.error("No wallets available for connection");
        }
    };

    return (
        <nav className="navbar">
            <Link to="/home">Home</Link>
            <Link to="/campaigns">Campaigns</Link>
            <Link to="/create-campaign">Create Campaign</Link>
            <Link to="/swap">Swap</Link>
            <Link to="/profile">Profile</Link>
            
            {connected ? (
                <div className="wallet-info">
                    <span className="wallet-address">{account ? truncateAddress(account.address) : ''}</span>
                    <button className="wallet-btn" onClick={disconnect}>
                        Disconnect Wallet
                    </button>
                </div>
            ) : (
                <button className="wallet-btn" onClick={handleConnectWallet}>
                    Connect Wallet
                </button>
            )}
        </nav>
    );
};

export default Navbar;
