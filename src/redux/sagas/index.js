import {put, takeEvery,all,call} from "redux-saga/effects";
import watchRoomsSaga from "./roomSaga";

export function* workerSaga(){

}

function* watchChangeText (action){
    console.log("rChange")
    yield put({type: "SAVE_Data", payload: action.payload})
}

export function* watchClickSaga(){

}


export default function* rootSaga() {
    console.log("rootSaga")
    
    const sagas = [watchChangeText,watchRoomsSaga];

  yield all(sagas.map(s => call(s)));
  
   
}