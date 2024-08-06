

import { combineReducers } from 'redux';
import upcomingLaunchesReducer from './upcomingLaunchesReducer';
import previousLaunchesReducer from './previousLaunchesReducer';
import rocketDetailsReducer from './rocketDetailsReducer';

const rootReducer = combineReducers({
    upcomingLaunches: upcomingLaunchesReducer,
    previousLaunches: previousLaunchesReducer,
    rocketDetails: rocketDetailsReducer,
});

export default rootReducer;

