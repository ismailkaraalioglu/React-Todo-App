import { useState } from "react";

function Form({ todo, setTodo }) {
  const [inputText, setInputText] = useState("");

  const onChangeInput = (e) => {
    setInputText(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return false;
    }
    setTodo([
      ...todo,
      {
        id: Math.floor(Math.random() * 10000),
        value: inputText,
        isCompleted: false,
      },
    ]);
    setInputText("");
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={inputText}
        onChange={onChangeInput}
      />
    </form>
  );
}

export default Form;
