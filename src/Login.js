import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ submitForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    submitForm(event, 'signin', email, password);
  };

  return (
<div className="card p-4">
      <div className='d-flex justify-content-end'>
        <Link to="/">Go to Home</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Sign In</legend>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="loginEmail">Email:</label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="loginEmail"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="loginPassword">Password:</label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="loginPassword"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-3">Sign In</button>
          <div className='d-flex justify-content-center mt-3'>
            <p>Don't have an account?</p>
            <Link to="/register" className="ml-2">Register</Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
