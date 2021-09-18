import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Todos from "./pages/Todos";
import TodoCreate from "./components/Todo/TodoCreate";
import TodoDelete from "./components/Todo/TodoDelete";
import AuthContextProvider from "./contexts/AuthContext";
import { TodoService } from "./services/TodoService";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { UserService } from "./services/UserService";


export default function App() {

    const userService = new UserService()
    const todoService = new TodoService()

    return (
        <div className="uk-container">
            <Router>
                <AuthContextProvider>
                    <Navbar userService={userService} />
                    <div className="uk-padding">
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/login">
                                <Login userService={userService} />
                            </Route>
                            <Route exact path="/todos">
                                <Todos todoService={todoService} />
                            </Route>
                            <Route path="/todos/create">
                                <TodoCreate todoService={todoService} />
                            </Route>
                            <Route path="/todos/delete">
                                <TodoDelete todoService={todoService} />
                            </Route>
                        </Switch>
                    </div>
                </AuthContextProvider>
            </Router>
        </div>
    );
}


