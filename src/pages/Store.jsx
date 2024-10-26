import { useEffect, useReducer } from "react";
import { createContext } from "react";

export const carrier = createContext()

const initialValue = {
    values : JSON.parse(localStorage.getItem('localData'))|| null
}
export const Store = ({children})=>{

    function reducer(state,action){
        console.log("dis",action)
        return {values: action}

    }
    const [state,dispatch] = useReducer(reducer,initialValue)
    console.log("state",state.values);

    useEffect(()=>{
        localStorage.setItem("localData",JSON.stringify(state.values))
    },[state.values])
    
    return(
        <div>
        <carrier.Provider value={{dispatch,helloValue : state.values}}>
        {children}
        </carrier.Provider>

        </div>

    )
}