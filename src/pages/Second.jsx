import React from 'react'

const Second = ({data}) => {
    console.log("child component re rendered");
    data()
    
  return (
    <div>
    <h2>second page</h2>
    </div>
  )
}
export const Sememo = React.memo(Second)
