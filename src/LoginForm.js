import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('username:', username);
    console.log('password:', password);
  }

  return (
    <div className='user'>
      <form onSubmit={handleSubmit} className='loginform shadow-lg p-3 mb-5 bg-white rounded'>
        <h4>Pizza App Login</h4>
        <input
          className='lg-box'
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder='Username' />
        <br />
        <input
          className='lg-box'
          placeholder='Password'
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)} />
        <br />
        <button type="submit" className='btn login'>Login</button>
        <p className='reg'>Don't have account <Link to="/register">Register</Link> here...</p>
      </form>
    </div>

  );
}
