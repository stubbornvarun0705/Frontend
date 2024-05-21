import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = ({ submitForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    submitForm(event, 'signup', email, password);
  };

  return (
    <div className="card p-4">
        <div className='d-flex justify-content-end'>
        <Link to="/" >Go to Home</Link>
        </div>
      <h2 className="mb-3">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="registerEmail">Email:</label>
          <input
            type="email"
            className="form-control"
            id="registerEmail"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="registerPassword">Password:</label>
          <input
            type="password"
            className="form-control"
            id="registerPassword"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Sign Up</button>
        <div className='d-flex justify-content-center'>
            <p>already have a account?</p>
                <Link to="/login" >
                Login
                </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
