import React, { useState, useEffect } from "react";
import { ToDoItem } from "./components/ToDoItem";
import { CreateItem } from "./components/CreateItem";

function App() {
    const todosInitialList = [
        { id: 1, label: "Hello there", done: false },
        { id: 2, label: "You!", done: true }
    ];

    const [todos, setTodos] = useState(todosInitialList);

    function changeTodosState(changedTodo) {
        let todosNew = [];

        const foundTodo = todos.find(t => t.id === changedTodo.id);

        if (foundTodo) {
            todosNew = todos.map(t =>
                t.id === changedTodo.id ? changedTodo : t
            );
        } else {
            // here is new item, let's append it
            todosNew = [...todos, changedTodo];
        }

        setTodos(todosNew);
    }

    useEffect(() => {
        let unfinishedTasksCouner = todos.filter(t => t.done === false).length;
        document.title = `you have ${unfinishedTasksCouner} not finished tasks`;
    });

    return (
        <>
            <h1>Todo list</h1>
            <CreateItem
                changeTodosState={changeTodosState}
                todosLength={todos.length}
            />
            <ul>
                {todos.map(todo => {
                    return (
                        <ToDoItem
                            key={todo.id}
                            {...todo}
                            todo={todo}
                            changeTodosState={changeTodosState}
                        />
                    );
                })}
            </ul>
        </>
    );
}

export default App;
