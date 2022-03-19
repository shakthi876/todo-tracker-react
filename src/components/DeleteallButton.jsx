import React from 'react'

const DeleteallButton = ({setTodos}) => {
  return (
    <div> <button onClick={()=>setTodos([])} > Delete ALL</button> </div>
  )
}

export default DeleteallButton