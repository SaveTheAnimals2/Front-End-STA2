import axiosWithAuth from '../utils/AxiosWithAuth';

/*export const getCampaigns = () => dispatch =>
{
    dispatch({type: 'GET_CAMPAIGNS'});
    dispatch({type: 'FAILURE', payload: 'Something went wrong. Try again'});
}*/

export const addCampaign = campaign => dispatch =>
{
    dispatch({type: 'GET_CAMPAIGNS'});
    axiosWithAuth().post('/campaigns', campaign)
    .catch(error =>
    {
        console.log(error);
        dispatch({type: 'FAILURE', payload: 'Something went wrong. Try again'});
    })
}

export const updateCampaign = (campaign, id) => dispatch =>
{
    dispatch({type: 'GET_CAMPAIGNS'});

    axiosWithAuth().put(`/campaigns/${id}`, campaign)
    .catch(error =>
    {
        console.log(error);
        dispatch({type: 'FAILURE', payload: 'Something went wrong. Try again'});
    })
}

export const deleteCampaign = id => dispatch =>
{
    dispatch({type: 'GET_CAMPAIGNS'});

    axiosWithAuth().delete(`/campaigns/${id}`)
    .catch(error =>
    {
        console.log(error);
        dispatch({type: 'FAILURE', payload: 'Something went wrong. Try again'});
    })
}