import { SET_LOCATION } from './actions';

const INITIAL_STATE = {
    lat: null,
    long: null,
}

export const mainReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LOCATION:
            return {
                ...state,
                lat: action.lat,
                long: action.long,
            };
        default:
            return state
    }
  };