import { useSelector, useDispatch } from "react-redux"
import {lengthAlltodo, lengthComplete, setLocalStorage} from "./todoSlice.js"

function Futer(){
    const todolength = useSelector(lengthAlltodo);
    const todoComplete = useSelector(lengthComplete)
    const dispatch = useDispatch();
    return (
        <div className="toDoFuter">
            <span>{todoComplete}/{todolength} Complete</span>
            <button disabled={!todoComplete} onClick={()=>{
                dispatch(setLocalStorage())
            }}>clear Complete</button>
        </div>
    )
}
export {Futer}