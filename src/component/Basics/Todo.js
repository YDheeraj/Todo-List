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
            <div className="show-Items">
                <div className="eachItems">
                    <h3>Apple</h3>
                    <div className="todo-btn">
                    <i class="fa-solid fa-2x fa-edit add-btn "></i>
                    <i class="fa-solid fa-2x fa-trash add-btn"></i>
                    </div>
                </div>
            </div>
            
            <div className="show-Items">
                 <button className="main-btn">
                    <span><b>CHECKLIST</b></span>
                 </button>
            </div>
            
        </div>
        </>
    )
}

export default TodoList;