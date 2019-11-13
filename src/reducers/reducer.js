import { combineReducers } from 'redux';

const initialState = {
    forecast: [
        {
            day: "Mon",
            high: "19c",
            low: "10c",
            time: "13:00"
        },
        {
            day: "Mon",
            high: "19c",
            low: "10c",
            time: "14:00"
        },
        {
            day: "Mon",
            high: "19c",
            low: "10c",
            time: "15:00"
        },
        {
            day: "Mon",
            high: "19c",
            low: "10c",
            time: "16:00"
        },
        {
            day: "Mon",
            high: "19c",
            low: "10c",
            time: "17:00"
        },
        {
            day: "Mon",
            high: "19c",
            low: "10c",
            time: "13:00"
        },
        {
            day: "Mon",
            high: "19c",
            low: "10c",
            time: "14:00"
        },
        {
            day: "Mon",
            high: "19c",
            low: "10c",
            time: "15:00"
        },
        {
            day: "Mon",
            high: "19c",
            low: "10c",
            time: "16:00"
        },
        {
            day: "Mon",
            high: "19c",
            low: "10c",
            time: "17:00"
        }
    ],
    limit: 5
}

export const forecast = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_LIMIT':
            return {
                ...state,
                limit: action.limit
            };
        default:
            return state;
    }
};

export default combineReducers({
    forecast: forecast,
})