import { useState } from "react"
import { useDispatch } from "react-redux"
import {addtodo} from "./todoSlice"

function Formadd({addtodo}){
    const dispatch = useDispatch()
    const [vol, setVol] = useState("");
 return(
    <form className="Formclass" onSubmit={(e)=>{
        e.preventDefault();
          dispatch(addtodo(vol));
          setVol("");
        }} >
        <input type="text" value={vol} onChange={(e)=>{
            if (e.target.value !== undefined)
            setVol(e.target.value);
        }}/>
        <button>ADD</button>
    </form>
 )
}

export {Formadd};