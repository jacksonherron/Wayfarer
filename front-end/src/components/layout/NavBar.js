import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../auth/Login'
import Register from '../auth/Register'
import './NavBar.css';

const NavBar = ({ logout, currentUser, setCurrentUser }) => {
    const links = (
        <>
            <Register />
            <Login setCurrentUser={setCurrentUser}/>
        </>
    );

    const authLinks = (
        <>
            <Link className="nav-link" to='/home'>Home</Link>
            <Link className="nav-link" to='/profile'>Profile</Link>
            <li className="nav-item">
                <span className="nav-link" onClick={ logout } style={{ cursor: 'pointer'}}>Logout</span>
            </li>
        </>
    )

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Wayfarer</Link>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cities</a>
                <div class="dropdown-menu" aria-labelledby="dropdown04">
                <a class="dropdown-item" href="/home/sanfrancisco">San Francisco</a>
                <a class="dropdown-item" href="/home/seattle">Seattle</a>
                <a class="dropdown-item" href="/home/tokyo">Tokyo</a>
                <a class="dropdown-item" href="/home/london">London</a>
                <a class="dropdown-item" href="/home/gibraltar">Gibraltar</a>
                <a class="dropdown-item" href="/home/sydney">Sydney</a>
                </div>
            </li>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav">
            { currentUser ? authLinks : links }
            </ul>
            </div>
        </nav>
    );
};

export default NavBar;