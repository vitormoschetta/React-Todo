
import React from 'react';
import { Todo } from '../models/Todo';

const TodoList = () => {

    const todos: Todo[] = [
        { id: 1, title: 'Ir ao mercado', done: false },
        { id: 2, title: 'Ir a academia', done: false }
    ]

    return (
        <table className="uk-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tasks</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    todos?.map(todo => (
                        <tr className="uk-animation-slide-bottom-medium">
                            <td className="uk-width-auto">
                                <input className="uk-checkbox" type="checkbox" />
                            </td>
                            <td className="uk-width-expand">
                                {todo.title}
                            </td>
                            <td className="uk-width-auto">
                                <button className="uk-icon-button uk-button-danger" uk-icon="trash"></button>
                            </td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    );
}

export default TodoList;