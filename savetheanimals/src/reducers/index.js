const initalState = {
    isLoading: false,
    error: '',
    campaigns: []
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
                    campaigns: action.payload,
                    isLoading: false
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