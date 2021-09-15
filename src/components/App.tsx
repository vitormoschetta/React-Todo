import React from "react";
import Navbar from "./Navbar";
import TodoList from "./TodoList";

function App() {
    return (
        <div className="uk-container">
            <Navbar></Navbar>
            <TodoList></TodoList>
        </div>
    );
}

export default App;
