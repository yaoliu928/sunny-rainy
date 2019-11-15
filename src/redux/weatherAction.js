import { getWeatherFor } from '../utils/axios';

export const CHANGE_LIMIT = 'CHANGE_LIMIT';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const CHANGE_UNIT = 'CHANGE_UNIT';
export const HANDLE_INPUT = 'HANDLE_INPUT';
export const HANDLE_SEARCH = 'HANDLE_SEARCH';

export const handleInputAction = (e) => ({
    e,
    type: HANDLE_INPUT
})

export const changeUnitAction = () => ({
    type: CHANGE_UNIT,

})

export const changeLimitAction = (limit) => ({
    limit,
    type: CHANGE_LIMIT,
});

export const fetchData = () => ({
    type: FETCH_DATA,
})

export const fetchDataSuccess = data => ({
    data,
    type: FETCH_DATA_SUCCESS,
});

export const fetchDataFailure = err => ({
    err,
    type: FETCH_DATA_FAILURE,
});

export const fetchDataThunkAction = (city) => (dispatch, getState) => {
    dispatch(fetchData());
    getWeatherFor(city).then(data => {
        dispatch(fetchDataSuccess(data));
    }).catch(err => {
        dispatch(fetchDataFailure(err));
    });
};

