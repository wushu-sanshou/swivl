import { combineReducers } from 'redux';
import getAllUsersReducer from './getAllUsersReducer';
import getSingleUserReducer from './getSingleUserReducer';
import getFollowersReducer from './getFollowersReducer';


const rootReducer = combineReducers({
    getAllUsersReducer,
    getSingleUserReducer,
    getFollowersReducer
});

export default rootReducer;