import { useHistory, useLocation } from "react-router-dom";
import { Todo } from "../../models/Todo";
import { ITodoService } from '../../services/TodoService'


export default function TodoDelete(props: ITodoService) {

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
            <div className="uk-margin">
                <input
                    className="uk-input uk-form-width-large uk-form-large"
                    type="text"                    
                    value={todo.title}
                    disabled
                />
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
