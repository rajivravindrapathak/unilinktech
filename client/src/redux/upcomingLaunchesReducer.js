import { FETCH_UPCOMING_LAUNCHES } from './actions';

const upcomingLaunchesReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_UPCOMING_LAUNCHES:
            return action.payload;
        default:
            return state;
    }
};

export default upcomingLaunchesReducer;
