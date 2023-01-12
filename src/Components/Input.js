import React from "react";
const Input = (props) => {
    const handleChange = event => {
        props.setTask(event.target.value);
        console.log('value is:', event.target.value);
    }
    return<div className={'flex-box bk-div space'}>

        <input placeholder={"Task Content"} type="text" id="task"
               name="task" onChange={handleChange} value={props.task}/>
        <button onClick={() => {
            if (props.task !== '') {
                let newTodo = {
                    content: props.task, isCompleted: false
                };
                props.setTodos([...props.todos, newTodo]);
                props.setTask('');
            }
        }}>Add
        </button></div>
}
export default Input;