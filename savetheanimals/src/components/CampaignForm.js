import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addCampaign} from '../actions';

const Campaign = props => {
    const [campaign, setCampaign] = useState({
        title: '',
        location: '',
        species: '',
        description: '',
        urgencyLevel: '',
        fundingGoals: '',
        deadline: '',

    });

    const {addCampaign} = props;

    const handleChanges = e => {
        setCampaign({...campaign, [e.target.name]: e.target.value});
    };

    const handleSubmit = event =>
    {
        event.preventDefault();
        addCampaign(campaign);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='title'>Campaign Name </label>
                <input id='title' type='text' name='title' placeholder='Campaign Name' onChange={handleChanges} value={campaign.title}/>
            </div>

            <div>
                <label htmlFor='location'>Location </label>
                <input id='location' type='text' name='location' placeholder='city/country' onChange={handleChanges} value={campaign.location}/>
            </div>
            
            <div>
                <label htmlFor='species'>Species </label> 
                <input id='species' type='text' name='species' placeholder='type of animal' onChange={handleChanges} value={campaign.species}/>
            </div>

            <div>
                <label htmlFor='description'>Description of what your campaign will do </label> 
                <textarea id='description' type='text' name='description' onChange={handleChanges} value={campaign.description}/>
            </div>

            <div>
                <label htmlFor='select'>Urgency Level </label>
                <select id='urgency' type='select' name='urgencyLevel' placeholder='select urgency' onChange={handleChanges} value={campaign.urgencyLevel}>
                    <option/>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Critical</option>
                </select>
            </div>

            {/* <button type='submit'>I'm an Organization</button>
            <button type='submit'>I'm a Supporter</button> */}

            <div>
                <label htmlFor='fundingGoals'>Goal Amount </label> 
                <input id='fundingGoals' type='text' name='fundingGoals' placeholder='$' onChange={handleChanges} value={campaign.fundingGoals}/>
            </div>

            <div>
                <label htmlFor='deadline'>Deadline </label> 
                <input id='deadline' type='date' name='deadline' placeholder='MM/DD/YYYY' onChange={handleChanges} value={campaign.deadline}/>
            </div>

            <button type='submit'>Add Campaign</button>

        </form>

    )
};

const mapPropsToState = state =>
{
    return{
        isLoading: state.isLoading
    }
}

export default connect(mapPropsToState, {addCampaign})(Campaign);