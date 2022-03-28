import { FormEvent } from "react";
import { FC, useState } from "react";
import "./App.css";
import InputField from "./components/InputField/InputField";
import { ToDo } from "./model";

const App: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ToDo[]>([]);
  const handleAdd = (e: FormEvent) => {
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
    e.preventDefault();
  };
  return (
    <div className="app">
      <span className="heading">tägliche Aufgaben</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
