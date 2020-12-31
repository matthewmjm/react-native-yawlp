import { combineReducers } from 'redux';

const restaurants = (state=[], action) => {
    switch(action.type) {
        case "SET_RESTAURANTS":
            return action.payload 
        default:
            return state
    }
}

const favorites = (state=[], action) => {
    switch(action.type) {
        case "ADD_FAVORITE":
            if (!state.find(restaurant => restaurant.id === action.payload.id)) {
                return [...state, action.payload]
            }
        default:
            return state
    }
}

export default combineReducers({
    restaurants: restaurants,
    favorites: favorites
})