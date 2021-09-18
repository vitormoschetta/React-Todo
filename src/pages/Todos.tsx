import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { Todo } from '../models/Todo';
import { TodoService } from '../services/TodoService';
import { useContext } from 'react';
import { AuthContext } from "../contexts/AuthContext";
import '../styles/todos.css'


interface TodoListProps {
    todoService: TodoService
    children?: string
}

export default function TodoList(props: TodoListProps) {

    let match = useRouteMatch()
    let history = useHistory()

    const { user } = useContext(AuthContext)

    if (!user) history.push('/login')

    const todos = props.todoService.get()

    function handleChange(event: any) {
    }

    function onRemove(todo: Todo) {
        const todoService = new TodoService()
        todoService.remove(todo)
        history.push('/todos')
    }

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
                <tbody>
                    {
                        todos?.map(todo => (
                            <tr className="uk-animation-slide-bottom-medium">
                                <td className="uk-width-auto">
                                    <input
                                        className="uk-checkbox"
                                        type="checkbox"
                                        checked={todo.done}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="uk-width-expand">
                                    {todo.title}
                                </td>
                                <td className="uk-width-auto">
                                    <button
                                        className="uk-icon-button uk-button-danger"
                                        uk-icon="trash"
                                        onClick={() => onRemove(todo)}
                                    />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}