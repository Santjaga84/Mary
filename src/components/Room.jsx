import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createStore } from "redux"
import { UserAuth } from '../context/AuthContext';
import { Layout, Menu} from 'antd';
import { UserOutlined } from '@ant-design/icons'
//import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {db} from "../firebase";
import {query, collection, onSnapshot} from "firebase/firestore";
import Checkin from './CheckIn'
import Checkout from './CheckOut'
import roomsReducer from '../redux/reducers/roomsReducer'

const { Header, Content, Footer } = Layout;

const Room = () => {

  const {id} = useParams();
  const [data, setData] = useState([]);
  const [room, setRoom] = useState({});
 
  useEffect(() =>{
  const q = query(collection(db, 'Rooms'));
  const unsubscribe = onSnapshot(q, queryCollection  => {
    let arr =[];
    queryCollection.forEach(doc => {
      arr.push({...doc.data(), id: doc.id});
    });
    console.log(arr);
   
    setData(arr);
  })
}, []);

useEffect(() =>{
  const currentRoom = room.find(item => item.id === id)
  setRoom (currentRoom);

}, [data, id])


//Auth log out
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
  
      
    <Layout>
       
    <Header>
    <div class="header">
      <a href="#default" class="logo">CompanyLogo</a>
      <div class="header-right">
        <a 
          href="#contact"
          onClick={handleLogout} 
        >
          <UserOutlined />Log out 
        </a>
        
      </div>
    </div>
      < Menu
        theme="dark"
        mode="horizontal" 
      />
    </Header>

    <Content className="content-layout" >
          <div className='content-btn'>
           <Checkin />
           <Checkout /> 
          </div>
          <div className='content-wrapper'>
          <div className='wrapper-image'>
            <img className="article-img" src="" alt="Card cap" />
          </div>
          <div className='wrapper-content'>
            <h2>Room</h2>
            <p>Type:</p>
            <p>Occupancy:</p>
            <p>Price:</p>
            <p>Guest:</p>
            <p>Features</p>
          </div> 
      </div>
      <div className='content-descr'>
        <p>Description:</p>
      </div>
    </Content>

    <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2023 Created by Mari
      </Footer>
      
        
     
    </Layout>
      
  );
}

export default Room;