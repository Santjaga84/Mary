import {GET_ACCOUNTS, GET_ACCOUNTS_SUCCESS, SHOW_NOTIFICATION } from '../actions/usersActions';

const initialState = {
  user: null,
  error: null
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNTS:
      return { ...state, user: action.payload, error: null };
    case GET_ACCOUNTS_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case SHOW_NOTIFICATION:
      return initialState;
    default:
      return state;
  }
};

export default usersReducer;

