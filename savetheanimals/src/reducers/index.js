const initalState = {
    isLoading: false,
    campaigns: null,
    error: '',
    isUpdating: false
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
                error: ''
            }

        case 'FAILURE':
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}