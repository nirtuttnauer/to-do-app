import React from "react";

const TodoItem = (props) => {

    const handleClickCompleted = () => {
        props.onClick(props.index);
    };

    return (
        <div className={'flex-box bk-div'}>
            <button onClick={handleClickCompleted}>
                {props.isCompleted ? <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" className={"check"}><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" className={"cross"} width="18" height="18"><path fill="none" stroke="#FFF" strokeWidth="2" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>}
            </button>
            <p>{props.content}</p>

        </div>
    );
};

export default TodoItem;
