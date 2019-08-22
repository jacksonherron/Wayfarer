import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../auth/Login'
import Register from '../auth/Register'

const NavBar = ({ logout, currentUser, setCurrentUser }) => {
    const links = (
        <>
            <Register />
            <Login setCurrentUser={setCurrentUser}/>
        </>
    );

    const authLinks = (
        <li className="nav-item">
            <span className="nav-link" onClick={ logout } style={{ cursor: 'pointer'}}>Logout</span>
        </li>
    )

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav mr-auto">
                <Link className="navbar-brand" to="/">Wayfarer</Link>
                { currentUser ? authLinks : links }
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown04">
                        <a className="dropdown-item" href="/">Action</a>
                        <a className="dropdown-item" href="/">Another action</a>
                        <a className="dropdown-item" href="/">Something else here</a>
                    </div>
                </li>
            </ul>
            <form className="form-inline my-2 my-md-0">
                <input className="form-control" type="text" placeholder="Search" />
            </form>
            </div>
        </nav>
    );
};

export default NavBar;