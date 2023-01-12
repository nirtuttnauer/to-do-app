import TodoItem from "./TodoItem";
import React, {useState} from "react";


const TodoList = (props) => {


    const handleTodoClick = (index) => {
        const newTodos = [...props.todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        props.setTodos(newTodos);
    };
    const handleTodoRemove = (index) => {
        // Create a new array with the todo item at the given index removed
        const newTodos = [...props.todos.slice(0, index), ...props.todos.slice(index + 1)];
        // Update the todos state variable with the new array
        props.setTodos(newTodos);
    };

    return (
        <div>





            {props.todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    content={todo.content}
                    isCompleted={todo.isCompleted}
                    onClick={() => handleTodoClick(index)}
                    onRemove={() => handleTodoRemove(index)}
                />
            ))}


        </div>
    );
};

export default TodoList;