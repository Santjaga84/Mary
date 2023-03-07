export const GET_ACCOUNTS = "GET_ACCOUNTS";
export const GET_ACCOUNTS_SUCCESS = "GET_ACCOUNTS_SUCCESS";
export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";

export const getAccounts = () => ({
  type: GET_ACCOUNTS,
});

export const getAccountsSuccess = (accounts) => ({
  type: GET_ACCOUNTS_SUCCESS,
  payload: accounts,
});

export const showNotification = (error) => ({
  type: SHOW_NOTIFICATION,
  payload: error,
});

export const LOAD_ROOMS_DATA = 'LOAD_ROOMS_DATA';


