import { Todo } from "../models/Todo";

export class TodoService {

    TODO_STORE: string = 'todos';

    todos: Todo[] = []

    get(): Todo[] {
        const data = localStorage.getItem(this.TODO_STORE) || '';
        try {
            const result = JSON.parse(data) as Todo[];
            return result;
        } catch {
            return [];
        }
    }

    save(todo: Todo) {
        this.todos = this.get()
        localStorage.setItem(this.TODO_STORE, JSON.stringify([...this.todos, todo]));
    }

    remove(todo: Todo) {
        this.todos = this.get().filter((item) => item.id !== todo.id)
        localStorage.setItem(this.TODO_STORE, JSON.stringify(this.todos));
    }

    updateDone(todo: Todo) {
        this.todos = this.get().filter((item) => item.id !== todo.id)
        localStorage.setItem(this.TODO_STORE, JSON.stringify([...this.todos, todo]));
    }
}
