import React from 'react'

const TodoList = ({handleDelete,handleEdit,todos}) => {
  return (
    <>
    <ul className="items">
          
          {todos.map((e) => (
            <li key={e.id}>
              <span className="single"> {e.todo}</span>
              <button
                onClick={() => {
                  handleEdit(e.id);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  handleDelete(e.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}

          
         
        </ul>
    </>
  )
}

export default TodoList