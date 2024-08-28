import React, { useState } from 'react';
import './CreateCampaign.css'; // Import the CSS for styling

// Define the Campaign type
type Campaign = {
    id: number;
    title: string;
    description: string;
    targetFunds: string;
    startDate: string;
    endDate: string;
    imageUrl: string;
};

interface CreateCampaignProps {
    addCampaign: (campaign: Campaign) => void;
    isWalletConnected: boolean; // Prop to check wallet connection status
}

const CreateCampaign: React.FC<CreateCampaignProps> = ({ addCampaign, isWalletConnected }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [targetFunds, setTargetFunds] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!isWalletConnected) {
            alert('Please connect your wallet first.');
            return;
        }

        const newCampaign = {
            id: Date.now(), // Simple unique ID for demo
            title,
            description,
            targetFunds,
            startDate,
            endDate,
            imageUrl,
        };

        addCampaign(newCampaign);

        // Clear the form fields
        setTitle('');
        setDescription('');
        setTargetFunds('');
        setStartDate('');
        setEndDate('');
        setImageUrl('');
    };

    return (
        <div className="create-campaign-page">
            <h2>Create a New Campaign</h2>
            <form className="create-campaign-form" onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Target Funds:
                    <input
                        type="text"
                        value={targetFunds}
                        onChange={(e) => setTargetFunds(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Start Date:
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </label>
                <label>
                    End Date:
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Image URL:
                    <input
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateCampaign;
