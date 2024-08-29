import React, { useEffect, useState } from 'react';
import './Campaigns.css';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { Account,
    Aptos,
    AptosConfig,
    Network, } from '@aptos-labs/ts-sdk';

    const aptosConfig = new AptosConfig({ network: Network.DEVNET });
const aptos = new Aptos(aptosConfig);

type Campaign = {
    id: number;
    title: string;
    description: string;
    targetFunds: string;
    startDate: string;
    endDate: string;
    imageUrl: string;
};

type CampaignsProps = {
    campaigns: Campaign[];
};

type Coin = { coin: { value: string } };

const Campaigns: React.FC<CampaignsProps> = ({ campaigns }) => {

    const { account, signAndSubmitTransaction, } = useWallet();

    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await aptos.getAccountResource({
                    accountAddress: "0x1e0c21e544134356a93dca406a7de690c1138e6b01b55b896aef0f1933bb1053",
                    resourceType: "0x1e0c21e544134356a93dca406a7de690c1138e6b01b55b896aef0f1933bb1053::crowdfunding::Campaigns",
                  });
                console.log(response);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        fetchCampaigns();
    }, []);

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="campaign-section">
            {campaigns.map((campaign) => (
                <div className="campaign-slack" key={campaign.id}>
                    <img src={campaign.imageUrl} alt={campaign.title} className="campaign-image" />
                    <div className="campaign-info">
                        <h3>{campaign.title}</h3>
                        <p>{expandedId === campaign.id ? campaign.description : ''}</p>
                        {expandedId === campaign.id && (
                            <div className="campaign-details">
                                <p><strong>Target Funds:</strong> {campaign.targetFunds}</p>
                                <p><strong>Start Date:</strong> {campaign.startDate}</p>
                                <p><strong>End Date:</strong> {campaign.endDate}</p>
                            </div>
                        )}
                        <div className="button-group">
                            <button className="view-btn" onClick={() => toggleExpand(campaign.id)}>
                                {expandedId === campaign.id ? 'See Less' : 'View'}
                            </button>
                            <button className="donate-btn" disabled>
                                Donate
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Campaigns;
