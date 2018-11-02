import { combineReducers, createStore } from 'redux';
import friendsReducer from './FriendsReducer';


const AppReducers = combineReducers({
    friendsReducer
});

const rootReducer = (state, action) => {
    return AppReducers(state,action);
}

let store = createStore(rootReducer);

export default store;