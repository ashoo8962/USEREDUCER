import { useState, useReducer } from 'react'

import './App.css'

const initialState=0
//define kiya
const reducer = (state, action) => {
  console.log(state,action)

  if(action.type==='incremment')

    return state+1;
    if(action.type==='decremment')
    return state-1;

    return state
}

function App() {
  // const [count, setCount] = useState(0)

 const[state,dispatch] =  useReducer(reducer, initialState)
 



  return (
    <>
      <div>
<p>{state}</p>
        <button onClick={() => dispatch({type:'incremment'})}>
          Increment
        </button>

        <button onClick={() => dispatch({type:'decremment'})}>
          Decrement  
        </button>
      </div>
    </>
  )

}
export default App
