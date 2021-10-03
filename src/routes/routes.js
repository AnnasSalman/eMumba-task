import React from "react";
import {Route, Redirect, Switch, BrowserRouter} from "react-router-dom";

// Pages
import Users from "../pages/Users/Users";
import Profile from "../pages/Profile/Profile";
import Posts from "../pages/Posts/Posts";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Users />
                </Route>
                <Route exact path="/Profile">
                    <Profile />
                </Route>
                <Route exact path="/Posts">
                    <Posts />
                </Route>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
};
