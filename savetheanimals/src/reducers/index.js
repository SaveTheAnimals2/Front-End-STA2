const initalState = {
    isLoading: false,
    error: '',
    campaigns: [],
    isUpdating: false,
    username: ''
};

export const reducer = (state = initalState, action) =>
{
    switch(action.type)
    {
        case 'GET_CAMPAIGNS':
            return {
                ...state,
                isLoading: true
            }

        case 'SUCCESS':
            return {
                ...state,
                isLoading: false,
                campaigns: action.payload,
                isUpdating: false
            }

        case 'FAILURE':
            return {
                ...state,
                error: action.payload,
                isLoading: false,
                isUpdating: false
            }
            
        case 'UPDATING':
            return {
                ...state,
                isUpdating: true
            }
        case 'SET_USERNAME':
            return{
                ...state,
                username: action.payload
            }
        default:
            return state;
    }
}