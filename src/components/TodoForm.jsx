import React from 'react'

const TodoForm = ( {handleSubmit,todo,setTodo,editID} ) => {
  return (
    <>
    <h2>Task Trackers</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">{editID ? "Update" : "Add"}</button>
        </form>
    </>
  )
}

export default TodoForm