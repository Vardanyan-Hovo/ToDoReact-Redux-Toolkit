import React from "react"
import { useDispatch } from "react-redux";
import {deletetodoelement, isCompletecheng}from "./todoSlice"
import "./todo.css"
 
export function Todoelement({elementbyTodo}){ 
    const dispatch = useDispatch();
    return (
        <div  className="toDoAny">
            <input type="checkbox" onChange={(e)=>{
               dispatch(isCompletecheng(elementbyTodo));
            }}/>
            <span>{elementbyTodo.title}</span>
            <button  onClick={()=>{
                dispatch(deletetodoelement(elementbyTodo));
            }}>X</button>
        </div>
    )
}