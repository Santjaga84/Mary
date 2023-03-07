import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import roomsReducer from './roomsReducer'

const rootReducer = combineReducers({
    users: usersReducer, 
    rooms: roomsReducer,
    
});

export default rootReducer;