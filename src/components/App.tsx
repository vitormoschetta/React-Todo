import AddTodo from "./AddTodo";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import {
    BrowserRouter as Router,
    Switch,
    Route    
} from "react-router-dom";


function App() {
    return (
        <div className="uk-container">
            <Router>
                <Navbar></Navbar>
                <Switch>
                    <Route exact path="/">
                        <TodoList />
                    </Route>
                    <Route path="/create">
                        <AddTodo />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
