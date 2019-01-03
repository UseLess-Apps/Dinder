import { SET_LOCATION, SET_CUISINE_ID, REMOVE_CUISINE_ID } from './actions';

const INITIAL_STATE = {
    lat: null,
    long: null,
    selectedCuisines: [],
}

export const mainReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LOCATION:
            return {
                ...state,
                lat: action.lat,
                long: action.long,
            };
        case SET_CUISINE_ID:
            var copy = state.selectedCuisines.slice();
            copy.push(action.selectedCuisine);
            return {
                ...state,
                selectedCuisines: copy,
            }
        case REMOVE_CUISINE_ID:
            var copy = state.selectedCuisines.slice();
            var index = copy.indexOf(action.selectedCuisine);
            if (index !== -1) copy.splice(index, 1);
            return {
                ...state,
                selectedCuisines: copy,
            }
        default:
            return state
    }
  };