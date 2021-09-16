import { Todo } from '../models/Todo';
import { get, save } from '../services/FakeTodoService';


export default function TodoCreate() {

    function create(title: string) {
        let todo: Todo = {
            id: get().length + 1,
            title: title,
            done: false
        }

        save(todo)
    }

    return (
        <form>
            <div className="uk-margin">
                <input className="uk-input uk-form-width-large uk-form-medium" type="text" placeholder="Description" />
            </div>

            <button className="uk-button uk-button-primary" onClick={() => create('teste')}>Confirm</button>
        </form>
    );
}
