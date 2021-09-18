import { useHistory } from "react-router-dom";
import { Todo } from "../../models/Todo";


interface TodoItemsProps {    
    todos: Todo[]
    children?: string
}

export default function TodoItems(props: TodoItemsProps) {

    const { todos } = props

    const history = useHistory()

    function handleChange(event: any) { }

    function removeConfirmRedirect(todo: Todo) {        
        history.push({
            pathname: '/todos/delete',
            search: `?id=${todo.id}`,
            state: todo
        })
    }

    return (
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
                                onClick={() => removeConfirmRedirect(todo)}
                            />
                        </td>
                    </tr>
                ))
            }
        </tbody>
    )
}
