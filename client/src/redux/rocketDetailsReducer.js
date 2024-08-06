import { FETCH_ROCKET_DETAILS } from './actions';

const rocketDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ROCKET_DETAILS:
            return action.payload;
        default:
            return state;
    }
};

export default rocketDetailsReducer;
