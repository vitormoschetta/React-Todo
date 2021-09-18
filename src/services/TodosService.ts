import { Todo } from "../models/Todo";

export class TodosService {

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
        this.todos.push(todo)
        localStorage.setItem(this.TODO_STORE, JSON.stringify(this.todos));
    }

    remove(todo: Todo) {
        this.todos = this.get()
        let index = this.todos.findIndex(x => x.id === todo.id)
        this.todos.splice(index, 1)
        localStorage.setItem(this.TODO_STORE, JSON.stringify(this.todos));
    }
}
