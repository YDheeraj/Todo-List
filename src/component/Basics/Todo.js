import React, { useState } from "react";
import { useEffect } from "react";
import "./style.css";

const getLocalData=()=>{
    const list=localStorage.getItem("TodoListdata");
    if(list){
        return JSON.parse(list);
    }
    else{
        return ([]);
    }
}

const TodoList=()=>{

    const [inputData,setInputData]=useState("");
    const [Items,setItems]=useState(getLocalData());
    const [IsEditItem,setIsEditItem]=useState("");
    const [toggleBtn,settoggleBtn]=useState(false);
    const addItems=()=>{
          if(!inputData){
            alert("Please enter Items");
          }
          else if(inputData && toggleBtn){
            setItems(Items.map((ele)=>{
                if(ele.id===IsEditItem){
                    return ({...Items,name:inputData});
                }
                return ele;
            }));
            setInputData("");
            setIsEditItem(null)
            settoggleBtn(false);
          }
          else{
            const myNewInputData={
                id:new Date().getTime().toString(),
                name:inputData
            };
            setItems([...Items,myNewInputData]);
            setInputData("")
          }
    };
/////////////   edit Items //////////////////
const editItem=(idx)=>{
    const Item_tobe_edited=Items.find((ele)=>{
             return ele.id===idx;
    })
     setInputData(Item_tobe_edited.name);
     settoggleBtn(true);
    setIsEditItem(idx);

}


//    delete a particular  items

    const deleItem=(idx)=>{
         const updatedItem=Items.filter((ele)=>{
            return ele.id!==idx;
         })
         setItems(updatedItem);
    }

////   delete all Items
  const deleteAll=()=>{
    setItems([]);
  }

  ////   set data at local storage;\
  useEffect(()=>{
       localStorage.setItem("TodoListdata",JSON.stringify(Items));
  },[Items]);
/////////////////////////
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
                <input type="text" placeholder="✍️ Add Items" value={inputData} onChange={(e)=>setInputData(e.target.value)}></input>
                {toggleBtn?(<i class="fa-solid fa-2x fa-edit add-btn green togle" onClick={addItems}></i>):(<i class="fa-solid fa-2x fa-plus btn plus" onClick={addItems}></i>)}
            </div>
            <div className="show-Items">
                {
                    Items.map((ele,index)=>{
              return(
                    <div className="eachItems" key={ele.id}>
                        <h3>{ele.name}</h3>
                        <div className="todo-btn">
                          <i class="fa-solid fa-2x fa-edit add-btn green small " onClick={()=>editItem(ele.id)}></i>
                          <i class="fa-solid fa-2x fa-trash add-btn red small" onClick={()=>deleItem(ele.id)}></i>
                       </div>
                    </div>
                   )

                    }
                )}
            </div>
            
            <div className="show-Items">
                 <button className="main-btn" onClick={()=>deleteAll()}>
                    <span><b>CHECKLIST</b></span>
                 </button>
            </div>
            
        </div>
        </>
    )
}

export default TodoList;