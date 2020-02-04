import React, {useState} from 'react';

const Campaign = props => {
    const [campaign, setCampaign] = useState({
        name: '',
        location: '',
        species: '',
        description: '',
        urgency: '',
        goal: '',
        deadline: '',

    });

    const handleChanges = e => {
        setCampaign({...campaign, [e.target.name]: e.target.value});
    };

    return (
        <form>
            <div>
                <label htmlFor='name'>Campaign Name </label>
                <input id='name' type='text' name='name' placeholder='Campaign Name' onChange={handleChanges}/>
            </div>

            <div>
                <label htmlFor='location'>Location </label>
                <input id='location' type='text' name='location' placeholder='city/country' onChange={handleChanges}/>
            </div>
            
            <div>
                <label htmlFor='species'>Species </label> 
                <input id='species' type='text' name='species' placeholder='type of animal' onChange={handleChanges}/>
            </div>

            <div>
                <label htmlFor='description'>Description of what your campaign will do </label> 
                <textarea id='description' type='text' name='description' onChange={handleChanges}/>
            </div>

            <div>
                <label htmlFor='select'>Urgency Level </label>
                <select id='urgency' type='select' name='location' placeholder='select urgency' onChange={handleChanges}>
                    <option/>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Critical</option>
                </select>
            </div>

            <button type='submit'>I'm an Organization</button>
            <button type='submit'>I'm a Supporter</button>

            <div>
                <label htmlFor='goal'>Goal Amount </label> 
                <input id='goal' type='text' name='goal' placeholder='$' onChange={handleChanges}/>
            </div>

            <div>
                <label htmlFor='deadline'>Deadline </label> 
                <input id='deadline' type='date' name='date' placeholder='MM/DD/YYYY' onChange={handleChanges}/>
            </div>

            <button type='submit'>Add Campaign</button>


        </form>
    )
};

export default Campaign;