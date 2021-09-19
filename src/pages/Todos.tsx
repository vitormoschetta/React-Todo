import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../contexts/AuthContext";
import TodoItem from '../components/Todo/TodoItem';
import api from '../services/api';
import '../styles/todos.css'



export default function TodoList() {

    const { userContext } = useContext(AuthContext)
    const match = useRouteMatch()
    const history = useHistory()
    const [todos, setTodos] = useState([]);

    if (!userContext) {
        history.push('/login')
    }    

    useEffect(() => {
        api.get('todos').then((response) => {
            setTodos(response.data);
        });
    }, []);

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
                            todo => (<TodoItem todo={todo} />)
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}