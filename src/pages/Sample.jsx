import React from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { carrier } from './Store'
import { Link } from 'react-router-dom'


function Sample() {


    const {dispatch} = useContext(carrier)
    
    function data(){
        axios.get("https://jsonplaceholder.typicode.com/comments").then((result)=>{console.log(result.data.slice(0,10))
            dispatch(result.data.slice(0,10))
        })
    }
  return (
    <div>
    <button onClick={data}>Button</button>
    <h2><Link to={'/hello'}>hellopage</Link></h2>
    </div>
  )
}

export default Sample