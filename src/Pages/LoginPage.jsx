import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { GlobalContext } from '../Context/Login/Context';
import { Link } from 'react-router-dom';

function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {state,dispatch} = useContext(GlobalContext)
    const loginUser = (e) => {
        e.preventDefault();
        const payload = { email, password };

        dispatch(
            {
                type : "LOGIN_USER",
                payload : payload
            }
        )
  }
  return (
    <div className="login-form my-5">
      <h2>Login</h2>
      <form onSubmit={loginUser}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            className="form-control"
            name="Email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            name="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
