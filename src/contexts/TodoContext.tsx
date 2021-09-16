import React, { createContext, useEffect, useState } from "react";
import { Todo } from "../models/Todo";
import { get, save } from "../services/TodoService";
import { TodoContextType } from "./TodoContextType";

export const TodoContext = createContext({
    todos: [],
    addTodo: () => { },
    removeTodo: () => { },
    toggle: () => { },
});

const TodoProvider = (props: any) => {

    const [todos, setTodos] = useState<Todo[]>(get)

    useEffect(() => {
        save(todos)
    }, [todos])

    const addTodo = (title: string) => {
        const todo: Todo = { id: todos.length++, title: title, done: false }
        setTodos([...todos, todo])
        // essa linha acima faz exatamente a mesma coisa das tres linhas abaixo:
        // const newTodos = todos
        // newTodos.push(todo)        
        // setTodos(newTodos)
    }

    const removeTodo = (todo: Todo) => {
        const index = todos.indexOf(todo)
        // filtra todos os itens que não tenham o index especificado:
        const newTodos = todos.filter((_, i) => i !== index)
        setTodos(newTodos)
    }

    const toggle = (todo: Todo) => {
        const index = todos.indexOf(todo)
        todos[index].done = !todo.done
        setTodos([...todos])
    }

    return (
        <div></div>
        // <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggle }}>
        //     {props.children}
        // </TodoContext.Provider>
    );
}

export default TodoProvider;