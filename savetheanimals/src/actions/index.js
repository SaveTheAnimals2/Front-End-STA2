import axiosWithAuth from '../utils/AxiosWithAuth';

export const getCampaigns = () => dispatch =>
{
    dispatch({type: 'GET_CAMPAIGNS'});

    axiosWithAuth().get('')
    .then(response => 
    {
        console.log(response)
        // dispatch({type: 'SUCCESS', payload: ''});
    })
    .catch(error => 
    {
        console.log(error)
        // dispatch({type: 'FAILURE', payload: ''});
    })
}

export const addCampaign = () => dispatch =>
{
    dispatch({type: 'GET_CAMPAIGNS'});
    axiosWithAuth().post('')
    .then(response =>
    {
        console.log(response);
        // dispatch({type: 'SUCCESS', payload: ''})
    })
    .catch(error =>
    {
        console.log(error);
        // dispatch({type: 'FAILURE', payload: ''});
    })
}

export const updateCampaign = () => dispatch =>
{
    dispatch({type: 'UPDATING'});

    axiosWithAuth().put('')
    .then(response =>
    {
        console.log(response);
        // dispatch({type: 'SUCCESS', payload: ''});
    })
    .catch(error =>
    {
        console.log(error);
        // dispatch({type: 'FAILURE', payload: ''});
    })
}

export const deleteCampaign = () => dispatch =>
{
    dispatch({type: 'UPDATING'});

    axiosWithAuth().delete('')
    .then(response =>
    {
        console.log(response);
        // dispatch({type: 'SUCCESS'})
    })
    .catch(error =>
    {
        console.log(error);
        // dispatch({type: 'FAILURE', payload: ''});
    })
}