import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Todos from "./pages/Todos";
import TodoCreate from "./components/Todo/TodoCreate";
import TodoDelete from "./components/Todo/TodoDelete";
import AuthContextProvider from "./contexts/AuthContext";
import UserLocalStorageService from "./services/UserLocalStorageService";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


export default function App() {

    const userLocalStorageService = new UserLocalStorageService();

    return (
        <div className="uk-container">
            <Router>
                <AuthContextProvider>
                    <Navbar userLocalStorageService={userLocalStorageService} />
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
                    <Login userLocalStorageService={userLocalStorageService} />
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


