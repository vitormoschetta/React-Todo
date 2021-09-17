import { DataResult } from "../models/DataResult";
import { Todo } from "../models/Todo";

export class FakeTodoService {
    
    list: Todo[]

    constructor() {
        this.list = [
            { id: 1, title: 'Ir ao mercado', done: false },
            { id: 2, title: 'Ir a academia', done: false }
        ];
    }
    

    add(todo: Todo): DataResult {
        let exist = this.exist(todo.title)
        if (exist)
            return new DataResult(false, "Já existe uma tarefa cadastrada com este título.", null)

        todo.id = (this.list.length + 1)
        this.list.push(todo)
        return new DataResult(true, "Tarefa cadastrada com sucesso!", todo)
    }

    update(todo: Todo): DataResult {
        let exist = this.existUpdate(todo.title, todo.id)
        if (exist)
            return new DataResult(false, "Já existe uma tarefa cadastrada com este título.", null)

        let item = this.list[todo.id]
        item.title = todo.title
        return new DataResult(true, "Tarefa atualizada com sucesso!", todo)
    }

    delete(id: number): DataResult {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].id == id) {
                this.list.splice(i, 1)
                return new DataResult(true, "Tarefa excluída com sucesso!", null)
            }
        }
        return new DataResult(false, "Tarefa não encontrada..", null)
    }

    getAll(): Todo[] {
        return this.list
        // return this.orderByName(this.list)
    }

    getById(id: number): Todo {
        return this.list[id]
    }

    getByTodo(todo: Todo): Todo {
        let index = this.list.indexOf(todo);
        return this.list[index]
    }

    exist(title: string): boolean {
        var item = this.list.find(x => x.title == title)
        if (item == undefined)
            return false
        return true
    }

    existUpdate(title: string, id: number): boolean {
        var item = this.list.find(x => x.title == title && x.id != id)
        if (item == undefined)
            return false
        return true
    }

    orderByTitle(list: Todo[]): Todo[] {
        return list.sort(function (a, b) {
            if (a.title < b.title) { return -1; }
            if (a.title > b.title) { return 1; }
            return 0;
        })
    }
}