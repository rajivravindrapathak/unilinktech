import { FETCH_PREVIOUS_LAUNCHES } from './actions';

const previousLaunchesReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_PREVIOUS_LAUNCHES:
            return action.payload;
        default:
            return state;
    }
};

export default previousLaunchesReducer;
