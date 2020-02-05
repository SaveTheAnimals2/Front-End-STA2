import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCampaigns, updateCampaign, deleteCampaign } from '../actions';

import Campaign from './Campaign';

function Dashboard(props) 
{
  const { isLoading, campaigns, isUpdating, getCampaigns, updateCampaign, deleteCampaign, username } = props;

  const history = useHistory();

  useEffect(() =>
  {
    getCampaigns(); 
  }, [getCampaigns])

  return (
    <div className='user-dashboard'>
  
      <h1>Welcome {username} to your dashboard</h1>
      <div className='campaign-container'>
        {campaigns === undefined || campaigns.length === 0 ?
          <p>Let's add a campaign to see it here</p> :
          !isLoading && !isUpdating && (
            <Campaign campaigns={campaigns} deleteCampaign={deleteCampaign} updateCampaign={updateCampaign}/>
          )}
      </div>

    <button onClick={() => history.push('/add-campaign')}>Add a Campaign</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    campaigns: state.campaigns,
    isUpdating: state.isUpdating,
    username: state.username
  }
}


export default connect(mapStateToProps, { getCampaigns, updateCampaign, deleteCampaign })(Dashboard);