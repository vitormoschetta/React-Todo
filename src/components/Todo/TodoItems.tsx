import { useHistory } from "react-router-dom";
import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/TodoService";


interface TodoItemsProps {
    todoService: TodoService
    todos: Todo[]
    children?: string
}

export default function TodoItems(props: TodoItemsProps) {

    const { todoService, todos } = props
    
    let history = useHistory()    

    function handleChange(event: any) { }

    function onRemove(todo: Todo) {
        todoService.remove(todo)
        history.push('/todos')
    }

    return (
        <div>
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
        </div>    
    )    
}
