import React from 'react';
import {connect} from 'react-redux';
import {getCampaigns, addCampaign, updateCampaign, deleteCampaign} from '../actions';
import Campaign from './Campaign';

function Dashboard(props)
{
  const {isLoading, error, campaigns, isUpdating, getCampaigns, addCampaign, updateCampaign, deleteCampaign} = props;
    return(
        <div className='user-dashboard'>
            <h1>Welcome to your dashboard</h1>
            <div className='campaign-container'>
              {campaigns === undefined || campaigns.length === 0 ? 
              <p>Let's add a campign to see it here</p> : 
              !isLoading &&(
                <Campaign campaigns={campaigns}/>
              )}
            </div>
        </div>
    );
}

const mapStateToProps = state =>
{
  return {
    isLoading: state.isLoading,
    error: state.error,
    campaigns: state.campaigns,
    isUpdating: state.isUpdating
  }
}


export default connect(mapStateToProps, {getCampaigns, addCampaign, updateCampaign, deleteCampaign})(Dashboard);