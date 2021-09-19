import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Todo } from "../../models/Todo";
import api from "../../services/api";


interface TodoItemsProps {
    todo: Todo    
}

export default function TodoItem(props: TodoItemsProps) {

    const { todo } = props
    const [done, setDone] = useState(todo.done)
    const history = useHistory()

    async function handleChange(todo: Todo) {        
        todo.done = !todo.done
        await api.put(`todos/${todo.id}`, todo);
        setDone(todo.done)        
    }

    function onRemoveConfirm(todo: Todo) {
        history.push({
            pathname: '/todos/delete',
            search: `?id=${todo.id}`,
            state: todo
        })
    }

    return (
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
                <input
                    className="uk-checkbox"
                    type="checkbox"
                    checked={done}
                    onChange={(event) => handleChange(todo)}
                />
            </td>
            <td className="uk-width-expand">
                {todo.title}
            </td>
            <td className="uk-width-auto">
                <button
                    className="uk-icon-button uk-button-danger"
                    uk-icon="trash"
                    onClick={() => onRemoveConfirm(todo)}
                />
            </td>
        </tr>
    )
}
