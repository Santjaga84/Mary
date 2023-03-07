import { takeEvery, put } from 'redux-saga/effects';
import { GET_ROOMS, getRoomsSuccess, showNotification,LOAD_ROOMS_DATA,GET_ROOMS_SUCCESS } from '../actions/roomsActions';
import { collection,getDocs } from "firebase/firestore";
import {db} from "./../../firebase";


function* getRooms() {
  try {
    const querySnapshot = yield (getDocs(collection(db, "Rooms")));
     let rooms = []
    
     querySnapshot.forEach((doc) => {
        rooms.push({...doc.data(), id: doc.id})
        });
        
    yield put({type:GET_ROOMS_SUCCESS, payload:(rooms)});
    console.log("rooms: ", rooms);
  } catch (error) {
    yield put(showNotification(`Error retrieving rooms data: ${error.message}`));
  }
}

export default function* watchRoomsSaga() {
  
      
  yield takeEvery(GET_ROOMS, getRooms);
}




