import { Todo } from "../models/Todo";

let todos: Todo[] = [
    { id: 1, title: 'Ir ao mercado', done: false },
    { id: 2, title: 'Ir a academia', done: false }
]

export function get(): Todo[] {
    return todos
}

export function save(todo: Todo) {
    todos.push(todo)
}