import React from 'react';
import {useHistory} from 'react-router-dom';
import {FaEdit} from 'react-icons/fa';
import {MdDelete} from 'react-icons/md';

import './CampaignForm.css';

const Campaign = props => {
    const history = useHistory();
    return (
        <div>
            <h2>Your Campaigns</h2>
            <div className='campaign-container'>
            {props.campaigns.map(campaign => (
                <div className='campaign-card' key={campaign.id}>
                    <FaEdit onClick={() => history.push(`/update-campaign/${campaign.id}`)}/>
                    <MdDelete onClick={() => props.deleteCampaign(campaign.id)}/>
                    <h3>{campaign.title}</h3>
                    <p>{campaign.location}</p>
                    <p>{campaign.description}</p>
                    <p>{campaign.species}</p>
                    <p>{campaign.urgencyLevel}</p>
                    <p>{campaign.fundingGoals}</p>
                    <p>{campaign.deadline}</p>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Campaign;