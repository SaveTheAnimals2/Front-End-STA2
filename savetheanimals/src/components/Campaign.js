import React from 'react';

const Campaign = props => {
    
    return (
        <div>
            <h1>Campaign</h1>

            {/* {props.campaigns.map(campaign => (
                <div key={campaign.id}>
                    <h2>{campaign.name}</h2>
                    <p>{campaign.location}</p>
                    <p>{campaign.species}</p>
                    <p>{campaign.desc}</p>
                    <p>{campaign.urgency}</p>
                    <p>{campaign.goal}</p>
                    <p>{campaign.deadline}</p>
                </div>
            ))} */}
        </div>
    );
};

export default Campaign;