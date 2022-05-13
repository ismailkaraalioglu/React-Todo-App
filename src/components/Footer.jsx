import { useEffect } from "react";

function Footer({
  todo,
  setTodo,
  filterCategory,
  setFilterCategory,
  filterTodo,
  setFilterTodo,
}) {
  useEffect(() => {
    if (filterCategory === 1) {
      setFilterTodo(todo.filter((item) => item.isCompleted == false));
    } else if (filterCategory === 2) {
      setFilterTodo(todo.filter((item) => item.isCompleted));
    } else {
      setFilterTodo(todo);
    }
  }, [filterCategory, todo]);

  // Completed olan todoları silmek için.
  const clearCompleted = () => {
    setTodo(todo.filter((item) => !item.isCompleted));
  };

  // Clear Completed butonunu hidden yada completed yapmak için.
  let todoCompleted = 0;
  for (let i = 0; i < todo.length; i++) {
    if (todo[i].isCompleted) {
      todoCompleted++;
    }
  }

  return (
    <footer className={todo.length === 0 ? "hidden" : "footer"}>
      <span className="todo-count">
        <strong>{filterTodo.length}</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            className={filterCategory === 0 ? "selected" : ""}
            onClick={() => setFilterCategory(0)}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={filterCategory === 1 ? "selected" : ""}
            onClick={() => setFilterCategory(1)}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={filterCategory === 2 ? "selected" : ""}
            onClick={() => setFilterCategory(2)}
          >
            Completed
          </a>
        </li>
      </ul>

      <button
        className={todoCompleted === 0 ? "hidden" : "clear-completed"}
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
