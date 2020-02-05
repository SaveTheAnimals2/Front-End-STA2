import React, {useState, useEffect} from 'react';
import Campaign from './Campaign';
import {connect} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import axiosWithAuth from '../utils/AxiosWithAuth';
import {updateCampaign} from '../actions';

const UpdateCampaignForm = props => {
    
    const {id} = useParams();
    
    console.log(id);
    const [campaign, setCampaign] = useState({
        title: '',
        location: '',
        species: '',
        description: '',
        urgencyLevel: '',
        fundingGoals: '',
        deadline: '',
        // itemize: '',
    });

    //Need to put more input boxes in itemize
    //Need to add axios

    const {updateCampaign} = props;

    useEffect(() =>
    {
        axiosWithAuth().get(`/campaigns/${id}`)
        .then(response => {
            setCampaign(
            {
                title: response.data.title,
                location: response.data.location,
                description: response.data.description,
                species: response.data.species,
                urgencyLevel: response.data.urgencyLevel,
                fundingGoals: response.data.fundingGoals,
                deadline: response.data.deadline
            });
        })
        .catch(error => console.log(error))
    }, [])

    const handleChanges = e => {
        setCampaign({...campaign, [e.target.name]: e.target.value});
    };

    const handleSubmitForm = event =>
    {
        event.preventDefault();
       updateCampaign(campaign);
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <h1>Campaign Form</h1>
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
{/* 
            <div>
                <label htmlFor='itemize'>Where is the money going towards? </label>
                <textarea id='itemize' type='itemize' name='itemize'onChange={handleChanges} value={campaign.itemize}/> */}
            {/* <button type='submit'>I'm an Organization</button>
            <button type='submit'>I'm a Supporter</button> */}
            {/* </div> */}

            <div>
                <label htmlFor='fundingGoals'>Goal Amount </label> 
                <input id='fundingGoals' type='text' name='fundingGoals' placeholder='$' onChange={handleChanges} value={campaign.fundingGoals}/>
            </div>

            <div>
                <label htmlFor='deadline'>Deadline </label> 
                <input id='deadline' type='text' name='deadline' placeholder='MM/DD/YYYY' onChange={handleChanges} value={campaign.deadline}/>
            </div>

            <button type='submit'>Update Campaign</button>

        </form>

    )
};

const mapPropsToState = state =>
{
    return{
        state
    }
}

export default connect(mapPropsToState, {updateCampaign})(UpdateCampaignForm);
