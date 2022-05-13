import React from "react";

function List({ todo, setTodo, filterTodo }) {
  const removeItem = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const checkboxChange = (id) => {
    setTodo(
      todo.map((item) => {
        if (item.id === id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      })
    );
  };

  const allTodoCompleted = () => {
    if (todo.every((item) => item.isCompleted)) {
      setTodo(
        todo.map((item) => {
          return { ...item, isCompleted: false };
        })
      );
    } else {
      setTodo(
        todo.map((item) => {
          if (item.isCompleted !== true) {
            return { ...item, isCompleted: true };
          }
        })
      );
    }
  };

  return (
    <section className="main">
      <input
        className="toggle-all"
        id="toggle-all"
        type="checkbox"
        onChange={allTodoCompleted}
      />
      <label
        htmlFor="toggle-all"
        className={todo.length === 0 ? "hidden" : "show"}
      >
        Mark all as complete
      </label>
      <ul className="todo-list">
        {filterTodo.map((todo) => (
          <li key={todo.id} className={todo.isCompleted ? "completed" : ""}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => checkboxChange(todo.id)}
              />
              <label>{todo.value}</label>
              <button
                className="destroy"
                onClick={() => removeItem(todo.id)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default List;
