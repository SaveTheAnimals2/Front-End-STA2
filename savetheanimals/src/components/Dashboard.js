import React from 'react';
import {connect} from 'react-redux';
import {getCampaigns, addCampaign, updateCampaign, deleteCampaign} from '../actions';

function Dashboard(props)
{
    const {isLoading, error, campaigns, isUpdating, getCampaigns, addCampaign, updateCampaign, deleteCampaign} = props;
    return(
        <div className='user-dashboard'>
            <h1>Welcome to your dashboard</h1>
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