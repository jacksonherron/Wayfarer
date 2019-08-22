import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile'


const Routes = ({ currentUser, setCurrentUser }) => {
    const PrivateRoute = ({ component: Component, ...rest }) => {
        return <Route {...rest} render={(props) => (
            currentUser
            ? <Component {...props} currentUser={currentUser}  />
            : <Redirect to='/' />
        )} />
    };

    return (
        <Switch>
            <Route exact path='/' render={(props) => <Home {...props} currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
            <PrivateRoute path='/profile' component={ Profile } />
        </Switch>
    );
};

export default withRouter(Routes);