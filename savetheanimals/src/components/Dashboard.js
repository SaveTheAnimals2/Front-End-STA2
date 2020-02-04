import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCampaigns, addCampaign, updateCampaign, deleteCampaign } from '../actions';
import Campaign from './Campaign';

function Dashboard(props) 
{
  const { isLoading, error, campaigns, isUpdating, getCampaigns, addCampaign, updateCampaign, deleteCampaign, isAdmin } = props;

  const history = useHistory();

  return (
    <div className='user-dashboard'>
      <h1>Welcome to your dashboard</h1>
      <div className='campaign-container'>
        {campaigns === undefined || campaigns.length === 0 ?
          isAdmin &&(<p>Let's add a campaign to see it here</p>) :
          !isLoading && !isUpdating && (
            <Campaign campaigns={campaigns} />
          )}
      </div>
      {isAdmin &&(
         <button onClick={() => history.push('/add-campaign')}>Add a Campaign</button>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    campaigns: state.campaigns,
    isUpdating: state.isUpdating,
    isAdmin: state.isAdmin
  }
}


export default connect(mapStateToProps, { getCampaigns, addCampaign, updateCampaign, deleteCampaign })(Dashboard);