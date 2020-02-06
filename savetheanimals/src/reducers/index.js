const initalState = {
    isLoading: false,
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