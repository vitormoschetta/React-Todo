import { useState } from 'react';
import { Todo } from '../../models/Todo';
import { FakeTodoService } from '../../services/FakeTodoService2';


interface TodoCreateProps {
    todoService: FakeTodoService
    children?: string
}

export default function TodoCreate(props: TodoCreateProps) {

    // let title: string = ''

    let [title, setTitle] = useState('')

    function createTodo(title: string) {
        let todo = new Todo(title)
        props.todoService.add(todo)
    }

    return (
        <form>
            <div className="uk-margin">
                <input
                    className="uk-input uk-form-width-large uk-form-medium"
                    type="text"
                    placeholder="Description"
                />
            </div>

            <button
                className="uk-button uk-button-primary"
                type="submit"
            >
                Confirm
            </button>
        </form>
    );
}
