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

export const addCampaign = () => dispatch =>
{
    dispatch({type: 'GET_CAMPAIGNS'});
    axiosWithAuth().post('/campaigns')
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

export const setIsAdmin = isAdmin => dispatch =>
{
    dispatch({type: 'SET_ADMIN', payload: isAdmin});
}

export const setUsername = username => dispatch =>
{
    dispatch({type: 'SET_USERNAME', payload: username});
}