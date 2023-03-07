import React from 'react';
import { Layout, Menu, Table, Button, Space } from 'antd';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons'
import {db} from "../firebase";
import {query, collection, onSnapshot} from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const { Header, Content, Footer } = Layout;
const data = []

const Main = () => {
  
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


  //get Firebase
  const {id} = useParams();
  const [data, setData] = useState([]);
  const [post, setPost] = useState({});
  
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
  return () =>{
    unsubscribe();
  }
}, []);

useEffect(() =>{
  const p = data.find(doc => doc.id === id)
  setPost (p);

}, [data, id])

//filter for coloums
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  
  const setOccSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'occupancy',
    });
  };

  const columns = [
    {
      title: 'Number',
      dataIndex: 'number',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      filters: [
      {
        text: 'standard',
        value: 'standard',
      },
      {
        text: 'suite',
        value: 'suite',
      },
      {
        text: 'deluxe',
        value: 'deluxe',
      },
      ],
      filteredValue: filteredInfo.type || null,
      onFilter: (value, record) => record.type.includes(value),
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: 'Occupancy',
      dataIndex: 'occupancy',
      key: 'occupancy',
      filters: [
        {
          text: '2',
          value: '2',
        },
        {
          text: '3',
          value: '3',
        },
        {
          text: '4',
          value: '4',
        },
        ],
        filteredValue: filteredInfo.occupancy || null,
        onFilter: (value, record) => record.occupancy.includes(value),
        sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
        ellipsis: true,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: {
        compare: (a, b) => a.price - b.price,
        multiple: 1,
      },
    },
    {
      title: 'Guest',
      dataIndex: 'guest',
      sorter: {
        compare: (a, b) => a.guest - b.guest,
        multiple: 1,
      },
    },
    {
      title: '',
      key: 'operation',
      
      render: (text, record) => (
        <Button type="primary" >
          <Link to={`./room/${ record.id}`}>
            More information
          </Link>
        </Button> 
      )
    },
  ];
  
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
    
 
  return (
    <Layout>
      <Header>
      <div className="header">
        <a href="#default" className="logo">CompanyLogo</a>
        <div className="header-right">
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
       
        <div className='content-layout_wrapp'>
        <>
          <Space
            style={{
              marginBottom: 16,
            }}
          >
            <Button onClick={setOccSort}>Sort occupancy</Button>
            <Button onClick={clearFilters}>Clear filters</Button>
            
          </Space>
            <Table columns={columns} dataSource={data} onChange={handleChange} />
        </>
       
        

        </div>
      </Content>
      
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2023 Created by Mari
      </Footer>

    </Layout>
  );
};

export default Main;












