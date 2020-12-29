import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
const Counter = () => {
   const counter= useSelector(state=>state.counter.count)
  const dispatch= useDispatch()
    return (
        <div>
            <button onClick={()=>dispatch({type:'INCREAMENT'})}>+</button>
           <h1>counter :{counter} </h1> 
           <button onClick={()=> dispatch({type:'DECREAMENT'})}>-</button>

        </div>
    )
}

export default Counter
