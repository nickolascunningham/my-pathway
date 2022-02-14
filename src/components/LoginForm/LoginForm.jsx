import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import Button from '@mui/material/Button';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
      {errors.loginMessage && (
        <h2 className="alert" role="alert">
          {errors.loginMessage}
        </h2>
      )}
      <div className='loginContainer'>
          <input
            placeholder='Username'
            className='loginInput'
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
      
        
          <input
            placeholder='Password'
            className='loginInput'
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

      </div>
      <div className="loginButton">
        <Button className="btn-primary loginButton" color="primary" variant="contained" onClick={login}>Login</Button>
      </div>
    </form>
  );
}

export default LoginForm;
