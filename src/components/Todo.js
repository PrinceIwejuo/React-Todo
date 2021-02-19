import React from "react"


const Todo = (props) => {
    const handleClick = () => {
        // console.log(props.item.id)
        props.handleItemToggle(props.item.id)
    }
    return (
        <div onClick={handleClick} className={`item${props.item.completed ? 'completed' : ''}`}>
            {props.item.task}
        </div>
    )
};

export default Todo;