import axiosWithAuth from '../utils/AxiosWithAuth';

export const getCampaigns = () => dispatch =>
{
    dispatch({type: 'GET_CAMPAIGNS'});

    axiosWithAuth().get('')
    .then(response => 
    {
        console.log(response)
        dispatch({type: 'SUCCESS', payload: ''})
    })
    .catch(error => 
    {
        console.log(error)
        dispatch({type: 'FAILURE', payload: ''})
    })
}