import React, { useState } from 'react';
import './CreateCampaign.css'; // Import the CSS for styling
import { useWallet } from '@aptos-labs/wallet-adapter-react';

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
    const [status, setStatus] = useState('');

    const { account, signAndSubmitTransaction, } = useWallet();

    const initializeCampaigns = async () => {
        try {
            const response = await signAndSubmitTransaction({
                sender: account?.address,
                data: {
                    function: "0xf1d15d76f817f72d70b1b6c1db64b88f94d5e326feec95ab6263fd983a5a7acb::crowdfunding::initialize_campaign",
                    typeArguments: ["0x1::aptos_coin::AptosCoin"],
                    functionArguments: [],
                },
            });
            console.log(response);

            setStatus('Campaigns initialized successfully!');
        } catch (error) {
            console.error(error);
            setStatus('Error initializing campaigns.');
        }
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!isWalletConnected) {
            alert('Please connect your wallet first.');
            return;
        }

        const start = new Date(startDate).getTime();
        const end = new Date(endDate).getTime();
        const differenceInMilliseconds = end - start;
        const differenceInMinutes = differenceInMilliseconds / (1000 * 60);

        const response = await signAndSubmitTransaction({
            sender: account?.address,
            data: {
                function: "0xf1d15d76f817f72d70b1b6c1db64b88f94d5e326feec95ab6263fd983a5a7acb::crowdfunding::initialize_crowdfunding",
                typeArguments: ["0x1::aptos_coin::AptosCoin"],
                functionArguments: [targetFunds, differenceInMinutes],
            },
        });
        console.log(response);

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
