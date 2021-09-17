import { Todo } from "../models/Todo";


const TODO_STORE = 'todos';

export function get(): Todo[] {
    const data = localStorage.getItem(TODO_STORE) || '';
    try {
        const result = JSON.parse(data) as Todo[];
        return result;
    } catch {
        return [];
    }
}

export function save(todo: Todo) {
    localStorage.setItem(TODO_STORE, JSON.stringify(todo));
}