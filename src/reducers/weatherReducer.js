import {
    CHANGE_LIMIT,
    FETCH_DATA_SUCCESS,
    FETCH_DATA,
    FETCH_DATA_FAILURE,
    CHANGE_UNIT,
    HANDLE_INPUT,
} from '../actions/weatherAction';

const initialState = {
    limit: 5,
    cityName: '',
    current: {},
    forecasts: [],
    isLoading: false,
    error: null,
    unit: '℃',
    input: ''
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
                error: null,
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
            return {
                ...state,
                error: action.err,
                isLoading: false
            }
        case CHANGE_UNIT:
            return {
                ...state,
                unit: state.unit === '℃' ? '℉' : '℃'
            }
        case HANDLE_INPUT:
            return {
                ...state,
                input: action.e.target.value
            }        
        default:
            return state;
    }
}
export default weatherReducer;