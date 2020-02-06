import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router';
import {addCampaign} from '../actions';
import './CampaignForm.css';

const CampaignForm = props => {
    
    const history = useHistory();
    const [campaign, setCampaign] = useState({
        title: '',
        location: '',
        species: '',
        description: '',
        urgencyLevel: '',
        fundingGoals: '',
        deadline: '',
        itemize: '',
    });

    //Need to put more input boxes in itemize
    //Need to add axios

    const {addCampaign} = props;

    const handleChanges = e => {
        setCampaign({...campaign, [e.target.name]: e.target.value});
    };

    const handleSubmitForm = event =>
    {
        event.preventDefault();
        addCampaign(campaign)
        .then(() => history.push('/dashboard'))
    }

    return (
    <div className='campaign-form'>
      <div className='campaign-formbox'>
      <h1>Add a New Campaign</h1>
        <form onSubmit={handleSubmitForm}>
           
      <div>
        <label htmlFor="title">Campaign Name </label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Campaign Name"
          onChange={handleChanges}
          value={campaign.title}
        />
      </div>
      <div>
        <label htmlFor="location">Location </label>
        <input
          id="location"
          type="text"
          name="location"
          placeholder="city/country"
          onChange={handleChanges}
          value={campaign.location}
        />
      </div>
      <div>
        <label htmlFor="species">Species </label>
        <input
          id="species"
          type="text"
          name="species"
          placeholder="type of animal"
          onChange={handleChanges}
          value={campaign.species}
        />
      </div>
      <div>
        <label htmlFor="description">
          What will your campaign do?{" "}
        </label>
        <textarea
          id="description"
          type="text"
          name="description"
          onChange={handleChanges}
          value={campaign.description}
        />
      </div>
      <div>
        <label htmlFor="select">Urgency Level </label>
        <select
          id="urgency"
          type="select"
          name="urgencyLevel"
          placeholder="select urgency"
          onChange={handleChanges}
          value={campaign.urgencyLevel}
        >
          <option />
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
          <option>Critical</option>
        </select>
      </div>
      <div>
        <label htmlFor="fundingGoals">Goal Amount </label>
        <input
          id="fundingGoals"
          type="text"
          name="fundingGoals"
          placeholder="$"
          onChange={handleChanges}
          value={campaign.fundingGoals}
        />
      </div>
      <div>
        <label htmlFor="deadline">Deadline </label>
        <input
          id="deadline"
          type="date"
          name="deadline"
          placeholder="MM/DD/YYYY"
          onChange={handleChanges}
          value={campaign.deadline}
        />
      </div>

      <div class='container'>
        <label htmlFor='itemize'>Where will the money go?</label>
        <div className='item-container'>
          <div>
            <label htmlFor="itemize">Item #1 </label>
            <input
                id="itemize"
                type="text"
                name="itemize"
                onChange={handleChanges}
                value={campaign.itemize}
                />             
            </div>
          <div>
            <label htmlFor="amount">Amount </label>
            <input
                id="amount"
                type="text"
                name="amount"
                onChange={handleChanges}
                value={campaign.amount}
                />
            </div>
          <div>
            <label htmlFor="itemize2">Item #2 </label>
            <input
                id="itemize2"
                type="text"
                name="itemize"
                onChange={handleChanges}
                value={campaign.itemize2}
                />
            </div>
          <div>
            <label htmlFor="amount2">Amount  </label>
            <input
                id="amount2"
                type="text"
                name="amount"
                onChange={handleChanges}
                value={campaign.amount2}
                />
             </div>
         </div>
            
      </div>

            {/* <div>
                <label htmlFor='itemize'>Where is the money going towards? </label>
                <textarea id='itemize' type='itemize' name='itemize'onChange={handleChanges} value={campaign.itemize}/> */}
            {/* <button type='submit'>I'm an Organization</button>
            <button type='submit'>I'm a Supporter</button> */}
            {/* </div> */}


      {/* {itemizeStateObject.map((amount, item) => {
        return (
          <>
        

            <input
              type="button"
              value="Add New Item"
              onClick={setItemizeState}
            />
          </>
        );
      })} */}

      <button type="submit">Add Campaign</button>
    </form>
  </div>
</div>
  );
};

 const mapPropsToState = state => {
  return {
    isLoading: state.isLoading
  };
};


export default connect(mapPropsToState, { addCampaign })(CampaignForm);
