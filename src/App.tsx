import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import TodoCreate from "./components/todo/TodoCreate";
import TodoDelete from "./components/todo/TodoDelete";
import { FakeTodoService } from "./services/FakeTodoService2";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";



const todoService = new FakeTodoService()

export default function App() {    

    return (
        <div className="uk-container">
            <Router>
                <Navbar></Navbar>
                <div className="uk-padding">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/todos">
                            <Todos todoService={todoService}/>
                        </Route>
                        <Route path="/todos/create">
                            <TodoCreate todoService={todoService} />
                        </Route>
                        <Route path="/todos/delete">
                            <TodoDelete />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}


