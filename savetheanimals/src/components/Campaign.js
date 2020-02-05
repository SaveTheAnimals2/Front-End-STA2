import React from 'react';

const Campaign = props => {
    
    return (
        <div>
            {props.campaigns.map(campaign => (
                <div key={campaign.id}>
                    <h2>{campaign.title}</h2>
                    <p>{campaign.location}</p>
                    <p>{campaign.description}</p>
                    <p>{campaign.species}</p>
                    <p>{campaign.urgencyLevel}</p>
                    <p>{campaign.fundingGoals}</p>
                    <p>{campaign.deadline}</p>
                   
                </div>
            ))}
        </div>
    );
};

export default Campaign;