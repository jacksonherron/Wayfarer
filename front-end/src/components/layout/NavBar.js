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
            <Link className="navbar-brand" to="/"><i class="fas fa-city"></i>  Wayfarer</Link>
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