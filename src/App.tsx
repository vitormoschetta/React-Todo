import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import TodoCreate from "./components/Todo/TodoCreate";
import TodoDelete from "./components/Todo/TodoDelete";
import { FakeTodoService } from "./services/FakeTodoService2";
import { createContext, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from "./pages/Login";


interface UserProps {
    id: string
    name: string
}

interface AuthContextProps {
    user: UserProps | undefined
    setUser: any
}

export const AuthContext = createContext({} as AuthContextProps)

const todoService = new FakeTodoService()

export default function App() {

    const [user, setUser] = useState<UserProps>();    

    return (
        <div className="uk-container">
            <Router>
                <AuthContext.Provider value={{ user, setUser }}>
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
                                <Todos todoService={todoService} />
                            </Route>
                            <Route path="/todos/create">
                                <TodoCreate todoService={todoService} />
                            </Route>
                            <Route path="/todos/delete">
                                <TodoDelete />
                            </Route>
                        </Switch>
                    </div>
                </AuthContext.Provider>
            </Router>
        </div>
    );
}


