import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="card p-4 text-center">
      <h2>Welcome</h2>
      <div className="d-flex justify-content-around">
        <Link to="/register" className="btn btn-primary">
          Register
        </Link>
        <Link to="/login" className="btn btn-secondary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
