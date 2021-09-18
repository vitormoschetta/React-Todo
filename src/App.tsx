import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Todos from "./pages/Todos";
import TodoCreate from "./components/Todo/TodoCreate";
import TodoDelete from "./components/Todo/TodoDelete";
import { FakeTodoService } from "./services/FakeTodoService2";
import AuthContextProvider from "./contexts/AuthContext";
import { TodosService } from "./services/TodosService";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";



const todoService = new FakeTodoService()

export default function App() {

    return (
        <div className="uk-container">
            <Router>
                <AuthContextProvider>
                    <Navbar></Navbar>
                    <div className="uk-padding">
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/login">
                                <Login />
                            </Route>
                            <Route exact path="/todos">
                                <Todos todoService={new TodosService()} />
                            </Route>
                            <Route path="/todos/create">
                                <TodoCreate todoService={new TodosService()} />
                            </Route>
                            <Route path="/todos/delete">
                                <TodoDelete />
                            </Route>
                        </Switch>
                    </div>
                </AuthContextProvider>
            </Router>
        </div>
    );
}


