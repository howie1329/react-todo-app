import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MainScreen from "./MainScreen";
import InputForms from "./InputForm";

function App() {
  const [todos, setTodo] = useState([]);

  //Create a New todo In Database
  async function createTodo(event, title, body) {
    event.preventDefault();
    const todo = { title, body };
    const response = await fetch("/api/", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    readTodo();
  }

  //Read Todos From Database
  async function readTodo() {
    const response = await fetch("/api/");
    const data = await response.json();
    if (response.ok) {
      setTodo(data);
    }
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home readtodo={readTodo()} />} />
        <Route path="/mainscreen" element={<MainScreen todos={todos} />} />
        <Route
          path="/mainscreen/form"
          element={<InputForms add={createTodo} />}
        />
      </Routes>
    </div>
  );
}

export default App;
