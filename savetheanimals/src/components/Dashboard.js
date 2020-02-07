import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Campaign from './Campaign';
import axiosWithAuth from '../utils/AxiosWithAuth';
import './CampaignForm.css';

function Dashboard(props) {
  const { isLoading, campaigns, deleteCampaign } = props;

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_CAMPAIGNS' });
    axiosWithAuth().get('/campaigns')
      .then(response => {
        dispatch({ type: 'SUCCESS', payload: response.data });
      })
      .catch(error => console.log(error))

  }, [dispatch])

  return (
    <div className='user-dashboard'>

      <h2>Welcome to your dashboard</h2>

      <button onClick={() => history.push('/add-campaign')}>Add a Campaign</button>
      {!campaigns && isLoading && (
        <div className='loading'>
          <Spinner animation='grow' variant='primary' role='status' />
          <Spinner animation='grow' variant='primary' role='status' />
          <Spinner animation='grow' variant='primary' role='status' />
          <span className='sr-only'>Loading...</span>
        </div>)
      }
      {campaigns && !isLoading && (
        <div className='campaign-container'>
          <h2>Your Campaigns</h2>
          {campaigns.map(campaign =>
            <Campaign
              key={campaign.id}
              id={campaign.id}
              title={campaign.title}
              location={campaign.location}
              description={campaign.description}
              species={campaign.species}
              urgencyLevel={campaign.urgencyLevel}
              fundingGoals={campaign.fundingGoals}
              deadline={campaign.deadline}
              deleteCampaign={deleteCampaign} />)}
        </div>)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    campaigns: state.campaigns,
    error: state.error
  }
}


export default connect(mapStateToProps)(Dashboard);