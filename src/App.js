import React from 'react';
import Signup from './components/Signup';
import Room from './components/Room';
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRooms } from './redux/actions/roomsActions';
import './App.css';
import { getRoomsSuccess } from './redux/actions/roomsActions';
function App() {

  const usersReducer = useSelector (store => store.users.user);

  
//useEffect() выполняет функцию dispatch(getRooms()) при первоначальной инициализации компонента, используя полученный ранее dispatch.

//Функция getRooms() является action creator, который создает action для получения данных о номерах в отеле с сервера и отправляет их в Redux store.

//const roomsData = useSelector (store => store.rooms.room); позволяет компоненту получить доступ к данным из Redux store. Здесь мы получаем данные о номерах из store.rooms.room.

 
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getRooms());
  },[]);
 
const roomsData = useSelector (store => store.rooms.room);

console.log("rooms: ",roomsData);
//

  return (
    <div className="App">
     
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/main' 
          element={
            <ProtectedRoute>
                  <Main />
            </ProtectedRoute>
          }
          />
           {/* <Route
            path='/room/:id'
            element={
              <ProtectedRoute>
                <Room />
              </ProtectedRoute>
            }
          />  */}
        </Routes>
      </AuthContextProvider> 
    </div>
  );
}
export default App;
