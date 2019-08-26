import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Landing from '../pages/Landing';
// import Profile from '../pages/Profile';
import Home from '../pages/Home';
import NotFound from '../components/NotFound/NotFound';


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
            <Route exact path='/' render={(props) => <Landing {...props} currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
            <PrivateRoute path='/home' component={ Home } />
            <PrivateRoute path='/profile' component={ Profile } />
            <Route path='*' component={NotFound}/>
        </Switch>
    );
};

export default withRouter(Routes);