import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { Todo } from '../models/Todo';
import { TodoService } from '../services/TodoService';
import { useContext } from 'react';
import { AuthContext } from "../contexts/AuthContext";
import '../styles/todos.css'
import TodoItems from '../components/Todo/TodoItems';


interface TodoListProps {
    todoService: TodoService
    children?: string
}

export default function TodoList(props: TodoListProps) {
    
    const { todoService } = props
    const { user } = useContext(AuthContext)

    let match = useRouteMatch()
    let history = useHistory()

    if (!user) history.push('/login')

    const todos = todoService.get()   

    return (
        <div>
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    <li>
                        <Link to={`${match.url}/create`}>
                            <span uk-icon="icon: plus; ratio: 1.5"></span>
                        </Link>
                    </li>
                </ul>
            </div>

            <table className="uk-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tasks</th>
                        <th></th>
                    </tr>
                </thead>
                <TodoItems todos={todos} />               
            </table>
        </div>
    );
}