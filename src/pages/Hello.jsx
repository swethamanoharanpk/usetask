import React from 'react'
import { useContext } from 'react'
import { carrier } from './Store'

function Hello() {
    const {helloValue,dispatch} = useContext(carrier)

    function removeData(){
      dispatch('null')
    }


  return (
    <div>
    
    {helloValue.map((li)=>{
      return(
        <h2>{li.name}</h2>)
    })}

    <button onClick={removeData}>remove</button>


      
      
    </div>
  
  )
}

export default Hello