import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Todo } from '../../models/Todo';
import { ITodoService } from '../../services/TodoService'


export default function TodoCreate(props: ITodoService) {

    const { todoService } = props

    const [title, setTitle] = useState('')
    const [submit, setSubmit] = useState(false)

    let history = useHistory()

    function handleTodo(event: FormEvent) {

        event.preventDefault()

        setSubmit(true)

        if (title.trim() === '') return

        let id = todoService.get().length++

        let todo = new Todo(title, false, id)

        todoService.save(todo)

        history.push('/todos')
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
