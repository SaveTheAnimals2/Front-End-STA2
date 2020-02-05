import React from 'react';
import {useHistory} from 'react-router-dom';
import {FaEdit} from 'react-icons/fa';
import {MdDelete} from 'react-icons/md';

const Campaign = props => {
    const history = useHistory();
    return (
        <div>
            <h1>Campaign</h1>

            {props.campaigns.map(campaign => (
                <div key={campaign.id}>
                    <FaEdit onClick={() => history.push(`/update-campaign/${campaign.id}`)}/>
                    <MdDelete onClick={() => props.deleteCampaign(campaign.id)}/>
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