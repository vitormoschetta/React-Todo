import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/TodoService";


interface TodoItemsProps {
    todo: Todo
    todoService: TodoService
    children?: string
}

export default function TodoItem(props: TodoItemsProps) {

    const { todo, todoService } = props

    const [done, setDone] = useState(todo.done)

    const history = useHistory()

    function handleChange(todo: Todo) {        
        todo.done = !todo.done
        setDone(todo.done)
        todoService.updateDone(todo)
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
                    onChange={() => handleChange(todo)}
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
