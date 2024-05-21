import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Home from './Home';

function App() {
  const submitForm = async (event, type, email, password) => {
    event.preventDefault();

    const data = { email, password };
    const url = type === 'signup' ? 'http://localhost:8000/reg/' : 'http://localhost:8000/login/';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Unknown error');
      }

      const result = await response.json();
      console.log(result);
      alert(result.message);
    } catch (error) {
      console.error('Error:', error);
      alert(error.message);
    }
  };

  return (
    <Router>
      <div className="App container mt-5">
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/login" element={<Login submitForm={submitForm} />}>
          </Route>
          <Route path="/register" element={<Register submitForm={submitForm} />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
