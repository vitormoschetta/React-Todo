import AddTodo from "./AddTodo";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import TodoList from "./TodoList";


function App() {
    return (
        <div className="uk-container">
            <Router>
                <Navbar></Navbar>
                <TodoList></TodoList>
            </Router>
        </div>
    );
}

export default App;
