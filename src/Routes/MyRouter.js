import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../components/Login';
import NewsFeed from '../components/NewsFeed';
import Register from '../components/Register';
import Profile from '../components/Profile';

function MyRouter(props) {
    return (
        <Router>
            <Switch>
                <Route path="/home" >
                    <NewsFeed user={props.user} />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/profile">
                    <Profile user={props.user} />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}

export default MyRouter;