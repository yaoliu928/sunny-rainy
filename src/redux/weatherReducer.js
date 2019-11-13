import {
    CHANGE_LIMIT,
    FETCH_DATA_SUCCESS,
    FETCH_DATA,
    FETCH_DATA_FAILURE
} from './weatherAction';

const initialState = {
    limit: 5,
    cityName: '',
    current: {},
    forecasts: [],
    isLoading: false,
    error:null,
};
const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LIMIT:
            return {
                ...state,
                limit: action.limit,
            };
        case FETCH_DATA:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_DATA_SUCCESS:
            const cityName = action.data.city.name;
            const current = action.data.current;
            const forecasts = action.data.forecast.slice(0, 10);
            return {
                ...state,
                isLoading: false,
                cityName,
                current,
                forecasts
            }

            case FETCH_DATA_FAILURE:
                return{
                    ...state,
                    error:action.err,
                    isLoading: false
                }

        default:
            return state;
    }
}
export default weatherReducer;