import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { Todo } from '../models/Todo';
import '../styles/todos.css'
import { FakeTodoService } from '../services/FakeTodoService2';


interface TodoListProps {
    todoService: FakeTodoService
    children?: string
}

export default function TodoList(props: TodoListProps) {

    let match = useRouteMatch()
    let history = useHistory();


    const todos: Todo[] = props.todoService.getAll()

    function deleteTodo() {
        history.push('todos/delete');
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
                                    <input className="uk-checkbox" type="checkbox" />
                                </td>
                                <td className="uk-width-expand">
                                    {todo.title}
                                </td>
                                <td className="uk-width-auto">
                                    <button
                                        className="uk-icon-button uk-button-danger"
                                        uk-icon="trash"
                                        onClick={() => deleteTodo()} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}