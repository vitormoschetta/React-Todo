import Home from "./pages/Home";
import Todos from "./pages/Todos";
import TodoCreate from "./components/TodoCreate";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";


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
                            <Todos />
                        </Route>
                        <Route path="/todos/create">
                            <TodoCreate />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

// or:

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="uk-container">
                <div>
                    <Navbar />
                    <div className="uk-padding">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/todos" component={Todos} />
                            <Route path="/create" component={TodoCreate} />
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

