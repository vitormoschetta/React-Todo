import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Todo } from '../../models/Todo';
import { FakeTodoService } from '../../services/FakeTodoService2';
import { TodosService } from '../../services/TodosService';


interface TodoCreateProps {
    todoService: TodosService
    children?: string
}

export default function TodoCreate(props: TodoCreateProps) {

    let history = useHistory()
    
    const [title, setTitle] = useState('')
    const [submit, setSubmit] = useState(false)

    function handleTodo(event: FormEvent) {

        event.preventDefault()

        setSubmit(true)

        if (title.trim() === '') return

        let id = props.todoService.get().length++

        let todo = new Todo(title, false, id)

        props.todoService.save(todo)
        
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
                className="uk-button uk-button-primary uk-button-large uk-width-small"
                type="submit"
            >
                Confirm
            </button>
        </form>
    );
}
