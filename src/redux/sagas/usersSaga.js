import { takeEvery, put } from 'redux-saga/effects';
import { getAccountsSuccess, showNotification } from './usersActions';
import { collection } from "firebase/firestore";
import {db, getDocs} from "../firebase"

function* getAccounts() {
  try {
    const querySnapshot = yield (getDocs(collection(db, "accounts")));
    let accounts = []
    querySnapshot.forEach((doc) => {
       accounts.push({...doc.data(), id: doc.id})
       });
    yield put(getAccountsSuccess(accounts));
  } catch (error) {
    yield put(showNotification(error.message));
  }
}

export function* watchUsersSaga() {
  yield takeEvery('get_accounts', getAccounts);
}

