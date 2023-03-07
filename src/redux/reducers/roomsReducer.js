import { GET_ROOMS, GET_ROOMS_SUCCESS, SHOW_NOTIFICATION } from '../actions/roomsActions';

const initialState = {
  room:[],
  error:{}
};

const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROOMS:
      return  { ...state,room: action.payload };
    case GET_ROOMS_SUCCESS:
      return { ...state, room: action.payload };
    case SHOW_NOTIFICATION:
      return initialState;
    default:
      return state;
  }
};

export default roomsReducer;