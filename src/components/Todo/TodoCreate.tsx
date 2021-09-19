import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Todo } from '../../models/Todo';
import api from '../../services/api';


export default function TodoCreate() {

    const [title, setTitle] = useState('')
    const history = useHistory();

    async function handleTodo(event: FormEvent) {
        event.preventDefault()
        await handlerTodo(title, history)
    }

    return (
        <form onSubmit={handleTodo}>
            <div className="uk-margin">
                <input
                    className="uk-input uk-form-width-large uk-form-large"
                    type="text"
                    placeholder="Description"
                    onChange={event => setTitle(event.target.value)}
                    value={title}
                />
            </div>

            <button
                className="uk-button uk-button-primary uk-button-large"
                type="submit"
            >
                Confirm
            </button>

            <button
                className="uk-button uk-button-default uk-button-large uk-margin-left"
                onClick={() => history.goBack()}
            >
                Return
            </button>
        </form>
    );
}


async function handlerTodo(title: any, history: any) {

    if (title.trim() === '') {
        return
    }
    let todo = new Todo(title)

    await api.post('todos', todo)

    history.push('/todos')
}