import React, {useState} from 'react';
import Campaign from './Campaign';

const CampaignForm = props => {
    
    
    const [campaign, setCampaign] = useState({
        name: '',
        location: '',
        species: '',
        description: '',
        urgency: '',
        goal: '',
        deadline: '',
        itemize: '',
    });



    const handleChanges = e => {
        setCampaign({...campaign, [e.target.name]: e.target.value});
    };

    const submitForm = e => {
        e.preventDefault();
        console.log(e, props);
        props.addNewCampaign(campaign);
        setCampaign({name: '', locaton: '', species: '', description: '', urgency: '', goal: '', deadline: '', itemize: ''});  
    };

    return (
        <form onSubmit={submitForm}>
            <h1>Campaign Form</h1>

            <div>
                <label htmlFor='name'>Campaign Name </label>
                <input id='name' type='text' name='name' placeholder='Campaign Name' onChange={handleChanges} value={campaign.name}/>
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
                <textarea id='desc' type='text' name='desc' onChange={handleChanges} value={campaign.desc}/>
            </div>

            <div>
                <label htmlFor='select'>Urgency Level </label>
                <select id='urgency' type='select' name='location' placeholder='select urgency' onChange={handleChanges} value={campaign.urgency}>
                    <option/>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Critical</option>
                </select>
            </div>

            
            <div>
                <label htmlFor='goal'>Goal Amount </label> 
                <input id='goal' type='text' name='goal' placeholder='$' onChange={handleChanges} value={campaign.goal}/>
            </div>

            <div>
                <label htmlFor='deadline'>Deadline for Funding</label> 
                <input id='deadline' type='date' name='date' placeholder='MM/DD/YYYY' onChange={handleChanges} value={campaign.deadline}/>
            </div>

            <div>
                <label htmlFor='itemize'>Where is the money going towards? </label>
                <textarea id='itemize' type='itemize' name='itemize'onChange={handleChanges} value={campaign.itemize}/>
            </div>

            <button type='submit'>Add Campaign</button>


        </form>
    )
};

export default CampaignForm;