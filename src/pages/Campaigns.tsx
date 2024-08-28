import React, { useState } from 'react';
import './Campaigns.css';

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

const Campaigns: React.FC<CampaignsProps> = ({ campaigns }) => {
    const [expandedId, setExpandedId] = useState<number | null>(null);

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
