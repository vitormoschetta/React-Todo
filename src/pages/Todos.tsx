import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { Todo } from '../models/Todo';
import { ITodoService, TodoService } from '../services/TodoService';
import { useContext } from 'react';
import { AuthContext } from "../contexts/AuthContext";
import '../styles/todos.css'
import TodoItem from '../components/Todo/TodoItem';


export default function TodoList(props: ITodoService) {

    const { todoService } = props

    const { user } = useContext(AuthContext)

    let match = useRouteMatch()
    let history = useHistory()

    if (!user) history.push('/login')

    const todos = todoService.get()

    return (
        <div>
            <table className="uk-table uk-text-large uk-text-light">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tasks</th>
                        <th>
                            <Link to={`${match.url}/create`}>
                                <span uk-icon="icon: plus; ratio: 1.5"></span>
                            </Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos?.map(
                            todo => (<TodoItem todo={todo} todoService={todoService}></TodoItem>)
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}