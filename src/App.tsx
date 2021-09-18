import React, { ReactNode } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Todos from "./pages/Todos";
import TodoCreate from "./components/Todo/TodoCreate";
import TodoDelete from "./components/Todo/TodoDelete";
import AuthContextProvider from "./contexts/AuthContext";
import { TodoService } from "./services/TodoService";
import { UserService } from "./services/UserService";
import api from "./services/api";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


export default class App extends React.Component {

    private userService = new UserService()
    private todoService = new TodoService()

    public render() {
        return (
            <div className="uk-container">
                <Router>
                    <AuthContextProvider>
                        <Navbar userService={this.userService} />
                        <div className="uk-padding">
                            {this.ContentRoutes()}
                        </div>
                    </AuthContextProvider>
                </Router>
            </div>
        )
    }

    private ContentRoutes() {
        return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login userService={this.userService} />
                </Route>
                <Route exact path="/todos">
                    <Todos todoService={this.todoService} />
                </Route>
                <Route path="/todos/create">
                    <TodoCreate todoService={this.todoService} />
                </Route>
                <Route path="/todos/delete">
                    <TodoDelete todoService={this.todoService} />
                </Route>
            </Switch>
        )
    }

}


