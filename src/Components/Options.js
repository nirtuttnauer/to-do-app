import React from "react";

const Options = (props) => {
    const handleSortCompleted = () => {
        const newTodos = [
            ...props.todos.filter((todo) => !todo.isCompleted),
            ...props.todos.filter((todo) => todo.isCompleted),
        ];
        props.setTodos(newTodos);
    };
    const handleRemoveCompleted = () => {

        const newTodos = props.todos.filter((todo) => !todo.isCompleted);

        props.setTodos(newTodos);
    };
    const amountNotCompleted = () => {
        const amount = props.todos.filter((todo) => !todo.isCompleted);
        return amount.length
    }
    return <div className={'flex-box'}>
        <p>{amountNotCompleted()} items</p>
        <button onClick={handleSortCompleted}>Sort Completed</button>
        <button onClick={handleRemoveCompleted}>Remove completed</button>
    </div>
}
export default Options