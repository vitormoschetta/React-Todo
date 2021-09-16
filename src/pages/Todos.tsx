import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Todo } from '../models/Todo';
import { get, save } from '../services/FakeTodoService';


export default function TodoList() {

    let match = useRouteMatch();

    const todos: Todo[] = get()

    return (
        <div>
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    <li>
                        <Link to={`${match.url}/create`}>
                            <a href="#">
                                <span uk-icon="icon: plus; ratio: 1.5"></span>
                            </a>
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
                                    <button className="uk-icon-button uk-button-danger" uk-icon="trash"></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}