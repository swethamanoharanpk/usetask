import React, { useCallback, useMemo, useState } from 'react'
import { Sememo } from './Second';

export const First = () => {
    console.log("first page re rendered");
    
    const [state,setstate] = useState(0)
    const [state1,setstate1] = useState(0)
    
    const value = ()=>{
        console.log("function");
        
    }
    const Hello = useCallback(value,[state])

    // const display = useMemo(()=>{
    //     var i = 0;
    //     while(i<200000000)
    //         i++
    //     return state %2 ==0
    // },[state])
    
  return (
    <div>
    {/*{display ? "even" : "odd"}*/}
    <h2>first page</h2>
    <h1>stateone{state}</h1>
    <h1>statetwo{state1}</h1>
    <button onClick={()=>{setstate(state+1)}}>Button</button>
    <button onClick={()=>{setstate1(state1+1)}}>Button</button>
    <Sememo data={Hello}/>
    </div>
  )
}
