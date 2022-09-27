import React from "react";
import "./style.css";

const TodoList=()=>{


    return (
        <>
        <div>
            <div className="main-heading">
                <h1>Todo-List</h1>
            </div>
            <div className="image">
                <img  src="./images/todo.png" alt="tod "/>
                <figcaption>Add your list Here ✔️ </figcaption>
            </div>
            <div className="addItems">
                <input type="text" placeholder="✍️ Add Items"></input>
                <i class="fa-solid fa-2x fa-plus btn plus"></i>
            </div>
            
        </div>
        </>
    )
}

export default TodoList;