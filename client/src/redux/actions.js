// actions.js page

import axios from 'axios';

export const FETCH_UPCOMING_LAUNCHES = 'FETCH_UPCOMING_LAUNCHES';
export const FETCH_PREVIOUS_LAUNCHES = 'FETCH_PREVIOUS_LAUNCHES';
export const FETCH_ROCKET_DETAILS = 'FETCH_ROCKET_DETAILS';

// Correct API URL
const API_URL = 'https://api.spacexdata.com/v4';

export const fetchUpcomingLaunches = () => async dispatch => {
    try {
        // const response = await axios.get(`${API_URL}/launches/upcoming`);
        // dispatch({ type: FETCH_UPCOMING_LAUNCHES, payload: response.data });
        // console.log('data', response)

        const response = await axios.get(`${API_URL}/launches/upcoming`);
        console.log('API Response:', response);  // Log the entire response object

        if(response && response.data) {
            dispatch({ type: FETCH_UPCOMING_LAUNCHES, payload: response.data });
            console.log('Data:', response.data);  // Log the data property
        } else {
            console.warn('No data received in response');
        }
    } catch (error) {
        console.error('Error fetching upcoming launches:', error);
    }
};

export const fetchPreviousLaunches = () => async dispatch => {
    try {
        const response = await axios.get(`${API_URL}/launches/past`);
        dispatch({ type: FETCH_PREVIOUS_LAUNCHES, payload: response.data });
    } catch (error) {
        console.error('Error fetching previous launches:', error);
    }
};

export const fetchRocketDetails = (rocketId) => async dispatch => {
    // try {
    //     const response = await axios.get(`${API_URL}/rockets/${rocketId}`);
    //     dispatch({ type: FETCH_ROCKET_DETAILS, payload: response.data });
    // } catch (error) {
    //     console.error('Error fetching rocket details:', error);
    // }
};
