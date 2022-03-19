import React, { useState } from "react";
import "./App.css";
import DeleteallButton from "./components/DeleteallButton";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editID, setEditID] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editID) {
      todos.find((e) => e.id === editID);
      const updatedText = todos.map((e) =>
        e.id === editID ? { id: e.id, todo: todo } : { id: e.id, todo: e.todo }
      );
      setTodos(updatedText);
      setEditID(0);
      setTodo("");
      return;
    }
    if (todo) {
      setTodos([...todos, { id: `${todo}-${Date.now()}`, todo: `${todo}` }]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const deleteTodo = todos.filter((e) => e.id !== id);
    setTodos([...deleteTodo]);
  };

  const handleEdit = (id) => {
    setEditID(id);
    const updateText = todos.find((e) => e.id === id);
    setTodo(updateText.todo);
  };
 

  return (
    <>
      <div className="container">
        {/* No Brackets between the props  */}
        
        <TodoForm  handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} editID={editID} />

        <DeleteallButton setTodos={setTodos}/>
        <TodoList todos={todos} handleEdit={handleEdit} handleDelete={handleDelete}   />
      </div>
    </>
  );
};

export default App;
