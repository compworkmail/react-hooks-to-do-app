import React from "react";

export function CreateItem(props) {
    const { changeTodosState, todosLength } = props;

    const sumbitHandler = event => {
        event.preventDefault();

        const label = document.getElementById("label").value;

        if (label) {
            changeTodosState({
                id: todosLength + 1,
                label,
                done: false
            });
        }
    };

    return (
        <form onSubmit={sumbitHandler}>
            <input
                type="text"
                name="label"
                id="label"
                placeholder="Enter new item for to-do list"
            />
            <button type="submit">Add new</button>
        </form>
    );
}
