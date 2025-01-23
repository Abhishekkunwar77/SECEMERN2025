import { useReducer } from "react"

const UseReducerEX=()=>{
    function Reducer(state,action){
        switch(action.type){
            case 'increment':
                return {val:state.val++};
            case 'decrement':
                return {val:state.val--};
            default:
                return state;
        }
    }
    var [state,setaction] =useReducer(Reducer,{val:0})
    return(
        <div>
           
            <button onClick={()=>{setaction({type:'increment'})}}>+</button>
            <span>{state.val}</span>
            <button onClick={()=>{setaction({type:'decrement'})}}>-</button>
        </div>
    )
}
export default UseReducerEX