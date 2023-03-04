import { useState, useRef } from "react";
import "./Todo.css";

const Todo = () => {
  const input = useRef();
  const buttonId = useRef();
  const [state, setState] = useState([
    { name: "hello", id: `hello${Math.random() * 5}` },
    { name: "goodbye", id: `hello${Math.random() * 5}` },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = input.current.value;
    console.log(value);
    setState((prevState) => [
      ...prevState,
      { name: value, id: `${value}-${Math.random() * 5}` },
    ]);
    input.current.value = "";
  };
  const removeItem = (event) => {
    const newState = state.filter((item) => item.id !== event.target.value);
    setState(newState);
  };
  const list = state.map((item) => {
    return (
      <li key={item.id}>
        <div id="list">
          <p>{item.name}</p>
          <button
            class="button-44"
            onClick={(e) => removeItem(e)}
            value={item.id}
            ref={buttonId}
          >
            X
          </button>
        </div>
      </li>
    );
  });
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={input} />
        <button class="button-85" type="submit">
          <p>Add Item</p>
        </button>
      </form>
      <div>
        <ul>{list}</ul>
      </div>
    </section>
  );
};

export default Todo;
