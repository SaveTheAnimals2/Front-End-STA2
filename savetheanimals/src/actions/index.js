import axiosWithAuth from '../utils/AxiosWithAuth';

export const getCampaigns = () => dispatch =>
{
    dispatch({type: 'GET_CAMPAIGNS'});

    axiosWithAuth().get('/campaigns')
    .then(response => 
    {
        dispatch({type: 'SUCCESS', payload: response.data});
    })
    .catch(error => 
    {
        console.log(error)
        dispatch({type: 'FAILURE', payload: 'Something went wrong. Try again'});
    })
}

export const addCampaign = campaign => dispatch =>
{
    console.log(campaign);
    dispatch({type: 'GET_CAMPAIGNS'});
    axiosWithAuth().post('/campaigns', campaign)
    .then(response =>
    {
        window.location.href = '/dashboard';
    })
    .catch(error =>
    {
        console.log(error);
        dispatch({type: 'FAILURE', payload: 'Something went wrong. Try again'});
    })
}

export const updateCampaign = (campaign, id) => dispatch =>
{
    dispatch({type: 'UPDATING'});

    axiosWithAuth().put(`/campaigns/${id}`, campaign)
    .then(response =>
    {
        dispatch({type: 'SUCCESS', payload: ''});
        window.location.href = '/dashboard';
    })
    .catch(error =>
    {
        console.log(error);
        dispatch({type: 'FAILURE', payload: 'Something went wrong. Try again'});
    })
}

export const deleteCampaign = id => dispatch =>
{
    dispatch({type: 'UPDATING'});

    axiosWithAuth().delete(`/campaigns/${id}`)
    .then(response =>
    {
        dispatch({type: 'SUCCESS', payload: 'Something went wrong. Try again'});
    })
    .catch(error =>
    {
        console.log(error);
        dispatch({type: 'FAILURE', payload: 'Something went wrong. Try again'});
    })
}

export const setUsername = username => dispatch =>
{
    dispatch({type: 'SET_USERNAME', payload: username});
}