import { useSelector, useDispatch } from "react-redux"
import { Todoelement } from "./todoelement.js"
import {Formadd} from "./formadd.js"
import {Futer} from "./Futer"
import "./todo.css"
import { selecttodoall,
    addtodo
} from "./todoSlice.js"

export function Todo(){
    const todoall = useSelector(selecttodoall);
    const dispatch = useDispatch();
    return (<div className="todo">
        <Formadd addtodo={addtodo} />
        {
        todoall.map(element => {
           return <Todoelement elementbyTodo={element} key={element.id}/>
        })
    }
    <Futer />
    </div>)
};