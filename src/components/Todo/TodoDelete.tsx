import { useHistory, useLocation } from "react-router-dom";
import { Todo } from "../../models/Todo";
import api from "../../services/api";


export default function TodoDelete() {

    const location = useLocation()
    const history = useHistory()
    const todo = location.state as Todo

    async function onRemove() {
        await api.delete(`todos/${todo.id}`)
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
