import { combineReducers } from 'redux';

const restaurants = (state=[], action) => {
    switch(action.type) {
        case "SET_RESTAURANTS":
            return action.payload 
        default:
            return state
    }
}

export default combineReducers({
    restaurants: restaurants
})