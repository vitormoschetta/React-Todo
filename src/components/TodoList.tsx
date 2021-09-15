import React from "react";
import { Todo } from "../models/Todo";
import TodoListItem from "./TodoListItem";


function TodoList() {
    const todos: Todo[] = [
        { id: 1, title: 'Ir ao supermercado', done: true },
        { id: 2, title: 'Ir a academia', done: false }
    ];

    return (
        <table className="uk-table">
            <caption>Lista de tarefas</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tarefa</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    todos?.map(todo =>
                        (<TodoListItem key={todo.id} todo={todo}></TodoListItem>)
                    )
                }
            </tbody>
        </table>
    );
}

export default TodoList;

