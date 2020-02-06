import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { updateCampaign, deleteCampaign } from '../actions';
import Spinner from 'react-bootstrap/Spinner';
import Campaign from './Campaign';
import axiosWithAuth from '../utils/AxiosWithAuth';

function Dashboard(props) {
  const [campaigns, setCampaigns] = useState(null);
  const { isLoading, updateCampaign, deleteCampaign} = props;

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_CAMPAIGNS' });
    axiosWithAuth().get('/campaigns')
      .then(response => {
        dispatch({ type: 'SUCCESS' });
        getCampaigns(response.data);
      })
      .catch(error => console.log(error))

  }, [dispatch])

  const getCampaigns = value => {
    setCampaigns(value);
  }

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
          <Campaign campaigns={campaigns} updateCampaign={updateCampaign} deleteCampaign={deleteCampaign}/>
        </div>
        )}
      </div>
      );
    }
    
const mapStateToProps = state => {
  return {
        isLoading: state.isLoading,
      error: state.error
    }
  }
  
  
export default connect(mapStateToProps, {updateCampaign, deleteCampaign})(Dashboard);