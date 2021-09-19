import React, { ReactNode, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Todos from "./pages/Todos";
import TodoCreate from "./components/Todo/TodoCreate";
import TodoDelete from "./components/Todo/TodoDelete";
import AuthContextProvider from "./contexts/AuthContext";
import { TodoService } from "./services/TodoService";
import { UserService } from "./services/UserService";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


export default function App() {

    const userService = new UserService();

    return (
        <div className="uk-container">
            <Router>
                <AuthContextProvider>
                    <Navbar userService={userService} />
                    <div className="uk-padding">
                        {ContentRoutes()}
                    </div>
                </AuthContextProvider>
            </Router>
        </div>
    )


    function ContentRoutes() {
        return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login userService={userService} />
                </Route>
                <Route exact path="/todos">
                    <Todos />
                </Route>
                <Route path="/todos/create">
                    <TodoCreate />
                </Route>
                <Route path="/todos/delete">
                    <TodoDelete />
                </Route>
            </Switch>
        )
    }

}


