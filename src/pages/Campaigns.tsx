import React, { useState } from 'react';
import './Campaigns.css'; // Make sure to create this CSS file

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

const campaignsData: Campaign[] = [
    {
        id: 1,
        title: 'Clean Water for All',
        description: 'Raising funds to install clean water systems in rural villages.',
        targetFunds: '$10,000',
        startDate: '2024-09-01',
        endDate: '2024-10-01',
        imageUrl: '', // Placeholder for actual image: 'clean_water_project.jpg'
    },
    {
        id: 2,
        title: 'Books for Every Child',
        description: 'A project to provide books to underprivileged children in urban areas.',
        targetFunds: '$5,000',
        startDate: '2024-09-05',
        endDate: '2024-09-30',
        imageUrl: '', // Placeholder for actual image: 'books_for_children.jpg'
    },
    {
        id: 3,
        title: 'Solar Power Initiative',
        description: 'Funding to install solar panels in low-income households.',
        targetFunds: '$20,000',
        startDate: '2024-09-10',
        endDate: '2024-11-10',
        imageUrl: '', // Placeholder for actual image: 'solar_power_initiative.jpg'
    },
    {
        id: 4,
        title: 'Art Supplies for Kids',
        description: 'Supporting art education by providing art supplies to schools.',
        targetFunds: '$3,000',
        startDate: '2024-09-15',
        endDate: '2024-10-15',
        imageUrl: '', // Placeholder for actual image: 'art_supplies_for_kids.jpg'
    },
    {
        id: 5,
        title: 'Plant a Tree, Save the Planet',
        description: 'A campaign to plant 10,000 trees in deforested areas.',
        targetFunds: '$15,000',
        startDate: '2024-09-20',
        endDate: '2024-12-20',
        imageUrl: '', // Placeholder for actual image: 'plant_a_tree.jpg'
    },
    {
        id: 6,
        title: 'Tech Education for Girls',
        description: 'Empowering girls by providing access to coding and tech education.',
        targetFunds: '$8,000',
        startDate: '2024-09-25',
        endDate: '2024-11-25',
        imageUrl: '', // Placeholder for actual image: 'tech_education_for_girls.jpg'
    },
    {
        id: 7,
        title: 'Community Health Center',
        description: 'Building a health center to provide free healthcare services to local communities.',
        targetFunds: '$50,000',
        startDate: '2024-10-01',
        endDate: '2024-12-01',
        imageUrl: '', // Placeholder for actual image: 'community_health_center.jpg'
    },
    {
        id: 8,
        title: 'Feeding the Homeless',
        description: 'Providing meals to homeless individuals in the city.',
        targetFunds: '$7,500',
        startDate: '2024-10-05',
        endDate: '2024-11-05',
        imageUrl: '', // Placeholder for actual image: 'feeding_the_homeless.jpg'
    },
    {
        id: 9,
        title: 'Wildlife Conservation Fund',
        description: 'Protecting endangered species through conservation efforts.',
        targetFunds: '$12,000',
        startDate: '2024-10-10',
        endDate: '2024-12-10',
        imageUrl: '', // Placeholder for actual image: 'wildlife_conservation.jpg'
    },
    {
        id: 10,
        title: 'Music Instruments for Schools',
        description: 'Collecting funds to provide musical instruments to underfunded schools.',
        targetFunds: '$6,000',
        startDate: '2024-10-15',
        endDate: '2024-11-15',
        imageUrl: '', // Placeholder for actual image: 'music_instruments_for_schools.jpg'
    },
];

const Campaigns: React.FC = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="campaign-section">
            {campaignsData.map((campaign) => (
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
