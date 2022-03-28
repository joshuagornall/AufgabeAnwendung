import { FormEvent } from "react";
import "./InputField.style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Aufgabe eingeben"
        className="input-box"
      ></input>
      <button className="input-submit" type="submit">
        +
      </button>
    </form>
  );
};

export default InputField;
