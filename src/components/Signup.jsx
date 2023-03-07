import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  //Auth log in
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/main')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

 


  return (
    <div className='main'>
      <div>
        <h1 className='main_title'>Authentication</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
          />
        </div>
        <div>
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
          />
        </div>
        <button className='login_btn'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signup;