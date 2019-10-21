import React from "react";

export function ToDoItem(props) {
    const { label, todo, changeTodosState, done } = props;

    const changeTodoCall = () => {
        const todoNew = { ...todo };
        todoNew.done = !todoNew.done;

        changeTodosState(todoNew);
    };

    function getLabelStyle(isDone) {
        const decoration = isDone ? "line-through" : "initial";
        return { textDecoration: decoration };
    }

    return (
        <li>
            <span style={getLabelStyle(done)}>{label}</span>
            <button type="button" onClick={changeTodoCall}>
                mark/unmark
            </button>
        </li>
    );
}
