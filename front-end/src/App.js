import React from 'react';
import './App.css';
import Login from './auth/Login/Login';
import Register from './auth/Register/Register';
import NavBar from './layout/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Register />
      <Login />
    </div>
  );
}

export default App;
