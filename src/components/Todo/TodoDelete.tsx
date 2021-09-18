import { TodoService } from "../../services/TodoService";
import { useHistory, useLocation } from "react-router-dom";
import { Todo } from "../../models/Todo";


interface TodoDeleteProps {
    todoService: TodoService
    children?: string
}

export default function TodoDelete(props: TodoDeleteProps) {

    const { todoService } = props

    const location = useLocation();
    const history = useHistory()

    const todo = location.state as Todo

    function onRemove() {
        todoService.remove(todo)
        history.push('/todos')
    }

    return (
        <div>
            <div className="uk-card uk-card-hover uk-card-body">
                <h3 className="uk-card-title">{todo.title}</h3>
            </div>   

            <div>
                <button
                    className="uk-button uk-button-danger uk-button-large"
                    onClick={onRemove}
                >
                    Delete Confirm
                </button>

                <button
                    className="uk-button uk-button-default uk-button-large uk-margin-left"
                    onClick={() => history.goBack()}
                >
                    Return
                </button>
            </div>
        </div>
    );

}
